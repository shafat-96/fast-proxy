// Simple in-memory cache for segments

class SegmentCache {
  constructor() {
    this.cache = new Map();
    this.maxSize = 50; // Maximum number of items in cache
    this.ttl = 5 * 60 * 1000; // 5 minutes in milliseconds
    this.maxItemSize = 10 * 1024 * 1024; // 10MB max per item
  }

  // Get cached item
  get(key) {
    const item = this.cache.get(key);
    
    if (!item) {
      return null;
    }
    
    // Check if item has expired
    if (Date.now() - item.timestamp > this.ttl) {
      this.cache.delete(key);
      return null;
    }
    
    return item.data;
  }

  // Set item in cache
  set(key, data) {
    // Don't cache if data is too large
    if (data && data.data && data.data.length > this.maxItemSize) {
      return;
    }
    
    // Remove oldest items if cache is full
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    
    this.cache.set(key, {
      data: data,
      timestamp: Date.now()
    });
  }

  // Clear expired items
  cleanup() {
    const now = Date.now();
    for (const [key, item] of this.cache.entries()) {
      if (now - item.timestamp > this.ttl) {
        this.cache.delete(key);
      }
    }
  }

  // Get cache stats
  stats() {
    return {
      size: this.cache.size,
      maxSize: this.maxSize,
      ttl: this.ttl
    };
  }
}

// Create a singleton instance
const segmentCache = new SegmentCache();

// Periodically clean up expired items
setInterval(() => {
  segmentCache.cleanup();
}, 60 * 1000); // Every minute

export default segmentCache;
