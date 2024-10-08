/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DefaultImport } from './routes/_default'
import { Route as DefaultPageTwoImport } from './routes/_default/pageTwo'
import { Route as DefaultPageOneImport } from './routes/_default/pageOne'
import { Route as DefaultToysListImport } from './routes/_default/toysList'
import { Route as DefaultToyCreateImport } from './routes/_default/toyCreate'
import { Route as DefaultColumnsImport } from './routes/_default/columns'

// Create Virtual Routes

const DefaultIndexLazyImport = createFileRoute('/_default/')()
const DefaultUsersLazyImport = createFileRoute('/_default/users')()
const DefaultAboutLazyImport = createFileRoute('/_default/about')()

// Create/Update Routes

const DefaultRoute = DefaultImport.update({
  id: '/_default',
  getParentRoute: () => rootRoute,
} as any)

const DefaultIndexLazyRoute = DefaultIndexLazyImport.update({
  path: '/',
  getParentRoute: () => DefaultRoute,
} as any).lazy(() =>
  import('./routes/_default/index.lazy').then((d) => d.Route),
)

const DefaultUsersLazyRoute = DefaultUsersLazyImport.update({
  path: '/users',
  getParentRoute: () => DefaultRoute,
} as any).lazy(() =>
  import('./routes/_default/users.lazy').then((d) => d.Route),
)

const DefaultAboutLazyRoute = DefaultAboutLazyImport.update({
  path: '/about',
  getParentRoute: () => DefaultRoute,
} as any).lazy(() =>
  import('./routes/_default/about.lazy').then((d) => d.Route),
)

const DefaultPageTwoRoute = DefaultPageTwoImport.update({
  path: '/pageTwo',
  getParentRoute: () => DefaultRoute,
} as any)

const DefaultPageOneRoute = DefaultPageOneImport.update({
  path: '/pageOne',
  getParentRoute: () => DefaultRoute,
} as any)

const DefaultToysListRoute = DefaultToysListImport.update({
  path: '/toysList',
  getParentRoute: () => DefaultRoute,
} as any)

const DefaultToyCreateRoute = DefaultToyCreateImport.update({
  path: '/toyCreate',
  getParentRoute: () => DefaultRoute,
} as any)

const DefaultColumnsRoute = DefaultColumnsImport.update({
  path: '/columns',
  getParentRoute: () => DefaultRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_default': {
      id: '/_default'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof DefaultImport
      parentRoute: typeof rootRoute
    }
    '/_default/columns': {
      id: '/_default/columns'
      path: '/columns'
      fullPath: '/columns'
      preLoaderRoute: typeof DefaultColumnsImport
      parentRoute: typeof DefaultImport
    }
    '/_default/toyCreate': {
      id: '/_default/toyCreate'
      path: '/toyCreate'
      fullPath: '/toyCreate'
      preLoaderRoute: typeof DefaultToyCreateImport
      parentRoute: typeof DefaultImport
    }
    '/_default/toysList': {
      id: '/_default/toysList'
      path: '/toysList'
      fullPath: '/toysList'
      preLoaderRoute: typeof DefaultToysListImport
      parentRoute: typeof DefaultImport
    }
    '/_default/pageOne': {
      id: '/_default/pageOne'
      path: '/pageOne'
      fullPath: '/pageOne'
      preLoaderRoute: typeof DefaultPageOneImport
      parentRoute: typeof DefaultImport
    }
    '/_default/pageTwo': {
      id: '/_default/pageTwo'
      path: '/pageTwo'
      fullPath: '/pageTwo'
      preLoaderRoute: typeof DefaultPageTwoImport
      parentRoute: typeof DefaultImport
    }
    '/_default/about': {
      id: '/_default/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof DefaultAboutLazyImport
      parentRoute: typeof DefaultImport
    }
    '/_default/users': {
      id: '/_default/users'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof DefaultUsersLazyImport
      parentRoute: typeof DefaultImport
    }
    '/_default/': {
      id: '/_default/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof DefaultIndexLazyImport
      parentRoute: typeof DefaultImport
    }
  }
}

// Create and export the route tree

interface DefaultRouteChildren {
  DefaultColumnsRoute: typeof DefaultColumnsRoute
  DefaultToyCreateRoute: typeof DefaultToyCreateRoute
  DefaultToysListRoute: typeof DefaultToysListRoute
  DefaultPageOneRoute: typeof DefaultPageOneRoute
  DefaultPageTwoRoute: typeof DefaultPageTwoRoute
  DefaultAboutLazyRoute: typeof DefaultAboutLazyRoute
  DefaultUsersLazyRoute: typeof DefaultUsersLazyRoute
  DefaultIndexLazyRoute: typeof DefaultIndexLazyRoute
}

