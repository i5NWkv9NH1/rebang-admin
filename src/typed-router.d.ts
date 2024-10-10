/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    'NotFound': RouteRecordInfo<'NotFound', '/:404(.*)', { 404: ParamValue<true> }, { 404: ParamValue<false> }>,
    '/auth': RouteRecordInfo<'/auth', '/auth', Record<never, never>, Record<never, never>>,
    'Signin': RouteRecordInfo<'Signin', '/auth/signin', Record<never, never>, Record<never, never>>,
    'Signup': RouteRecordInfo<'Signup', '/auth/signup', Record<never, never>, Record<never, never>>,
    'Dashboard': RouteRecordInfo<'Dashboard', '/dashboard', Record<never, never>, Record<never, never>>,
    'Forbidden': RouteRecordInfo<'Forbidden', '/forbidden', Record<never, never>, Record<never, never>>,
    '/system/': RouteRecordInfo<'/system/', '/system', Record<never, never>, Record<never, never>>,
    'Accounts': RouteRecordInfo<'Accounts', '/system/accounts', Record<never, never>, Record<never, never>>,
    'Unauthorized': RouteRecordInfo<'Unauthorized', '/unauthorized', Record<never, never>, Record<never, never>>,
    '/workplace/': RouteRecordInfo<'/workplace/', '/workplace', Record<never, never>, Record<never, never>>,
    'Analysis': RouteRecordInfo<'Analysis', '/workplace/analysis', Record<never, never>, Record<never, never>>,
    'Test': RouteRecordInfo<'Test', '/workplace/test', Record<never, never>, Record<never, never>>,
    'Tools': RouteRecordInfo<'Tools', '/workplace/tools', Record<never, never>, Record<never, never>>,
  }
}