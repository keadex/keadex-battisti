export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** Input type for dynamic zone contentSections of Page */
  PageContentSectionsDynamicZoneInput: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
}

export interface Query {
  __typename?: 'Query';
  architectureModule?: Maybe<ArchitectureModule>;
  architectureModules?: Maybe<Array<Maybe<ArchitectureModule>>>;
  architectureModulesConnection?: Maybe<ArchitectureModuleConnection>;
  global?: Maybe<Global>;
  page?: Maybe<Page>;
  pages?: Maybe<Array<Maybe<Page>>>;
  pagesConnection?: Maybe<PageConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
}


export interface QueryArchitectureModuleArgs {
  id: Scalars['ID'];
}


export interface QueryArchitectureModulesArgs {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
}


export interface QueryArchitectureModulesConnectionArgs {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
}


export interface QueryPageArgs {
  id: Scalars['ID'];
}


export interface QueryPagesArgs {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
}


export interface QueryPagesConnectionArgs {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
}


export interface QueryFilesArgs {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
}


export interface QueryFilesConnectionArgs {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
}


export interface QueryRoleArgs {
  id: Scalars['ID'];
}


export interface QueryRolesArgs {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
}


export interface QueryRolesConnectionArgs {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
}


export interface QueryUserArgs {
  id: Scalars['ID'];
}


export interface QueryUsersArgs {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
}


export interface QueryUsersConnectionArgs {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
}

export interface ArchitectureModule {
  __typename?: 'ArchitectureModule';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  moduleId: Scalars['String'];
  logo?: Maybe<UploadFile>;
  name: Scalars['String'];
  description: Scalars['String'];
  featuresOld?: Maybe<Scalars['String']>;
  roadmap?: Maybe<Scalars['String']>;
  type: ArchitectureModuleType;
  features?: Maybe<Array<Maybe<ComponentArchitectureArchitectureModuleFeature>>>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
}


export interface UploadFile {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  related?: Maybe<Array<Maybe<Morph>>>;
}


export interface UploadFileRelatedArgs {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
}


export interface AdminUser {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
}

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | ArchitectureModule | ArchitectureModuleConnection | ArchitectureModuleAggregator | ArchitectureModuleGroupBy | ArchitectureModuleConnectionId | ArchitectureModuleConnectionCreated_At | ArchitectureModuleConnectionUpdated_At | ArchitectureModuleConnectionModuleId | ArchitectureModuleConnectionLogo | ArchitectureModuleConnectionName | ArchitectureModuleConnectionDescription | ArchitectureModuleConnectionFeaturesOld | ArchitectureModuleConnectionRoadmap | ArchitectureModuleConnectionType | ArchitectureModuleConnectionCreated_By | ArchitectureModuleConnectionUpdated_By | CreateArchitectureModulePayload | UpdateArchitectureModulePayload | DeleteArchitectureModulePayload | Global | UpdateGlobalPayload | DeleteGlobalPayload | Page | PageConnection | PageAggregator | PageGroupBy | PageConnectionId | PageConnectionCreated_At | PageConnectionUpdated_At | PageConnectionSlug | PageConnectionShortName | PageConnectionMetadata | PageConnectionStatus | PageConnectionCreated_By | PageConnectionUpdated_By | CreatePagePayload | UpdatePagePayload | DeletePagePayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionCreated_By | UploadFileConnectionUpdated_By | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | UsersPermissionsRoleConnectionCreated_By | UsersPermissionsRoleConnectionUpdated_By | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionCreated_By | UsersPermissionsUserConnectionUpdated_By | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentArchitectureArchitectureModuleFeature | ComponentArchitectureCodeSnippet | ComponentElementsFeatureColumn | ComponentElementsFeatureRow | ComponentElementsFeature | ComponentElementsFooterSection | ComponentElementsLogos | ComponentElementsNotificationBanner | ComponentElementsPlan | ComponentElementsTestimonial | ComponentLayoutFooter | ComponentLayoutNavbar | ComponentLinksButton | ComponentLinksLink | ComponentMetaMetadata | ComponentSectionsBottomActions | ComponentSectionsFeatureColumnsGroup | ComponentSectionsFeatureRowsGroup | ComponentSectionsHero | ComponentSectionsLargeVideo | ComponentSectionsPricing | ComponentSectionsRichText | ComponentSectionsTestimonialsGroup;

export interface UsersPermissionsMe {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
}