const DefaultRouteChildren: DefaultRouteChildren = {
  DefaultColumnsRoute: DefaultColumnsRoute,
  DefaultToyCreateRoute: DefaultToyCreateRoute,
  DefaultToysListRoute: DefaultToysListRoute,
  DefaultPageOneRoute: DefaultPageOneRoute,
  DefaultPageTwoRoute: DefaultPageTwoRoute,
  DefaultAboutLazyRoute: DefaultAboutLazyRoute,
  DefaultUsersLazyRoute: DefaultUsersLazyRoute,
  DefaultIndexLazyRoute: DefaultIndexLazyRoute,
}

const DefaultRouteWithChildren =
  DefaultRoute._addFileChildren(DefaultRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof DefaultRouteWithChildren
  '/columns': typeof DefaultColumnsRoute
  '/toyCreate': typeof DefaultToyCreateRoute
  '/toysList': typeof DefaultToysListRoute
  '/pageOne': typeof DefaultPageOneRoute
  '/pageTwo': typeof DefaultPageTwoRoute
  '/about': typeof DefaultAboutLazyRoute
  '/users': typeof DefaultUsersLazyRoute
  '/': typeof DefaultIndexLazyRoute
}

export interface FileRoutesByTo {
  '/columns': typeof DefaultColumnsRoute
  '/toyCreate': typeof DefaultToyCreateRoute
  '/toysList': typeof DefaultToysListRoute
  '/pageOne': typeof DefaultPageOneRoute
  '/pageTwo': typeof DefaultPageTwoRoute
  '/about': typeof DefaultAboutLazyRoute
  '/users': typeof DefaultUsersLazyRoute
  '/': typeof DefaultIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_default': typeof DefaultRouteWithChildren
  '/_default/columns': typeof DefaultColumnsRoute
  '/_default/toyCreate': typeof DefaultToyCreateRoute
  '/_default/toysList': typeof DefaultToysListRoute
  '/_default/pageOne': typeof DefaultPageOneRoute
  '/_default/pageTwo': typeof DefaultPageTwoRoute
  '/_default/about': typeof DefaultAboutLazyRoute
  '/_default/users': typeof DefaultUsersLazyRoute
  '/_default/': typeof DefaultIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/columns'
    | '/toyCreate'
    | '/toysList'
    | '/pageOne'
    | '/pageTwo'
    | '/about'
    | '/users'
    | '/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/columns'
    | '/toyCreate'
    | '/toysList'
    | '/pageOne'
    | '/pageTwo'
    | '/about'
    | '/users'
    | '/'
  id:
    | '__root__'
    | '/_default'
    | '/_default/columns'
    | '/_default/toyCreate'
    | '/_default/toysList'
    | '/_default/pageOne'
    | '/_default/pageTwo'
    | '/_default/about'
    | '/_default/users'
    | '/_default/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  DefaultRoute: typeof DefaultRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  DefaultRoute: DefaultRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_default"
      ]
    },
    "/_default": {
      "filePath": "_default.tsx",
      "children": [
        "/_default/columns",
        "/_default/toyCreate",
        "/_default/toysList",
        "/_default/pageOne",
        "/_default/pageTwo",
        "/_default/about",
        "/_default/users",
        "/_default/"
      ]
    },
    "/_default/columns": {
      "filePath": "_default/columns.tsx",
      "parent": "/_default"
    },
    "/_default/toyCreate": {
      "filePath": "_default/toyCreate.tsx",
      "parent": "/_default"
    },
    "/_default/toysList": {
      "filePath": "_default/toysList.tsx",
      "parent": "/_default"
    },
    "/_default/pageOne": {
      "filePath": "_default/pageOne.tsx",
      "parent": "/_default"
    },
    "/_default/pageTwo": {
      "filePath": "_default/pageTwo.tsx",
      "parent": "/_default"
    },
    "/_default/about": {
      "filePath": "_default/about.lazy.tsx",
      "parent": "/_default"
    },
    "/_default/users": {
      "filePath": "_default/users.lazy.tsx",
      "parent": "/_default"
    },
    "/_default/": {
      "filePath": "_default/index.lazy.tsx",
      "parent": "/_default"
    }
  }
}
ROUTE_MANIFEST_END */
