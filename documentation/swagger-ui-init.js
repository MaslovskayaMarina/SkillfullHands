
window.onload = function() {
  // Build a system
  var url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  var options = {
  "swaggerDoc": {
    "openapi": "3.0.0",
    "info": {
      "title": "Albums store",
      "description": "Add your description",
      "license": {
        "name": "MIT",
        "url": ""
      },
      "termsOfService": "",
      "version": "1.0.0"
    },
    "servers": [],
    "security": [
      {
        "BasicAuth": []
      }
    ],
    "components": {
      "securitySchemes": {
        "BasicAuth": {
          "type": "http",
          "scheme": "basic"
        }
      },
      "schemas": {}
    },
    "paths": {
      "port": {
        "get": {
          "deprecated": false,
          "summary": "",
          "security": [],
          "responses": {},
          "parameters": [],
          "tags": []
        }
      },
      "/": {
        "get": {
          "deprecated": false,
          "summary": "Главная страница",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "homePage"
          ]
        }
      },
      "/requests/list": {
        "get": {
          "deprecated": false,
          "summary": "Страница со списком заявок",
          "description": "Делает SQL-запрос и отрисовывает страницу с учётом полученных данных",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "getRequestListPage"
          ]
        }
      },
      "/requests/edit/:id": {
        "get": {
          "deprecated": false,
          "summary": "Страница с редактированием заявки",
          "description": "Делает SQL-запрос и отрисовывает страницу редактирования заявки",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "getEditPage"
          ]
        },
        "post": {
          "deprecated": false,
          "summary": "Обновление данных по заявке",
          "description": "Делает SQL-запрос и перенаправляет на страницу с списком заявок",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "postUpdatedRequest"
          ]
        }
      },
      "/requests/edit/:id/components/delete/:component": {
        "get": {
          "deprecated": false,
          "summary": "Удаление компонента, привязанного к заявкке",
          "description": "Делает SQL-запрос и делает переадресацию на страницу редактирования компнента",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "deleteRequestComponent"
          ]
        }
      },
      "/requests/components/add/:requestId": {
        "get": {
          "deprecated": false,
          "summary": "Страница с добавлением компонента в заявке",
          "description": "Открывает страницу добавления заявки",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "getCreateComponentPage"
          ]
        },
        "post": {
          "deprecated": false,
          "summary": "Добавление компонента в базу данных",
          "description": "Делает SQL-запрос и перенаправляет на страницу с редактированем заявки",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "createComponent"
          ]
        }
      },
      "/requests/delete/:id": {
        "get": {
          "deprecated": false,
          "summary": "Удаление заявки",
          "description": "Делает SQL-запрос и перенаправляет на страницу со списком заявок",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "deleteRequest"
          ]
        }
      },
      "/requests/create": {
        "get": {
          "deprecated": false,
          "summary": "Страница создания заявки",
          "description": "Делает SQL-запрос и отрисовывает страницу",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "getCreateRequestPage"
          ]
        },
        "post": {
          "deprecated": false,
          "summary": "Добавление заявки в базу данных",
          "description": "Делает SQL-запрос и перенаправляет на страницу с списком заявок",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "createRequest"
          ]
        }
      },
      "/requests/detail/:id": {
        "get": {
          "deprecated": false,
          "summary": "Страница с детализацией заявки",
          "description": "Делает SQL-запрос и отрисовывает страницу",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "getRequestDetalization"
          ]
        }
      },
      "/clients/list": {
        "get": {
          "deprecated": false,
          "summary": "Страница со списком клиентов",
          "description": "Делает SQL-запрос и отрисовывает страницу с учётом полученных данных",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "getClientListPage"
          ]
        }
      },
      "/clients/edit/:id": {
        "get": {
          "deprecated": false,
          "summary": "Страница с редактированием клиента",
          "description": "Делает SQL-запрос и отрисовывает страницу редактирования клиента",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "getEditPage"
          ]
        },
        "post": {
          "deprecated": false,
          "summary": "Обновление данных клиента",
          "description": "Делает SQL-запрос и перенаправляет на страницу с списком клиентов",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "postUpdatedClient"
          ]
        }
      },
      "/clients/delete/:id": {
        "get": {
          "deprecated": false,
          "summary": "Удаление клиента",
          "description": "Делает SQL-запрос и перенаправляет на страницу со списком клиентов",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "deleteClient"
          ]
        }
      },
      "/clients/create": {
        "get": {
          "deprecated": false,
          "summary": "Страница создания клиента",
          "description": "Делает SQL-запрос и отрисовывает страницу",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "getCreateClientPage"
          ]
        },
        "post": {
          "deprecated": false,
          "summary": "Добавление клиента в базу данных",
          "description": "Делает SQL-запрос и перенаправляет на страницу с списком клиентов",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "createClient"
          ]
        }
      },
      "/vendors/list": {
        "get": {
          "deprecated": false,
          "summary": "Страница со списком поставщиков",
          "description": "Делает SQL-запрос и отрисовывает страницу с учётом полученных данных",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "getVendorListPage"
          ]
        }
      },
      "/vendors/edit/:id": {
        "get": {
          "deprecated": false,
          "summary": "Страница с редактированием поставщика",
          "description": "Делает SQL-запрос и отрисовывает страницу редактирования поставщика",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "getEditPage"
          ]
        },
        "post": {
          "deprecated": false,
          "summary": "Обновление данных по поставщику",
          "description": "Делает SQL-запрос и перенаправляет на страницу с списком поставщиков",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "postUpdatedVendor"
          ]
        }
      },
      "/vendors/delete/:id": {
        "get": {
          "deprecated": false,
          "summary": "Удаление поставщика",
          "description": "Делает SQL-запрос и перенаправляет на страницу со списком поставщиков",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "deleteVendor"
          ]
        }
      },
      "/vendors/create": {
        "get": {
          "deprecated": false,
          "summary": "Страница создания поставщика",
          "description": "Делает SQL-запрос и отрисовывает страницу поставщиков",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "getCreateVendorPage"
          ]
        },
        "post": {
          "deprecated": false,
          "summary": "Добавление поставщика в базу данных",
          "description": "Делает SQL-запрос и перенаправляет на страницу с списком поставщиков",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "createVendor"
          ]
        }
      },
      "/workers/list": {
        "get": {
          "deprecated": false,
          "summary": "Страница со списком работников",
          "description": "Делает SQL-запрос и отрисовывает страницу с учётом полученных данных",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "getWorkerListPage"
          ]
        }
      },
      "/workers/edit/:id": {
        "get": {
          "deprecated": false,
          "summary": "Страница с редактированием данных о работнике",
          "description": "Делает SQL-запрос и отрисовывает страницу редактирования информации о работнике",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "getEditPage"
          ]
        },
        "post": {
          "deprecated": false,
          "summary": "Обновление данных по работнику",
          "description": "Делает SQL-запрос и перенаправляет на страницу с списком работников",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "postUpdatedWorker"
          ]
        }
      },
      "/workers/delete/:id": {
        "get": {
          "deprecated": false,
          "summary": "Удаление работника",
          "description": "Делает SQL-запрос и перенаправляет на страницу со списком работников",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "deleteWorker"
          ]
        }
      },
      "/workers/create": {
        "get": {
          "deprecated": false,
          "summary": "Страница создания работника",
          "description": "Делает SQL-запрос и отрисовывает страницу",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "getCreateWorkerPage"
          ]
        },
        "post": {
          "deprecated": false,
          "summary": "Добавление работника в базу данных",
          "description": "Делает SQL-запрос и перенаправляет на страницу с списком работников",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "createWorker"
          ]
        }
      },
      "/services/list": {
        "get": {
          "deprecated": false,
          "summary": "Страница со списком услуг",
          "description": "Делает SQL-запрос и отрисовывает страницу с учётом полученных данных",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "getServicesListPage"
          ]
        }
      },
      "/services/edit/:id": {
        "get": {
          "deprecated": false,
          "summary": "Страница с редактированием услуги",
          "description": "Делает SQL-запрос и отрисовывает страницу редактирования услуги",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "getEditPage"
          ]
        },
        "post": {
          "deprecated": false,
          "summary": "Обновление данных по услуге",
          "description": "Делает SQL-запрос и перенаправляет на страницу с списком услуг",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "postUpdatedService"
          ]
        }
      },
      "/services/delete/:id": {
        "get": {
          "deprecated": false,
          "summary": "Удаление услуги",
          "description": "Делает SQL-запрос и перенаправляет на страницу со списком услуг",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "deleteService"
          ]
        }
      },
      "/services/create": {
        "get": {
          "deprecated": false,
          "summary": "Страница создания услуги",
          "description": "Делает SQL-запрос и отрисовывает страницу",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "getCreateServicePage"
          ]
        },
        "post": {
          "deprecated": false,
          "summary": "Добавление услуги в базу данных",
          "description": "Делает SQL-запрос и перенаправляет на страницу с списком услуг",
          "security": [],
          "responses": {
            "200": {
              "description": "Успешный ответ"
            }
          },
          "parameters": [],
          "tags": [
            "createService"
          ]
        }
      }
    },
    "tags": [
      {
        "name": "createClient",
        "description": ""
      },
      {
        "name": "createComponent",
        "description": ""
      },
      {
        "name": "createRequest",
        "description": ""
      },
      {
        "name": "createService",
        "description": ""
      },
      {
        "name": "createVendor",
        "description": ""
      },
      {
        "name": "createWorker",
        "description": ""
      },
      {
        "name": "deleteClient",
        "description": ""
      },
      {
        "name": "deleteRequest",
        "description": ""
      },
      {
        "name": "deleteRequestComponent",
        "description": ""
      },
      {
        "name": "deleteService",
        "description": ""
      },
      {
        "name": "deleteVendor",
        "description": ""
      },
      {
        "name": "deleteWorker",
        "description": ""
      },
      {
        "name": "getClientListPage",
        "description": ""
      },
      {
        "name": "getCreateClientPage",
        "description": ""
      },
      {
        "name": "getCreateComponentPage",
        "description": ""
      },
      {
        "name": "getCreateRequestPage",
        "description": ""
      },
      {
        "name": "getCreateServicePage",
        "description": ""
      },
      {
        "name": "getCreateVendorPage",
        "description": ""
      },
      {
        "name": "getCreateWorkerPage",
        "description": ""
      },
      {
        "name": "getEditPage",
        "description": ""
      },
      {
        "name": "getRequestDetalization",
        "description": ""
      },
      {
        "name": "getRequestListPage",
        "description": ""
      },
      {
        "name": "getServicesListPage",
        "description": ""
      },
      {
        "name": "getVendorListPage",
        "description": ""
      },
      {
        "name": "getWorkerListPage",
        "description": ""
      },
      {
        "name": "homePage",
        "description": ""
      },
      {
        "name": "postUpdatedClient",
        "description": ""
      },
      {
        "name": "postUpdatedRequest",
        "description": ""
      },
      {
        "name": "postUpdatedService",
        "description": ""
      },
      {
        "name": "postUpdatedVendor",
        "description": ""
      },
      {
        "name": "postUpdatedWorker",
        "description": ""
      }
    ],
    "host": "localhost:3000"
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  var urls = options.swaggerUrls
  var customOptions = options.customOptions
  var spec1 = options.swaggerDoc
  var swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (var attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  var ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.oauth) {
    ui.initOAuth(customOptions.oauth)
  }

  if (customOptions.preauthorizeApiKey) {
    const key = customOptions.preauthorizeApiKey.authDefinitionKey;
    const value = customOptions.preauthorizeApiKey.apiKeyValue;
    if (!!key && !!value) {
      const pid = setInterval(() => {
        const authorized = ui.preauthorizeApiKey(key, value);
        if(!!authorized) clearInterval(pid);
      }, 500)

    }
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }

  window.ui = ui
}
