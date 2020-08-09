import { Module } from './module';

export interface ModuleData {
  module: Module;
  isLoading: boolean;
  isError: boolean;
}
