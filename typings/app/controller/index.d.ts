// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBoho from '../../../app/controller/boho';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    boho: ExportBoho;
    home: ExportHome;
  }
}