export interface UsersPermissionsMeRole {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
}

export interface UsersPermissionsLoginPayload {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
}

export interface UserPermissionsPasswordPayload {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
}

export interface ArchitectureModuleConnection {
  __typename?: 'ArchitectureModuleConnection';
  values?: Maybe<Array<Maybe<ArchitectureModule>>>;
  groupBy?: Maybe<ArchitectureModuleGroupBy>;
  aggregate?: Maybe<ArchitectureModuleAggregator>;
}

export interface ArchitectureModuleGroupBy {
  __typename?: 'ArchitectureModuleGroupBy';
  id?: Maybe<Array<Maybe<ArchitectureModuleConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ArchitectureModuleConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ArchitectureModuleConnectionUpdated_At>>>;
  moduleId?: Maybe<Array<Maybe<ArchitectureModuleConnectionModuleId>>>;
  logo?: Maybe<Array<Maybe<ArchitectureModuleConnectionLogo>>>;
  name?: Maybe<Array<Maybe<ArchitectureModuleConnectionName>>>;
  description?: Maybe<Array<Maybe<ArchitectureModuleConnectionDescription>>>;
  featuresOld?: Maybe<Array<Maybe<ArchitectureModuleConnectionFeaturesOld>>>;
  roadmap?: Maybe<Array<Maybe<ArchitectureModuleConnectionRoadmap>>>;
  type?: Maybe<Array<Maybe<ArchitectureModuleConnectionType>>>;
  created_by?: Maybe<Array<Maybe<ArchitectureModuleConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<ArchitectureModuleConnectionUpdated_By>>>;
}

export interface ArchitectureModuleConnectionId {
  __typename?: 'ArchitectureModuleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ArchitectureModuleConnection>;
}

export interface ArchitectureModuleConnectionCreated_At {
  __typename?: 'ArchitectureModuleConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ArchitectureModuleConnection>;
}

export interface ArchitectureModuleConnectionUpdated_At {
  __typename?: 'ArchitectureModuleConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ArchitectureModuleConnection>;
}

export interface ArchitectureModuleConnectionModuleId {
  __typename?: 'ArchitectureModuleConnectionModuleId';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArchitectureModuleConnection>;
}

export interface ArchitectureModuleConnectionLogo {
  __typename?: 'ArchitectureModuleConnectionLogo';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ArchitectureModuleConnection>;
}

export interface ArchitectureModuleConnectionName {
  __typename?: 'ArchitectureModuleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArchitectureModuleConnection>;
}

export interface ArchitectureModuleConnectionDescription {
  __typename?: 'ArchitectureModuleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArchitectureModuleConnection>;
}

export interface ArchitectureModuleConnectionFeaturesOld {
  __typename?: 'ArchitectureModuleConnectionFeaturesOld';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArchitectureModuleConnection>;
}

export interface ArchitectureModuleConnectionRoadmap {
  __typename?: 'ArchitectureModuleConnectionRoadmap';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArchitectureModuleConnection>;
}

export interface ArchitectureModuleConnectionType {
  __typename?: 'ArchitectureModuleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArchitectureModuleConnection>;
}

export interface ArchitectureModuleConnectionCreated_By {
  __typename?: 'ArchitectureModuleConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ArchitectureModuleConnection>;
}

export interface ArchitectureModuleConnectionUpdated_By {
  __typename?: 'ArchitectureModuleConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ArchitectureModuleConnection>;
}

export interface ArchitectureModuleAggregator {
  __typename?: 'ArchitectureModuleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface CreateArchitectureModulePayload {
  __typename?: 'createArchitectureModulePayload';
  architectureModule?: Maybe<ArchitectureModule>;
}

export interface UpdateArchitectureModulePayload {
  __typename?: 'updateArchitectureModulePayload';
  architectureModule?: Maybe<ArchitectureModule>;
}

export interface DeleteArchitectureModulePayload {
  __typename?: 'deleteArchitectureModulePayload';
  architectureModule?: Maybe<ArchitectureModule>;
}

export interface Global {
  __typename?: 'Global';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  metadata?: Maybe<ComponentMetaMetadata>;
  metaTitleSuffix: Scalars['String'];
  favicon?: Maybe<UploadFile>;
  notificationBanner?: Maybe<ComponentElementsNotificationBanner>;
  navbar?: Maybe<ComponentLayoutNavbar>;
  footer?: Maybe<ComponentLayoutFooter>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
}

