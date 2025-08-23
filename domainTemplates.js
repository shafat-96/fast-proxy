// Domain-specific header templates for various streaming services

export const domainTemplates = [
  // Padorupado.ru
  {
    pattern: /\.padorupado\.ru$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://kwik.si',
        'referer': 'https://kwik.si/',
      };
    }
  },

  // Krussdomi.com
  {
    pattern: /krussdomi\.com$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://hls.krussdomi.com',
        'referer': 'https://hls.krussdomi.com/',
      };
    }
  },

  {
    pattern: /\.akamaized\.net$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://bl.krussdomi.com',
        'referer': 'https://bl.krussdomi.com/',
      };
    }
  },

  {
    pattern: /\.megaup\.cc/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://megaup.cc',
        'referer': 'https://megaup.cc/',
      };
    }
  },

  {
    pattern: /\.nebulax-89\.biz/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://megaup.cc',
        'referer': 'https://megaup.cc/',
      };
    }
  },

    {
    pattern: /\.odyssey-19\.biz/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://megaup.cc',
        'referer': 'https://megaup.cc/',
      };
    }
  },
  
  
  {
    pattern: /\.anih1\.top$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://ee.anih1.top',
        'referer': 'https://ee.anih1.top/',
      };
    }
  },

  {
    pattern: /\.xyk3\.top$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://ee.anih1.top',
        'referer': 'https://ee.anih1.top/',
      };
    }
  },

  {
    pattern: /\.premilkyway\.com$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://uqloads.xyz',
        'referer': 'https://uqloads.xyz/',
      };
    }
  },

   // kwikie.ru
   {
    pattern: /\.kwikie\.ru$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://kwik.si',
        'referer': 'https://kwik.si/',
      };
    }
  },

  // Revolutionizingtheweb.xyz
  {
    pattern: /revolutionizingtheweb\.xyz$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://hls.krussdomi.com',
        'referer': 'https://hls.krussdomi.com/',
      };
    }
  },

  // nextgentechnologytrends.xyz
  {
    pattern: /nextgentechnologytrends\.xyz$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://hls.krussdomi.com',
        'referer': 'https://hls.krussdomi.com/',
      };
    }
  },

  // smartinvestmentstrategies.xyz
  {
    pattern: /smartinvestmentstrategies\.xyz$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://hls.krussdomi.com',
        'referer': 'https://hls.krussdomi.com/',
      };
    }
  },

  // creativedesignstudioxyz.xyz
  {
    pattern: /creativedesignstudioxyz\.xyz$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://hls.krussdomi.com',
        'referer': 'https://hls.krussdomi.com/',
      };
    }
  },

  // breakingdigitalboundaries.xyz
  {
    pattern: /breakingdigitalboundaries\.xyz$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://hls.krussdomi.com',
        'referer': 'https://hls.krussdomi.com/',
      };
    }
  },

  // ultimatetechinnovation.xyz
  {
    pattern: /ultimatetechinnovation\.xyz$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://hls.krussdomi.com',
        'referer': 'https://hls.krussdomi.com/',
      };
    }
  },

  // ultimatetechinnovation.xyz
  {
    pattern: /raffaellocdn\.net$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://kerolaunochan.online',
        'referer': 'https://kerolaunochan.online/',
      };
    }
  },
  
  // dewbreeze84.online
  {
    pattern: /dewbreeze84\.online$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://megacloud.blog',
        'referer': 'https://megacloud.blog/',
      };
    }
  },

  // mistyvalley31.live
  {
    pattern: /mistyvalley31\.live$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://megacloud.blog',
        'referer': 'https://megacloud.blog/',
      };
    }
  },

    // mistyvalley31.live
    {
      pattern: /lightningspark77\.pro$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },
  
    // clearskydrift45.site
    {
      pattern: /clearskydrift45\.site$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://kerolaunochan.online',
          'referer': 'https://kerolaunochan.online/',
        };
      }
    },
  
    // thunderwave48.xyz
    {
      pattern: /thunderwave48\.xyz$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    // stormwatch95.site
    {
      pattern: /stormwatch95\.site$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    // windyrays29.online
    {
      pattern: /windyrays29\.online$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },
  
    // mistyvalley31.live
    {
      pattern: /thunderstrike77\.online$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    // mistyvalley31.live
    {
      pattern: /lightningflash39\.live$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    // mistyvalley31.live
    {
      pattern: /cloudburst82\.xyz$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    // drizzleshower19.site
    {
      pattern: /drizzleshower19\.site$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    // vmeas.cloud
    {
      pattern: /vmeas\.cloud$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://vidmoly.to',
          'referer': 'https://vidmoly.to/',
        };
      }
    },
    
    // nextwaveinitiative
    {
      pattern: /nextwaveinitiative\.xyz$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://edgedeliverynetwork.org',
          'referer': 'https://edgedeliverynetwork.org/',
        };
      }
    },

    // shadowlandschronicles
    {
      pattern: /shadowlandschronicles\.com$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://edgedeliverynetwork.org',
          'referer': 'https://edgedeliverynetwork.org/',
        };
      }
    },

    // lightningbolts.ru
    {
      pattern: /lightningbolts\.ru$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://vidsrc.cc',
          'referer': 'https://vidsrc.cc/',
        };
      }
    },


    // lightningbolt.site
    {
      pattern: /lightningbolt\.site$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://vidsrc.cc',
          'referer': 'https://vidsrc.cc/',
        };
      }
    },

    // vidlvod.store
    {
      pattern: /vidlvod\.store$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://vidlink.pro',
          'referer': 'https://vidlink.pro/',
        };
      }
    },

    // vyebzzqlojvrl.top
    {
      pattern: /vyebzzqlojvrl\.top$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://vidsrc.cc',
          'referer': 'https://vidsrc.cc/',
        };
      }
    },

    // sunnybreeze16.live
    {
      pattern: /sunnybreeze16\.live$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://megacloud.store',
          'referer': 'https://megacloud.store/',
        };
      }
    },

    // 1stkmgv1.cloud
    {
      pattern: /1stkmgv1\.com$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://vidmoly.to',
          'referer': 'https://vidmoly.to/',
        };
      }
    },

    // rainstorm92.xyz
    {
      pattern: /rainstorm92\.xyz$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

  // cloudydrift38.site
  {
    pattern: /cloudydrift38\.site$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://megacloud.blog',
        'referer': 'https://megacloud.blog/',
      };
    }
  },

    // sunshinerays93.live
    {
      pattern: /sunshinerays93\.live$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    // sunburst66.pro
    {
      pattern: /sunburst66\.pro$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

        // clearbluesky72.wiki
        {
          pattern: /clearbluesky72\.wiki$/i,
          headers: {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
            'accept': '*/*',
            'accept-language': 'en-US,en;q=0.5',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
          },
          headersFn: (url) => {
            return {
              'origin': 'https://megacloud.blog',
              'referer': 'https://megacloud.blog/',
            };
          }
        },
    

    // breezygale56.online
    {
      pattern: /breezygale56\.online$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    // frostbite27.pro
    {
      pattern: /frostbite27\.pro$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'cache-control': 'no-cache',
        'pragma': 'no-cache',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    // frostywinds57.live
    {
      pattern: /frostywinds57\.live$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    // icyhailstorm64.wiki
    {
      pattern: /icyhailstorm64\.wiki$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'cache-control': 'no-cache',
        'pragma': 'no-cache',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    // icyhailstorm29.online
    {
      pattern: /icyhailstorm29\.online$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    
    // windflash93.xyz
    {
      pattern: /windflash93\.xyz$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    // stormdrift27.site
    {
      pattern: /stormdrift27\.site$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },

    // tempestcloud61.wiki
    {
      pattern: /tempestcloud61\.wiki$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://megacloud.blog',
          'referer': 'https://megacloud.blog/',
        };
      }
    },
    
    // feetcdn.com
    {
      pattern: /\.feetcdn\.com$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://kerolaunochan.online',
          'referer': 'https://kerolaunochan.online/',
        };
      }
    },

    // raffaellocdn.net
    {
      pattern: /\.raffaellocdn\.net$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://kerolaunochan.online',
          'referer': 'https://kerolaunochan.online/',
        };
      }
    },

    // heatwave90.pro
    {
      pattern: /heatwave90\.pro$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://kerolaunochan.live',
          'referer': 'https://kerolaunochan.live/',
        };
      }
    },

    // humidmist27.wiki
    {
      pattern: /humidmist27\.wiki$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://kerolaunochan.live',
          'referer': 'https://kerolaunochan.live/',
        };
      }
    },

    // frozenbreeze65.live
    {
      pattern: /frozenbreeze65\.live$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://kerolaunochan.live',
          'referer': 'https://kerolaunochan.live/',
        };
      }
    },

    // drizzlerain73.online
    {
      pattern: /drizzlerain73\.online$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://kerolaunochan.live',
          'referer': 'https://kerolaunochan.live/',
        };
      }
    },


    // sunrays81.xyz
    {
      pattern: /sunrays81\.xyz$/i,
      headers: {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.5',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
      },
      headersFn: (url) => {
        return {
          'origin': 'https://kerolaunochan.live',
          'referer': 'https://kerolaunochan.live/',
        };
      }
    },

    {
    pattern: /embed\.su$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://embed.su',
        'referer': 'https://embed.su/',
      };
    }
  },

  {
    pattern: /usbigcdn\.cc$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://embed.su',
        'referer': 'https://embed.su/',
      };
    }
  },

  {
    pattern: /\.congacdn\.cc$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://embed.su',
        'referer': 'https://embed.su/',
      };
    }
  },
  
  // Akamai CDN
  {
    pattern: /\.akamaized\.net$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'origin': 'https://players.akamai.com',
      'referer': 'https://players.akamai.com/',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    }
  },
  
  // Cloudfront CDN
  {
    pattern: /\.cloudfront\.net$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'origin': 'https://d2zihajmogu5jn.cloudfront.net',
      'referer': 'https://d2zihajmogu5jn.cloudfront.net/',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
    }
  },

  // twitch CDN
  {
    pattern: /\.ttvnw\.net$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'origin': 'https://www.twitch.tv',
      'referer': 'https://www.twitch.tv/',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
    }
  },

  // twitch CDN
  {
    pattern: /\.xx.fbcdn\.net$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'origin': 'https://www.facebook.com',
      'referer': 'https://www.facebook.com/',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
    }
  },

     // vkcdn5.com
     {
        pattern: /\.vkcdn5\.com$/i,
        headers: {
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
          'accept': '*/*',
          'accept-language': 'en-US,en;q=0.5',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
        },
        headersFn: (url) => {
          return {
            'origin': 'https://vkspeed.com',
            'referer': 'https://vkspeed.com/',
          };
        }
      },
  
  // viddsn.cfd
  {
    pattern: /viddsn\.cfd$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://vidwish.live',
        'referer': 'https://vidwish.live/',
      };
    }
  },

  // dotstream.buzz CDN
  {
    pattern: /dotstream\.buzz$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://megaplay.buzz',
        'referer': 'https://megaplay.buzz/',
      };
    }
  },

  // nuvoro.click domains
  {
    pattern: /\.nuvoro\.click$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://megaplay.buzz',
        'referer': 'https://megaplay.buzz/',
      };
    }
  },

  // viddsn.live domains
  {
    pattern: /\.viddsn\.live$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://vidwish.live',
        'referer': 'https://vidwish.live/',
      };
    }
  },

  // viddsn.lol domains
  {
    pattern: /\.viddsn\.lol$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://vidwish.live',
        'referer': 'https://vidwish.live/',
      };
    }
  },

  {
    pattern: /\.viddsn\.sbs$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://vidwish.live',
        'referer': 'https://vidwish.live/',
      };
    }
  },
  // megacdn.co
  {
    pattern: /\.megacdn\.co$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://videostr.net',
        'referer': 'https://videostr.net/',
      };
    }
  },

    {
    pattern: /\.netmagcdn\.com$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://megacloud.blog',
        'referer': 'https://megacloud.blog/',
      };
    }
  },

  // ss-cdn*.top
  {
    pattern: /\.ss-cdn.*\.top$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://play.zephyrflick.top',
        'referer': 'https://play.zephyrflick.top/',
      };
    }
  },

  // HollyMovieHD CDN domains
  {
    pattern: /hollymoviehd-official\.com$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://pkaystream.cc',
        'referer': 'https://pkaystream.cc/',
      };
    }
  },

  {
    pattern: /pkayprekcdn25\.lol$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://pkaystream.cc',
        'referer': 'https://pkaystream.cc/',
      };
    }
  },

  {
    pattern: /hollymoviehdcdn05\.site$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://pkaystream.cc',
        'referer': 'https://pkaystream.cc/',
      };
    }
  },

  {
    pattern: /hollymoviehdcdn03\.asia$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://pkaystream.cc',
        'referer': 'https://pkaystream.cc/',
      };
    }
  },

 {
    pattern: /hollymoviehdcdn04\.xyz$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://pkaystream.cc',
        'referer': 'https://pkaystream.cc/',
      };
    }
  },

  {
    pattern: /hakunaymatata\.com$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://moviebox.ph',
        'referer': 'https://moviebox.ph/',
      };
    }
  },

  {
    pattern: /zencloud\.cc$/i,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'accept-language': 'en-US,en;q=0.5',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    },
    headersFn: (url) => {
      return {
        'origin': 'https://zencloud.cc',
        'referer': 'https://zencloud.cc/',
      };
    }
  },

  // General default template
  {
    pattern: /.*/,
    headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0',
      'accept': '*/*',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site',
    }
  }
];


// Find the appropriate template for a given URL
export function findTemplateForDomain(url) {
  const hostname = url.hostname;
  
  for (const template of domainTemplates) {
    if (template.pattern.test(hostname)) {
      return template;
    }
  }
  
  // Return the last template (general default) if no match
  return domainTemplates[domainTemplates.length - 1];
}

// Generate headers for a specific URL
export function generateHeadersForDomain(url, additionalHeaders = {}) {
  const template = findTemplateForDomain(url);
  let headers = { ...template.headers };
  
  // Apply function-based headers if available
  if (template.headersFn) {
    const fnHeaders = template.headersFn(url);
    headers = { ...headers, ...fnHeaders };
  }
  
  // Add any additional headers
  headers = { ...headers, ...additionalHeaders };
  
  return headers;
}
