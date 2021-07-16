/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { FieldAuthorizeResolver } from "nexus/dist/plugins/fieldAuthorizePlugin"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  City: "Dallas" | "Denver" | "SanFrancisco" | "Somewhere"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Customer: { // root type
    age: number; // Int!
    firstName: string; // String!
    lastName: string; // String!
  }
  Entry: { // root type
    customer: NexusGenRootTypes['Customer']; // Customer!
    id: string; // String!
    location: NexusGenRootTypes['Location']; // Location!
  }
  Location: { // root type
    city: NexusGenEnums['City']; // City!
    state: string; // String!
  }
  Mutation: {};
  Query: {};
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Customer: { // field return type
    age: number; // Int!
    firstName: string; // String!
    lastName: string; // String!
  }
  Entry: { // field return type
    customer: NexusGenRootTypes['Customer']; // Customer!
    id: string; // String!
    location: NexusGenRootTypes['Location']; // Location!
  }
  Location: { // field return type
    city: NexusGenEnums['City']; // City!
    state: string; // String!
  }
  Mutation: { // field return type
    updateEntryCity: boolean | null; // Boolean
  }
  Query: { // field return type
    getEntry: NexusGenRootTypes['Entry'] | null; // Entry
  }
}

export interface NexusGenFieldTypeNames {
  Customer: { // field return type name
    age: 'Int'
    firstName: 'String'
    lastName: 'String'
  }
  Entry: { // field return type name
    customer: 'Customer'
    id: 'String'
    location: 'Location'
  }
  Location: { // field return type name
    city: 'City'
    state: 'String'
  }
  Mutation: { // field return type name
    updateEntryCity: 'Boolean'
  }
  Query: { // field return type name
    getEntry: 'Entry'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    updateEntryCity: { // args
      city: NexusGenEnums['City']; // City!
      state: string; // String!
    }
  }
  Query: {
    getEntry: { // args
      id: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Authorization for an individual field. Returning "true"
     * or "Promise<true>" means the field can be accessed.
     * Returning "false" or "Promise<false>" will respond
     * with a "Not Authorized" error for the field.
     * Returning or throwing an error will also prevent the
     * resolver from executing.
     */
    authorize?: FieldAuthorizeResolver<TypeName, FieldName>
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}