export interface ComponentMetaMetadata {
  __typename?: 'ComponentMetaMetadata';
  id: Scalars['ID'];
  metaTitle: Scalars['String'];
  metaDescription: Scalars['String'];
  shareImage?: Maybe<UploadFile>;
  twitterCardType?: Maybe<Enum_Componentmetametadata_Twittercardtype>;
  twitterUsername?: Maybe<Scalars['String']>;
}

export enum Enum_Componentmetametadata_Twittercardtype {
  Summary = 'summary',
  SummaryLargeImage = 'summary_large_image',
  App = 'app',
  Player = 'player'
}

export interface ComponentElementsNotificationBanner {
  __typename?: 'ComponentElementsNotificationBanner';
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  type: Enum_Componentelementsnotificationbanner_Type;
}

export enum Enum_Componentelementsnotificationbanner_Type {
  Alert = 'alert',
  Info = 'info',
  Warning = 'warning'
}

export interface ComponentLayoutNavbar {
  __typename?: 'ComponentLayoutNavbar';
  id: Scalars['ID'];
  logo?: Maybe<UploadFile>;
  links?: Maybe<Array<Maybe<ComponentLinksLink>>>;
  button?: Maybe<ComponentLinksButton>;
}

export interface ComponentLinksLink {
  __typename?: 'ComponentLinksLink';
  id: Scalars['ID'];
  url?: Maybe<Scalars['String']>;
  newTab?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
}

export interface ComponentLinksButton {
  __typename?: 'ComponentLinksButton';
  id: Scalars['ID'];
  url?: Maybe<Scalars['String']>;
  newTab?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Componentlinksbutton_Type>;
}

export enum Enum_Componentlinksbutton_Type {
  Primary = 'primary',
  Secondary = 'secondary'
}

export interface ComponentLayoutFooter {
  __typename?: 'ComponentLayoutFooter';
  id: Scalars['ID'];
  logo?: Maybe<UploadFile>;
  columns?: Maybe<Array<Maybe<ComponentElementsFooterSection>>>;
  smallText?: Maybe<Scalars['String']>;
}

export interface ComponentElementsFooterSection {
  __typename?: 'ComponentElementsFooterSection';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<ComponentLinksLink>>>;
}

export interface UpdateGlobalPayload {
  __typename?: 'updateGlobalPayload';
  global?: Maybe<Global>;
}

export interface DeleteGlobalPayload {
  __typename?: 'deleteGlobalPayload';
  global?: Maybe<Global>;
}

export interface Page {
  __typename?: 'Page';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  slug?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  metadata?: Maybe<ComponentMetaMetadata>;
  contentSections?: Maybe<Array<Maybe<PageContentSectionsDynamicZone>>>;
  status: Enum_Page_Status;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
}

export type PageContentSectionsDynamicZone = ComponentSectionsHero | ComponentSectionsBottomActions | ComponentSectionsFeatureColumnsGroup | ComponentSectionsFeatureRowsGroup | ComponentSectionsTestimonialsGroup | ComponentSectionsLargeVideo | ComponentSectionsRichText | ComponentSectionsPricing;

export interface ComponentSectionsHero {
  __typename?: 'ComponentSectionsHero';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  picture?: Maybe<UploadFile>;
  smallTextWithLink?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Maybe<ComponentLinksButton>>>;
}

export interface ComponentSectionsBottomActions {
  __typename?: 'ComponentSectionsBottomActions';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Maybe<ComponentLinksButton>>>;
}

export interface ComponentSectionsFeatureColumnsGroup {
  __typename?: 'ComponentSectionsFeatureColumnsGroup';
  id: Scalars['ID'];
  features?: Maybe<Array<Maybe<ComponentElementsFeatureColumn>>>;
}

export interface ComponentElementsFeatureColumn {
  __typename?: 'ComponentElementsFeatureColumn';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<UploadFile>;
}

export interface ComponentSectionsFeatureRowsGroup {
  __typename?: 'ComponentSectionsFeatureRowsGroup';
  id: Scalars['ID'];
  features?: Maybe<Array<Maybe<ComponentElementsFeatureRow>>>;
}

export interface ComponentElementsFeatureRow {
  __typename?: 'ComponentElementsFeatureRow';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  media?: Maybe<UploadFile>;
  link?: Maybe<ComponentLinksLink>;
}

