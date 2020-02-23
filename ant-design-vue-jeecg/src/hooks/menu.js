
const hookMenu = [
  {
    "id": "80015b2769fc80648e92d04e84ca059d",
    "path": "/masterdata",
    "name": "masterdata",
    "component": "layouts/RouteView",
    "route": "1",
    "redirect": "/masterdata/supplier",
    "meta": {
      "title": "基础数据管理",
      "icon": "setting",
      "keepAlive": false,
      "internalOrExternal": false
    },
    "children": [
      {
        "id": "30015b2769fc80648e92d04e84ca059d",
        "path": "/masterdata/material",
        "name": "masterdata-material",
        "component": "masterdata/material",
        "meta": {
          "title": "物料管理",
          "keepAlive": false,
          "internalOrExternal": false
        }
      },
      {
        "id": "34445b2769fc80648e92d04e84ca059d",
        "path": "/masterdata/material-info",
        "name": "masterdata-materialinfo",
        "component": "masterdata/material-info",
        "meta": {
          "title": "物料信息",
          "keepAlive": false,
          "internalOrExternal": false
        }
      },
      {
        "id": "90015b2769fc80648e92d04e84ca059d",
        "path": "/masterdata/supplier",
        "name": "masterdata-supplier",
        "component": "masterdata/supplier",
        "meta": {
          "title": "供应商管理",
          "keepAlive": false,
          "internalOrExternal": false
        }
      },
      {
        "id": "94445b2769fc80648e92d04e84ca059d",
        "path": "/masterdata/supplier-info",
        "name": "masterdata-supplierinfo",
        "component": "masterdata/supplier-info",
        "meta": {
          "title": "供应商信息",
          "keepAlive": false,
          "internalOrExternal": false
        }
      },
      {
        "id": "90015b2769fc80648e92d04e84ca059d",
        "path": "/masterdata/customer",
        "name": "masterdata-customer",
        "component": "masterdata/customer",
        "meta": {
          "title": "客户管理",
          "keepAlive": false,
          "internalOrExternal": false
        }
      },
      {
        "id": "94445b2769fc80648e92d04e84ca059d",
        "path": "/masterdata/customer-info",
        "name": "masterdata-customerinfo",
        "component": "masterdata/customer-info",
        "meta": {
          "title": "客户信息",
          "keepAlive": false,
          "internalOrExternal": false
        }
      },
      {
        "id": "96015b2769fc80648e92d04e84ca059d",
        "path": "/masterdata/project",
        "name": "masterdata-project",
        "component": "masterdata/project",
        "meta": {
          "title": "项目管理",
          "keepAlive": false,
          "internalOrExternal": false
        }
      },
      {
        "id": "94945b2769fc80648e92d04e84ca059d",
        "path": "/masterdata/project-info",
        "name": "masterdata-projectinfo",
        "component": "masterdata/project-info",
        "meta": {
          "title": "项目信息",
          "keepAlive": false,
          "internalOrExternal": false
        }
      }
    ]
  }
]
let exportedMenu = [];
if (process.env.VUE_APP_DEBUG == 'ON') {
  exportedMenu = hookMenu
}

export default exportedMenu;