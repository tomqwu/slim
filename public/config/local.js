window.config = {
  // This must match the location configured for web server
  path: '/',
  servers: [
    {
      id: 'local',
      // This must match the proxy location configured for the web server
      //url: 'http://localhost:8008/dcm4chee-arc/aets/DCM4CHEE/rs',
      url: 'https://sphdicomviewerws-sph-dicom-service.dicom.azurehealthcareapis.com/v1',
      write: true
    }
  ],
  // oidc: {
  //   authority: "https://login.microsoftonline.com",
  //   clientId: "96beb278-dd40-481b-8f74-adca6a671d7a",
  //   //scope: "email profile openid https://www.googleapis.com/auth/cloud-healthcare",
  //   grantType: "implicit",
  //   //endSessionEndpoint: "https://www.google.com/accounts/Logout"
  // },
  disableWorklist: false,
  disableAnnotationTools: false,
  mode: 'light',
  preload: true,
  annotations: [
    {
      finding: {
        value: '85756007',
        schemeDesignator: 'SCT',
        meaning: 'Tissue'
      },
      findingCategory: {
        value: '91723000',
        schemeDesignator: 'SCT',
        meaning: 'Anatomical structure'
      },
      geometryTypes: ['polygon', 'freehandpolygon'],
      style: {
        stroke: {
          color: [255, 255, 0, 1],
          width: 2
        },
        fill: {
          color: [255, 255, 255, 0.2]
        }
      },
    },
    {
      finding: {
        value: '108369006',
        schemeDesignator: 'SCT',
        meaning: 'Tumor'
      },
      findingCategory: {
        value: '49755003',
        schemeDesignator: 'SCT',
        meaning: 'Morphologically abnormal structure'
      },
      geometryTypes: ['polygon', 'freehandpolygon'],
      style: {
        stroke: {
          color: [255, 0, 255, 1],
          width: 2
        },
        fill: {
          color: [255, 255, 255, 0.2]
        }
      }
    },
    {
      finding: {
        value: '34823008',
        schemeDesignator: 'SCT',
        meaning: 'Tumor necrosis'
      },
      findingCategory: {
        value: '49755003',
        schemeDesignator: 'SCT',
        meaning: 'Morphologically abnormal structure'
      },
      geometryTypes: ['polygon', 'freehandpolygon'],
      style: {
        stroke: {
          color: [51, 204, 51, 1],
          width: 2
        },
        fill: {
          color: [255, 255, 255, 0.2]
        }
      }
    },
    {
      finding: {
        value: '369705002',
        schemeDesignator: 'SCT',
        meaning: 'Invasive tumor border'
      },
      findingCategory: {
        value: '395557000',
        schemeDesignator: 'SCT',
        meaning: 'Tumor finding'
      },
      geometryTypes: ['line', 'freehandline'],
      style: {
        stroke: {
          color: [51, 102, 255, 1],
          width: 2
        },
        fill: {
          color: [255, 255, 255, 0.2]
        }
      }
    },
    {
      finding: {
        value: '399721002',
        schemeDesignator: 'SCT',
        meaning: 'Tumor infiltration by lymphocytes present'
      },
      findingCategory: {
        value: '395557000',
        schemeDesignator: 'SCT',
        meaning: 'Tumor finding'
      },
      geometryTypes: ['polygon', 'freehandpolygon'],
      style: {
        stroke: {
          color: [51, 204, 204, 1],
          width: 2
        },
        fill: {
          color: [255, 255, 255, 0.2]
        }
      }
    },
    {
      finding: {
        value: '47973001',
        schemeDesignator: 'SCT',
        meaning: 'Artifact'
      },
      geometryTypes: ['polygon', 'freehandpolygon'],
      style: {
        stroke: {
          color: [255, 80, 80, 1],
          width: 2
        },
        fill: {
          color: [255, 255, 255, 0.2]
        }
      }
    }
  ]
}