export interface ComponentSectionsTestimonialsGroup {
  __typename?: 'ComponentSectionsTestimonialsGroup';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<ComponentLinksLink>;
  logos?: Maybe<Array<Maybe<ComponentElementsLogos>>>;
  testimonials?: Maybe<Array<Maybe<ComponentElementsTestimonial>>>;
}

export interface ComponentElementsLogos {
  __typename?: 'ComponentElementsLogos';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  logo?: Maybe<UploadFile>;
}

export interface ComponentElementsTestimonial {
  __typename?: 'ComponentElementsTestimonial';
  id: Scalars['ID'];
  logo?: Maybe<UploadFile>;
  picture?: Maybe<UploadFile>;
  text?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  authorTitle?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
}

export interface ComponentSectionsLargeVideo {
  __typename?: 'ComponentSectionsLargeVideo';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  video?: Maybe<UploadFile>;
  poster?: Maybe<UploadFile>;
}

export interface ComponentSectionsRichText {
  __typename?: 'ComponentSectionsRichText';
  id: Scalars['ID'];
  content?: Maybe<Scalars['String']>;
}

export interface ComponentSectionsPricing {
  __typename?: 'ComponentSectionsPricing';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  plans?: Maybe<Array<Maybe<ComponentElementsPlan>>>;
}

export interface ComponentElementsPlan {
  __typename?: 'ComponentElementsPlan';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  features?: Maybe<Array<Maybe<ComponentElementsFeature>>>;
  isRecommended?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Float']>;
  pricePeriod?: Maybe<Scalars['String']>;
}

export interface ComponentElementsFeature {
  __typename?: 'ComponentElementsFeature';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
}

export enum Enum_Page_Status {
  Published = 'published',
  Draft = 'draft'
}

export interface PageConnection {
  __typename?: 'PageConnection';
  values?: Maybe<Array<Maybe<Page>>>;
  groupBy?: Maybe<PageGroupBy>;
  aggregate?: Maybe<PageAggregator>;
}

export interface PageGroupBy {
  __typename?: 'PageGroupBy';
  id?: Maybe<Array<Maybe<PageConnectionId>>>;
  created_at?: Maybe<Array<Maybe<PageConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<PageConnectionUpdated_At>>>;
  slug?: Maybe<Array<Maybe<PageConnectionSlug>>>;
  shortName?: Maybe<Array<Maybe<PageConnectionShortName>>>;
  metadata?: Maybe<Array<Maybe<PageConnectionMetadata>>>;
  status?: Maybe<Array<Maybe<PageConnectionStatus>>>;
  created_by?: Maybe<Array<Maybe<PageConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<PageConnectionUpdated_By>>>;
}

export interface PageConnectionId {
  __typename?: 'PageConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PageConnection>;
}

export interface PageConnectionCreated_At {
  __typename?: 'PageConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PageConnection>;
}

export interface PageConnectionUpdated_At {
  __typename?: 'PageConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PageConnection>;
}

export interface PageConnectionSlug {
  __typename?: 'PageConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PageConnection>;
}

export interface PageConnectionShortName {
  __typename?: 'PageConnectionShortName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PageConnection>;
}

export interface PageConnectionMetadata {
  __typename?: 'PageConnectionMetadata';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PageConnection>;
}

export interface PageConnectionStatus {
  __typename?: 'PageConnectionStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PageConnection>;
}

export interface PageConnectionCreated_By {
  __typename?: 'PageConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PageConnection>;
}

export interface PageConnectionUpdated_By {
  __typename?: 'PageConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PageConnection>;
}

export interface PageAggregator {
  __typename?: 'PageAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface CreatePagePayload {
  __typename?: 'createPagePayload';
  page?: Maybe<Page>;
}

export interface UpdatePagePayload {
  __typename?: 'updatePagePayload';
  page?: Maybe<Page>;
}

export interface DeletePagePayload {
  __typename?: 'deletePagePayload';
  page?: Maybe<Page>;
}

export interface UploadFileConnection {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
}

export interface UploadFileGroupBy {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  created_by?: Maybe<Array<Maybe<UploadFileConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UploadFileConnectionUpdated_By>>>;
}

export interface UploadFileConnectionId {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionCreated_At {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionUpdated_At {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionName {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionAlternativeText {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionCaption {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionWidth {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionHeight {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionFormats {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionHash {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionExt {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionMime {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionSize {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionUrl {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionPreviewUrl {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionProvider {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionProvider_Metadata {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionCreated_By {
  __typename?: 'UploadFileConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionUpdated_By {
  __typename?: 'UploadFileConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileAggregator {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
}

export interface UploadFileAggregatorSum {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
}

export interface UploadFileAggregatorAvg {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
}

export interface UploadFileAggregatorMin {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
}

export interface UploadFileAggregatorMax {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
}

export interface UsersPermissionsPermission {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
}

export interface UsersPermissionsRole {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
}


export interface UsersPermissionsRolePermissionsArgs {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
}


export interface UsersPermissionsRoleUsersArgs {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
}

export interface UsersPermissionsUser {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
}

export interface UsersPermissionsRoleConnection {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
}

export interface UsersPermissionsRoleGroupBy {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
  created_by?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionUpdated_By>>>;
}

export interface UsersPermissionsRoleConnectionId {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
}

export interface UsersPermissionsRoleConnectionName {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
}

export interface UsersPermissionsRoleConnectionDescription {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
}

export interface UsersPermissionsRoleConnectionType {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
}

export interface UsersPermissionsRoleConnectionCreated_By {
  __typename?: 'UsersPermissionsRoleConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
}

export interface UsersPermissionsRoleConnectionUpdated_By {
  __typename?: 'UsersPermissionsRoleConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
}

export interface UsersPermissionsRoleAggregator {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface CreateRolePayload {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
}

export interface UpdateRolePayload {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
}

export interface DeleteRolePayload {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
}

export interface UsersPermissionsUserConnection {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
}

export interface UsersPermissionsUserGroupBy {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  created_by?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_By>>>;
}

export interface UsersPermissionsUserConnectionId {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
}

export interface UsersPermissionsUserConnectionCreated_At {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
}

export interface UsersPermissionsUserConnectionUpdated_At {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
}

export interface UsersPermissionsUserConnectionUsername {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
}

export interface UsersPermissionsUserConnectionEmail {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
}

export interface UsersPermissionsUserConnectionProvider {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
}

export interface UsersPermissionsUserConnectionConfirmed {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
}

export interface UsersPermissionsUserConnectionBlocked {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
}

export interface UsersPermissionsUserConnectionRole {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
}

export interface UsersPermissionsUserConnectionCreated_By {
  __typename?: 'UsersPermissionsUserConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
}

export interface UsersPermissionsUserConnectionUpdated_By {
  __typename?: 'UsersPermissionsUserConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
}

export interface UsersPermissionsUserAggregator {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface CreateUserPayload {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
}

export interface UpdateUserPayload {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
}

export interface DeleteUserPayload {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
}

export interface ComponentArchitectureArchitectureModuleFeature {
  __typename?: 'ComponentArchitectureArchitectureModuleFeature';
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  codeSnippet?: Maybe<Array<Maybe<ComponentArchitectureCodeSnippet>>>;
}

export interface ComponentArchitectureCodeSnippet {
  __typename?: 'ComponentArchitectureCodeSnippet';
  id: Scalars['ID'];
  filePath?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  language: Enum_Componentarchitecturecodesnippet_Language;
}

export enum Enum_Componentarchitecturecodesnippet_Language {
  Java = 'java',
  Javascript = 'javascript',
  Typescript = 'typescript',
  Css = 'css',
  Scss = 'scss',
  Html = 'html',
  Tsx = 'tsx',
  Jsx = 'jsx'
}

export enum ArchitectureModuleType {
  ApplicationArchitecture = 'ApplicationArchitecture',
  InfrastructureArchitecture = 'InfrastructureArchitecture'
}

export interface Mutation {
  __typename?: 'Mutation';
  createArchitectureModule?: Maybe<CreateArchitectureModulePayload>;
  updateArchitectureModule?: Maybe<UpdateArchitectureModulePayload>;
  deleteArchitectureModule?: Maybe<DeleteArchitectureModulePayload>;
  updateGlobal?: Maybe<UpdateGlobalPayload>;
  deleteGlobal?: Maybe<DeleteGlobalPayload>;
  createPage?: Maybe<CreatePagePayload>;
  updatePage?: Maybe<UpdatePagePayload>;
  deletePage?: Maybe<DeletePagePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
}


export interface MutationCreateArchitectureModuleArgs {
  input?: Maybe<CreateArchitectureModuleInput>;
}


export interface MutationUpdateArchitectureModuleArgs {
  input?: Maybe<UpdateArchitectureModuleInput>;
}


export interface MutationDeleteArchitectureModuleArgs {
  input?: Maybe<DeleteArchitectureModuleInput>;
}


export interface MutationUpdateGlobalArgs {
  input?: Maybe<UpdateGlobalInput>;
}


export interface MutationCreatePageArgs {
  input?: Maybe<CreatePageInput>;
}


export interface MutationUpdatePageArgs {
  input?: Maybe<UpdatePageInput>;
}


export interface MutationDeletePageArgs {
  input?: Maybe<DeletePageInput>;
}


export interface MutationCreateRoleArgs {
  input?: Maybe<CreateRoleInput>;
}


export interface MutationUpdateRoleArgs {
  input?: Maybe<UpdateRoleInput>;
}


export interface MutationDeleteRoleArgs {
  input?: Maybe<DeleteRoleInput>;
}


export interface MutationCreateUserArgs {
  input?: Maybe<CreateUserInput>;
}


export interface MutationUpdateUserArgs {
  input?: Maybe<UpdateUserInput>;
}


export interface MutationDeleteUserArgs {
  input?: Maybe<DeleteUserInput>;
}


export interface MutationUploadArgs {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
}


export interface MutationMultipleUploadArgs {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
}


export interface MutationLoginArgs {
  input: UsersPermissionsLoginInput;
}


export interface MutationRegisterArgs {
  input: UsersPermissionsRegisterInput;
}


export interface MutationForgotPasswordArgs {
  email: Scalars['String'];
}


export interface MutationResetPasswordArgs {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
}


export interface MutationEmailConfirmationArgs {
  confirmation: Scalars['String'];
}

export interface CreateArchitectureModuleInput {
  data?: Maybe<ArchitectureModuleInput>;
}

export interface ArchitectureModuleInput {
  moduleId: Scalars['String'];
  logo?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  description: Scalars['String'];
  featuresOld?: Maybe<Scalars['String']>;
  roadmap?: Maybe<Scalars['String']>;
  type: ArchitectureModuleType;
  features?: Maybe<Array<Maybe<ComponentArchitectureArchitectureModuleFeatureInput>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
}

export interface ComponentArchitectureArchitectureModuleFeatureInput {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  codeSnippet?: Maybe<Array<Maybe<ComponentArchitectureCodeSnippetInput>>>;
}

export interface ComponentArchitectureCodeSnippetInput {
  filePath?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  language: Enum_Componentarchitecturecodesnippet_Language;
}

export interface UpdateArchitectureModuleInput {
  where?: Maybe<InputId>;
  data?: Maybe<EditArchitectureModuleInput>;
}

export interface InputId {
  id: Scalars['ID'];
}

export interface EditArchitectureModuleInput {
  moduleId?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  featuresOld?: Maybe<Scalars['String']>;
  roadmap?: Maybe<Scalars['String']>;
  type?: Maybe<ArchitectureModuleType>;
  features?: Maybe<Array<Maybe<EditComponentArchitectureArchitectureModuleFeatureInput>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
}

export interface EditComponentArchitectureArchitectureModuleFeatureInput {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  codeSnippet?: Maybe<Array<Maybe<EditComponentArchitectureCodeSnippetInput>>>;
}

export interface EditComponentArchitectureCodeSnippetInput {
  id?: Maybe<Scalars['ID']>;
  filePath?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  language?: Maybe<Enum_Componentarchitecturecodesnippet_Language>;
}

export interface DeleteArchitectureModuleInput {
  where?: Maybe<InputId>;
}

export interface UpdateGlobalInput {
  data?: Maybe<EditGlobalInput>;
}

export interface EditGlobalInput {
  metadata?: Maybe<EditComponentMetaMetadatumInput>;
  metaTitleSuffix?: Maybe<Scalars['String']>;
  favicon?: Maybe<Scalars['ID']>;
  notificationBanner?: Maybe<EditComponentElementsNotificationBannerInput>;
  navbar?: Maybe<EditComponentLayoutNavbarInput>;
  footer?: Maybe<EditComponentLayoutFooterInput>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
}

export interface EditComponentMetaMetadatumInput {
  id?: Maybe<Scalars['ID']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  shareImage?: Maybe<Scalars['ID']>;
  twitterCardType?: Maybe<Enum_Componentmetametadata_Twittercardtype>;
  twitterUsername?: Maybe<Scalars['String']>;
}

export interface EditComponentElementsNotificationBannerInput {
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Componentelementsnotificationbanner_Type>;
}

export interface EditComponentLayoutNavbarInput {
  id?: Maybe<Scalars['ID']>;
  logo?: Maybe<Scalars['ID']>;
  links?: Maybe<Array<Maybe<EditComponentLinksLinkInput>>>;
  button?: Maybe<EditComponentLinksButtonInput>;
}

export interface EditComponentLinksLinkInput {
  id?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
  newTab?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
}

export interface EditComponentLinksButtonInput {
  id?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
  newTab?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Componentlinksbutton_Type>;
}

export interface EditComponentLayoutFooterInput {
  id?: Maybe<Scalars['ID']>;
  logo?: Maybe<Scalars['ID']>;
  columns?: Maybe<Array<Maybe<EditComponentElementsFooterSectionInput>>>;
  smallText?: Maybe<Scalars['String']>;
}

export interface EditComponentElementsFooterSectionInput {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<EditComponentLinksLinkInput>>>;
}

export interface CreatePageInput {
  data?: Maybe<PageInput>;
}

export interface PageInput {
  slug?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  metadata: ComponentMetaMetadatumInput;
  contentSections?: Maybe<Array<Scalars['PageContentSectionsDynamicZoneInput']>>;
  status?: Maybe<Enum_Page_Status>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
}

export interface ComponentMetaMetadatumInput {
  metaTitle: Scalars['String'];
  metaDescription: Scalars['String'];
  shareImage?: Maybe<Scalars['ID']>;
  twitterCardType?: Maybe<Enum_Componentmetametadata_Twittercardtype>;
  twitterUsername?: Maybe<Scalars['String']>;
}


export interface UpdatePageInput {
  where?: Maybe<InputId>;
  data?: Maybe<EditPageInput>;
}

export interface EditPageInput {
  slug?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  metadata?: Maybe<EditComponentMetaMetadatumInput>;
  contentSections?: Maybe<Array<Scalars['PageContentSectionsDynamicZoneInput']>>;
  status?: Maybe<Enum_Page_Status>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
}

export interface DeletePageInput {
  where?: Maybe<InputId>;
}

export interface CreateRoleInput {
  data?: Maybe<RoleInput>;
}

export interface RoleInput {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
}

export interface UpdateRoleInput {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
}

export interface EditRoleInput {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
}

export interface DeleteRoleInput {
  where?: Maybe<InputId>;
}

export interface CreateUserInput {
  data?: Maybe<UserInput>;
}

export interface UserInput {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
}

export interface UpdateUserInput {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
}

export interface EditUserInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
}

export interface DeleteUserInput {
  where?: Maybe<InputId>;
}


export interface UsersPermissionsLoginInput {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
}

export interface UsersPermissionsRegisterInput {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}

export interface GlobalInput {
  metadata?: Maybe<ComponentMetaMetadatumInput>;
  metaTitleSuffix: Scalars['String'];
  favicon?: Maybe<Scalars['ID']>;
  notificationBanner?: Maybe<ComponentElementsNotificationBannerInput>;
  navbar?: Maybe<ComponentLayoutNavbarInput>;
  footer?: Maybe<ComponentLayoutFooterInput>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
}

export interface ComponentElementsNotificationBannerInput {
  text?: Maybe<Scalars['String']>;
  type: Enum_Componentelementsnotificationbanner_Type;
}

export interface ComponentLayoutNavbarInput {
  logo?: Maybe<Scalars['ID']>;
  links?: Maybe<Array<Maybe<ComponentLinksLinkInput>>>;
  button?: Maybe<ComponentLinksButtonInput>;
}

export interface ComponentLinksLinkInput {
  url?: Maybe<Scalars['String']>;
  newTab?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
}

export interface ComponentLinksButtonInput {
  url?: Maybe<Scalars['String']>;
  newTab?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Componentlinksbutton_Type>;
}

export interface ComponentLayoutFooterInput {
  logo?: Maybe<Scalars['ID']>;
  columns?: Maybe<Array<Maybe<ComponentElementsFooterSectionInput>>>;
  smallText?: Maybe<Scalars['String']>;
}

export interface ComponentElementsFooterSectionInput {
  title?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<ComponentLinksLinkInput>>>;
}

export interface FileInput {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
}

export interface EditFileInput {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
}

export interface ComponentElementsFeatureColumnInput {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['ID']>;
}

export interface EditComponentElementsFeatureColumnInput {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['ID']>;
}

export interface ComponentElementsFeatureRowInput {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['ID']>;
  link?: Maybe<ComponentLinksLinkInput>;
}

export interface EditComponentElementsFeatureRowInput {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['ID']>;
  link?: Maybe<EditComponentLinksLinkInput>;
}

export interface ComponentElementsFeatureInput {
  name?: Maybe<Scalars['String']>;
}

export interface EditComponentElementsFeatureInput {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
}

export interface ComponentElementsLogoInput {
  title?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['ID']>;
}

export interface EditComponentElementsLogoInput {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['ID']>;
}

export interface ComponentElementsPlanInput {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  features?: Maybe<Array<Maybe<ComponentElementsFeatureInput>>>;
  isRecommended?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Float']>;
  pricePeriod?: Maybe<Scalars['String']>;
}

export interface EditComponentElementsPlanInput {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  features?: Maybe<Array<Maybe<EditComponentElementsFeatureInput>>>;
  isRecommended?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Float']>;
  pricePeriod?: Maybe<Scalars['String']>;
}

export interface ComponentElementsTestimonialInput {
  logo?: Maybe<Scalars['ID']>;
  picture?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  authorTitle?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
}

export interface EditComponentElementsTestimonialInput {
  id?: Maybe<Scalars['ID']>;
  logo?: Maybe<Scalars['ID']>;
  picture?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  authorTitle?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
}

export interface ComponentSectionsBottomActionInput {
  title?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Maybe<ComponentLinksButtonInput>>>;
}

export interface EditComponentSectionsBottomActionInput {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Maybe<EditComponentLinksButtonInput>>>;
}

export interface ComponentSectionsFeatureColumnsGroupInput {
  features?: Maybe<Array<Maybe<ComponentElementsFeatureColumnInput>>>;
}

export interface EditComponentSectionsFeatureColumnsGroupInput {
  id?: Maybe<Scalars['ID']>;
  features?: Maybe<Array<Maybe<EditComponentElementsFeatureColumnInput>>>;
}

export interface ComponentSectionsFeatureRowsGroupInput {
  features?: Maybe<Array<Maybe<ComponentElementsFeatureRowInput>>>;
}

export interface EditComponentSectionsFeatureRowsGroupInput {
  id?: Maybe<Scalars['ID']>;
  features?: Maybe<Array<Maybe<EditComponentElementsFeatureRowInput>>>;
}

export interface ComponentSectionsHeroInput {
  title?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['ID']>;
  smallTextWithLink?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Maybe<ComponentLinksButtonInput>>>;
}

export interface EditComponentSectionsHeroInput {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['ID']>;
  smallTextWithLink?: Maybe<Scalars['String']>;
  buttons?: Maybe<Array<Maybe<EditComponentLinksButtonInput>>>;
}

export interface ComponentSectionsLargeVideoInput {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['ID']>;
  poster?: Maybe<Scalars['ID']>;
}

export interface EditComponentSectionsLargeVideoInput {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['ID']>;
  poster?: Maybe<Scalars['ID']>;
}

export interface ComponentSectionsPricingInput {
  title?: Maybe<Scalars['String']>;
  plans?: Maybe<Array<Maybe<ComponentElementsPlanInput>>>;
}

export interface EditComponentSectionsPricingInput {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  plans?: Maybe<Array<Maybe<EditComponentElementsPlanInput>>>;
}

export interface ComponentSectionsRichTextInput {
  content?: Maybe<Scalars['String']>;
}

export interface EditComponentSectionsRichTextInput {
  id?: Maybe<Scalars['ID']>;
  content?: Maybe<Scalars['String']>;
}

export interface ComponentSectionsTestimonialsGroupInput {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<ComponentLinksLinkInput>;
  logos?: Maybe<Array<Maybe<ComponentElementsLogoInput>>>;
  testimonials?: Maybe<Array<Maybe<ComponentElementsTestimonialInput>>>;
}

export interface EditComponentSectionsTestimonialsGroupInput {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<EditComponentLinksLinkInput>;
  logos?: Maybe<Array<Maybe<EditComponentElementsLogoInput>>>;
  testimonials?: Maybe<Array<Maybe<EditComponentElementsTestimonialInput>>>;
}




export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}
