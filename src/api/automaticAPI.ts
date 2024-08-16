// noinspection JSUnusedGlobalSymbols
/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** AGInfo */
export interface AGInfo {
  /**
   * Id
   * id
   * @default 0
   */
  id?: number;
  /**
   * Create Time
   * id
   * @default 0
   */
  create_time?: number;
  /**
   * Update Time
   * id
   * @default 0
   */
  update_time?: number;
  /**
   * Ag Name
   * 角色姓名
   * @maxLength 128
   */
  ag_name: string;
  /**
   * Age
   * 年龄
   * @min 18
   */
  age: number;
  /**
   * Introduce Tag
   * 介绍标签
   */
  introduce_tag?: string[];
  /**
   * Cover Url
   * ag 封面图(首页展示
   * @default ""
   */
  cover_url?: string;
  /**
   * Ag File Url
   * 角色文件
   * @default {}
   */
  ag_file_url?: AiGirlfriendBfile;
  /**
   * Is Member Only
   * 是否会员专属
   * @default false
   */
  is_member_only?: boolean;
  /** 角色画风类型: realistic/anime */
  art_style_type: EnumAGStyle;
  /**
   * 角色呈现方式类型: live2d/static
   * @default ""
   */
  display_type?: EnumAGDisplay;
  /**
   * Static Image
   * 预制静态图（角色页面六张）
   */
  static_image?: string[];
  /**
   * Ag Metrics
   * 角色详细信息
   */
  ag_metrics?: AiGirlfriendMetrics | object;
  /**
   * Conversation Id
   * 会话id
   * @default 0
   */
  conversation_id?: number;
  /**
   * Has Unlocked
   * 是否解锁
   * @default false
   */
  has_unlocked?: boolean;
  /**
   * Enabled
   * 是否显示
   * @default true
   */
  enabled?: boolean;
}

/**
 * AGListResponse
 * 分页数据: 格式统一
 */
export interface AGListResponse {
  /**
   * Count
   * 总数
   * @default 0
   */
  count?: number;
  /**
   * Page
   * 当前页码
   * @default 1
   */
  page?: number;
  /**
   * Pages
   * 总页数
   * @default 1
   */
  pages?: number;
  /**
   * Page Size
   * 每页数量
   * @default 100
   */
  page_size?: number;
  /**
   * Lists
   * 角色列表
   */
  lists?: AiGirlfriendSchema[];
}

/**
 * AgPresetImageUnlockMethod
 * An enumeration.
 */
export enum AgPresetImageUnlockMethod {
  Coin = 'coin',
  LevelUp = 'level_up',
  Message = 'message',
}

/** AiGirlfriendBfile */
export interface AiGirlfriendBfile {
  /**
   * Live2D Url
   * live2d文件地址
   * @maxLength 1024
   * @default ""
   */
  live2d_url?: string;
  /**
   * App Static Img Url
   * app静态图地址
   * @default ""
   */
  app_static_img_url?: string;
  /**
   * Web Static Img Url
   * web静态图地址
   * @default ""
   */
  web_static_img_url?: string;
  /**
   * Static Img Url
   * 静态图地址
   * @default ""
   */
  static_img_url?: string;
  /**
   * Background Url
   * 背景文件地址
   * @maxLength 1024
   * @default ""
   */
  background_url?: string;
}

/** AiGirlfriendMetrics */
export interface AiGirlfriendMetrics {
  /**
   * Occupation
   * 职业
   * @maxLength 128
   */
  occupation: string;
  /**
   * Personality
   * 性格描述
   * @maxLength 256
   */
  personality: string;
  /**
   * Dressing Style
   * 穿衣风格
   * @maxLength 256
   */
  dressing_style: string;
  /**
   * Measurements
   * 三围描述
   * @maxLength 128
   */
  measurements: string;
  /**
   * Relationship With Me
   * 与我的关系
   * @maxLength 256
   */
  relationship_with_me: string;
  /**
   * Hair Color
   * 发色
   * @maxLength 64
   */
  hair_color: string;
  /**
   * Eyes Color
   * 眼睛颜色
   * @maxLength 64
   */
  eyes_color: string;
  /**
   * Ethnicity
   * 种族
   * @maxLength 128
   */
  ethnicity: string;
  /**
   * Hobbies
   * 兴趣爱好
   * @maxLength 256
   */
  hobbies: string;
  /**
   * Country
   * 国家
   * @maxLength 128
   */
  country: string;
  /**
   * Skin Color
   * 肤色
   * @maxLength 128
   */
  skin_color: string;
  /**
   * Body
   * 展示区域：full_budy/half_body/other
   * @default "full_budy"
   */
  body?: string;
  /**
   * Other
   * 其他对于角色的描述
   * @maxLength 1024
   */
  other: string;
  /**
   * Place
   * 当前场景关键词
   * @maxLength 128
   * @default ""
   */
  place?: string;
  /**
   * Init Gen Pic Keywords
   * 初始生成图片关键词
   * @maxLength 1024
   * @default ""
   */
  init_gen_pic_keywords?: string;
}

/** AiGirlfriendSchema */
export interface AiGirlfriendSchema {
  /**
   * Id
   * id
   * @default 0
   */
  id?: number;
  /**
   * Create Time
   * id
   * @default 0
   */
  create_time?: number;
  /**
   * Update Time
   * id
   * @default 0
   */
  update_time?: number;
  /**
   * Ag Name
   * 角色姓名
   * @maxLength 128
   */
  ag_name: string;
  /**
   * Age
   * 年龄
   * @min 18
   */
  age: number;
  /**
   * Introduce Tag
   * 介绍标签
   */
  introduce_tag?: string[];
  /**
   * Cover Url
   * 封面图(首页展示)
   * @maxLength 1024
   * @default ""
   */
  cover_url?: string;
  /**
   * Ag File Url
   * 角色文件
   * @default {}
   */
  ag_file_url?: AiGirlfriendBfile;
  /**
   * Is Member Only
   * 是否会员专属
   * @default false
   */
  is_member_only?: boolean;
  /** 角色画风类型: realistic/anime */
  art_style_type: EnumAGStyle;
  /**
   * 角色呈现方式类型: live2d/static
   * @default ""
   */
  display_type?: EnumAGDisplay;
  /**
   * Static Image
   * 预制静态图（角色页面六张）
   */
  static_image?: string[];
  /**
   * Ag Metrics
   * 角色详细信息
   */
  ag_metrics?: AiGirlfriendMetrics | object;
  /**
   * Conversation Id
   * 会话id
   * @default 0
   */
  conversation_id?: number;
  /**
   * Has Unlocked
   * 是否解锁
   * @default false
   */
  has_unlocked?: boolean;
}

/**
 * AlgoLambdaServiceEnums
 * 请求 算法的lambda服务类型
 */
export enum AlgoLambdaServiceEnums {
  GenerateMessage = 'generate_message',
  RecommendReply = 'recommend_reply',
  GenerateVoice = 'generate_voice',
  MessageGenerateImage = 'message_generate_image',
  PromptGenerateImage = 'prompt_generate_image',
}

/**
 * ArgsApiPointData
 * 上报数据埋点
 */
export interface ArgsApiPointData {
  /**
   * Action Type
   * action type
   */
  action_type: string;
  /**
   * Data
   * 数据序列化后的字符串
   */
  data: object;
}

/**
 * ArgsApiWebTrackData
 * 上报数据埋点
 */
export interface ArgsApiWebTrackData {
  /**
   * Action Type
   * action type
   */
  action_type?: string;
  /**
   * Data
   * 数据序列化后的字符串
   */
  data?: object;
  /**
   * Track Data
   * track data
   * @default []
   */
  track_data?: ArgsApiPointData[];
}

/**
 * ArgsAppleLogin
 * code Or id_token 必须有一个
 */
export interface ArgsAppleLogin {
  /**
   * Redirect Uri
   * 获取授权码时的回调地址
   * @default ""
   */
  redirect_uri?: string;
  /**
   * Page Source
   * 页面广告渠道来源
   * @default ""
   */
  page_source?: string;
  /**
   * Login Tag
   * 登录标识
   * @default ""
   */
  login_tag?: string;
  /**
   * Id Token
   * 使用code(授权码)换取令牌拿到id_token, jwt格式, 包含用户信息
   * @default ""
   */
  id_token?: string;
  /**
   * Login Id
   * 唯一标识
   * @default ""
   */
  login_id?: string;
  /**
   * Code
   * auth code 授权码
   * @default ""
   */
  code?: string;
}

/**
 * ArgsCaptchaSend
 * 发送邮箱验证码
 * 接口请求
 */
export interface ArgsCaptchaSend {
  /**
   * Email
   * @format email
   */
  email: string;
  /**
   * 用户发送验证码来源
   *
   * 注册 register
   * 忘记密码 forget_password
   */
  source: EnumUserCaptchaSource;
}

/**
 * ArgsCaptchaValidate
 * 验证邮箱验证码
 * 接口请求
 */
export interface ArgsCaptchaValidate {
  /**
   * Email
   * @format email
   */
  email: string;
  /**
   * Code
   * 验证码内容
   */
  code: string;
}

/** ArgsConversationExpInfoResponse */
export interface ArgsConversationExpInfoResponse {
  /**
   * Exp Level
   * 好感度等级
   */
  exp_level: number;
  /**
   * Exp Num
   * 好感度值
   */
  exp_num: number;
  /**
   * Level Name
   * 等级名称
   */
  level_name: string;
  /**
   * Exp Level Apex
   * 好感度等级高点
   */
  exp_level_apex: number;
  /**
   * Last Three Picture
   * 最后三张图片
   */
  last_three_picture?: ConversationLastThreePicture[];
}

/**
 * ArgsConversationForDelete
 * 删除接口请求参数
 */
export interface ArgsConversationForDelete {
  /**
   * Conversation Id
   * 会话ID
   * @default 0
   */
  conversation_id?: number;
}

/** ArgsConversationLambdaCallback */
export interface ArgsConversationLambdaCallback {
  /** Algo Data */
  algo_data: object;
  /** 请求 算法的lambda服务类型 */
  algo_service_type: AlgoLambdaServiceEnums;
  /** Data */
  data: object;
}

/**
 * ArgsConversationMessageEvaluation
 * 会话 评价消息
 * 接口请求
 */
export interface ArgsConversationMessageEvaluation {
  /**
   * Conversation Id
   * 会话ID
   * @default 0
   */
  conversation_id?: number;
  /**
   * Message Id
   * 消息ID
   * @default 0
   */
  message_id?: number;
  /**
   * 消息评价结果
   * @default ""
   */
  evaluation_result?: MessageEvaluationResult;
}

/**
 * ArgsConversationMessageGenerate
 * 会话 生成AG消息
 * 接口请求
 */
export interface ArgsConversationMessageGenerate {
  /**
   * Conversation Id
   * 会话ID
   * @default 0
   */
  conversation_id?: number;
  /**
   * Content
   * 消息内容
   * @default ""
   */
  content?: string;
  /**
   * Message Id
   * 消息ID, act 为 regenerate 时必传
   */
  message_id?: number;
  /**
   * 操作类型
   * @default "generate"
   */
  act?: ConversationMessageGenerateAct;
}

/**
 * ArgsConversationMessageGenerateImage
 * 会话 基础请求
 */
export interface ArgsConversationMessageGenerateImage {
  /**
   * Conversation Id
   * 会话ID
   * @default 0
   */
  conversation_id?: number;
  /**
   * Message Id
   * 消息ID
   * @default 0
   */
  message_id?: number;
}

/**
 * ArgsConversationMessageGenerateVoice
 * 会话 基础请求
 */
export interface ArgsConversationMessageGenerateVoice {
  /**
   * Conversation Id
   * 会话ID
   * @default 0
   */
  conversation_id?: number;
  /**
   * Message Id
   * 消息ID
   * @default 0
   */
  message_id?: number;
}

/**
 * ArgsConversationMessageRecommendedReply
 * 会话 推荐回复
 * 接口请求
 */
export interface ArgsConversationMessageRecommendedReply {
  /**
   * Conversation Id
   * 会话ID
   * @default 0
   */
  conversation_id?: number;
  /**
   * Message Id
   * 消息ID
   * @default 0
   */
  message_id?: number;
}

/**
 * ArgsConversationRegenerateImage
 * 会话 基础请求
 */
export interface ArgsConversationRegenerateImage {
  /**
   * Conversation Id
   * 会话ID
   * @default 0
   */
  conversation_id?: number;
  /**
   * Conversation Unlock Image Id
   * 会话解锁图片ID
   */
  conversation_unlock_image_id: number;
}

/**
 * ArgsConversationReportAction
 * 会话 上报行为
 * 接口请求
 */
export interface ArgsConversationReportAction {
  /**
   * Conversation Id
   * 会话ID
   * @default 0
   */
  conversation_id?: number;
  /**
   * 操作类型
   * @default ""
   */
  operation_type?: GuideOperationType;
}

/**
 * ArgsConversationSetPropStatus
 * 会话 设置道具状态
 * 接口请求
 */
export interface ArgsConversationSetPropStatus {
  /**
   * Conversation Id
   * 会话ID
   * @default 0
   */
  conversation_id?: number;
  /**
   * Coin Goods Id
   * 道具ID
   * @default 0
   */
  coin_goods_id?: number;
  /**
   * Status
   * 道具状态
   * @default false
   */
  status?: boolean;
}

/**
 * ArgsConversationUnlock
 * 会话 解锁角色接口请求
 */
export interface ArgsConversationUnlock {
  /**
   * Ag Id
   * ag_id
   * @default 0
   */
  ag_id?: number;
}

/**
 * ArgsConversationUplockImage
 * 会话 基础请求
 */
export interface ArgsConversationUplockImage {
  /**
   * Conversation Id
   * 会话ID
   * @default 0
   */
  conversation_id?: number;
  /**
   * Ag Preset Image Id
   * 角色预置图片ID
   */
  ag_preset_image_id: number;
}

/**
 * ArgsConversationViewImage
 * 会话 基础请求
 */
export interface ArgsConversationViewImage {
  /**
   * Conversation Id
   * 会话ID
   * @default 0
   */
  conversation_id?: number;
  /**
   * Message Id
   * 图片消息ID
   * @default 0
   */
  message_id?: number;
}

/**
 * ArgsConversationpromptGenerateImage
 * 会话 基础请求
 */
export interface ArgsConversationpromptGenerateImage {
  /**
   * Conversation Id
   * 会话ID
   * @default 0
   */
  conversation_id?: number;
  /**
   * Prompt
   * 提示
   */
  prompt: string;
}

/** ArgsExchangeCoinGoods */
export interface ArgsExchangeCoinGoods {
  /** Conversation Id */
  conversation_id: number;
  /** Coin Goods Id */
  coin_goods_id: number;
}

/**
 * ArgsGoogleLogin
 * code Or id_token 必须有一个
 */
export interface ArgsGoogleLogin {
  /**
   * Redirect Uri
   * 获取授权码时的回调地址
   * @default ""
   */
  redirect_uri?: string;
  /**
   * Page Source
   * 页面广告渠道来源
   * @default ""
   */
  page_source?: string;
  /**
   * Login Tag
   * 登录标识
   * @default ""
   */
  login_tag?: string;
  /**
   * Id Token
   * 使用code(授权码)换取令牌拿到id_token, jwt格式, 包含用户信息
   * @default ""
   */
  id_token?: string;
  /**
   * Login Id
   * 唯一标识
   * @default ""
   */
  login_id?: string;
  /**
   * Code
   * auth code 授权码
   * @default ""
   */
  code?: string;
}

/** Banner */
export interface Banner {
  /**
   * Ag Info
   * ag 卡片信息
   */
  ag_info?: AGInfo;
  /**
   * Time
   * 倒计时配置
   */
  time?: Time;
  /**
   * Button
   * 按钮配置
   */
  button: Button;
  /**
   * Offer
   * offer 描述
   */
  offer?: NumberField;
  /**
   * Equity List
   * 左下区:权益列表
   */
  equity_list?: EquityDesc[];
  /**
   * Title
   * Banner title or (背景图内置)
   * @default ""
   */
  title?: string;
  /**
   * Img Link
   * Banner 背景图片链接
   * @default ""
   */
  img_link?: string;
  /**
   * Version
   * version (后端debug)
   * @default ""
   */
  version?: string;
  /**
   * Name
   * 这个版本下的第几个banner (后端debug)
   * @default ""
   */
  name?: string;
  /**
   * 跳转链接: 默认会员购买
   * @default "goods_list"
   */
  jump_to?: EnumJumpType;
}

/** Button */
export interface Button {
  /**
   * Enabled
   * 是否显示
   * @default true
   */
  enabled?: boolean;
  /**
   * Prefix
   * 前缀(后端使用)
   */
  prefix?: string;
  /**
   * Num Str
   * 数字
   */
  num_str?: string;
  /**
   * Description
   * 描述(客户端使用)
   * @default ""
   */
  description?: string;
}

/**
 * CoinGoodsPropType
 * 道具类型
 */
export enum CoinGoodsPropType {
  Switch = 'switch',
  Action = 'action',
}

/** ConversationGalleryLive */
export interface ConversationGalleryLive {
  /**
   * Coin Good Id
   * coin 商品id
   */
  coin_good_id: number;
  /**
   * Name
   * coin 商品名称
   */
  name: string;
  /**
   * Image Url
   * coin 商品图片
   */
  image_url: string;
  /**
   * Coin Num
   * coin 商品价格
   */
  coin_num: number;
  /**
   * Is Member Only
   * 是否会员专属
   */
  is_member_only: boolean;
  /**
   * Has Unlocked
   * 是否解锁
   */
  has_unlocked: boolean;
  /** 标签 */
  tag: EnumConversationGalleryListTab;
}

/** ConversationGalleryPhotos */
export interface ConversationGalleryPhotos {
  /**
   * Conversation Unlock Image Id
   * 解锁图片id, generate_status为not_unlock为NULL, 重新生图传这个id
   */
  conversation_unlock_image_id?: number;
  /**
   * Image Url
   * 图片url
   */
  image_url: string;
  /** 状态 */
  generate_status: UnlockImageGenerateStatus;
  /**
   * Unlock Coin Num
   * 解锁金币数
   * @default 0
   */
  unlock_coin_num?: number;
  /**
   * Unlock Level
   * 解锁等级
   */
  unlock_level?: number;
  /**
   * 解锁方式
   * @default "coin"
   */
  unlock_method?: AgPresetImageUnlockMethod;
  /**
   * Preset Image Id
   * 预设图片id, generate_status为not_unlock, 解锁传这个id
   */
  preset_image_id?: number;
  /** 生图类型 */
  generate_type?: UnlockImageGenerateType;
}

/** ConversationInfoListResponse */
export interface ConversationInfoListResponse {
  /**
   * Conversation Id
   * 会话ID
   */
  conversation_id: number;
  /**
   * Ag Id
   * AI女友ID
   */
  ag_id: number;
  /**
   * Ag Avatar Url
   * AI女友头像
   */
  ag_avatar_url: string;
  /**
   * Ag Name
   * AI女友名称
   */
  ag_name: string;
  /**
   * Is Member Only
   * 是否会员专属
   */
  is_member_only: boolean;
  /**
   * Display Type
   * 角色呈现方式类型: live2d/static
   */
  display_type: string;
  /**
   * Ag File Url
   * 角色文件地址
   */
  ag_file_url: AiGirlfriendBfile;
  /**
   * Last Message Content
   * 最后一条消息内容
   */
  last_message_content: string;
  /**
   * Last Message Time
   * 最后一条消息时间
   */
  last_message_time: number;
  /**
   * Unread Count
   * 未读消息数量
   */
  unread_count: number;
  /**
   * Exp Level
   * 经验等级
   */
  exp_level: number;
  /**
   * Has Unlocked
   * 是否解锁
   */
  has_unlocked: boolean;
}

/** ConversationLastThreePicture */
export interface ConversationLastThreePicture {
  /**
   * Img Id
   * 图片ID
   */
  img_id: number;
  /**
   * Img Url
   * 图片地址
   */
  img_url: string;
}

/** ConversationListQueryResponse */
export interface ConversationListQueryResponse {
  /**
   * Recommend List
   * AI女友推荐列表
   */
  recommend_list: ConversationRecommendListResponse[];
  /**
   * Conversation List
   * 会话列表
   */
  conversation_list: ConversationInfoListResponse[];
}

/**
 * ConversationMessageGenerateAct
 * 生成消息动作
 */
export enum ConversationMessageGenerateAct {
  Generate = 'generate',
  Regenerate = 'regenerate',
}

/**
 * ConversationMessageType
 * An enumeration.
 */
export enum ConversationMessageType {
  Text = 'text',
  Image = 'image',
  Gift = 'gift',
  Upgrade = 'upgrade',
  FirstChatScene = 'first_chat_scene',
  LimitSendMsg = 'limit_send_msg',
}

/** ConversationRecommendListResponse */
export interface ConversationRecommendListResponse {
  /**
   * Ag Id
   * AI女友ID
   */
  ag_id: number;
  /**
   * Conversation Id
   * 会话ID
   */
  conversation_id: number;
  /**
   * Ag Avatar Url
   * AI女友头像
   */
  ag_avatar_url: string;
  /**
   * Ag Name
   * AI女友名称
   */
  ag_name: string;
  /**
   * Ag File Url
   * 角色文件地址
   */
  ag_file_url: AiGirlfriendBfile;
  /**
   * Is Member Only
   * 是否会员专属
   */
  is_member_only: boolean;
  /**
   * Display Type
   * 角色呈现方式类型: live2d/static
   */
  display_type: string;
  /**
   * Has Unlocked
   * 是否解锁
   */
  has_unlocked: boolean;
}

/** ConversationUnlockResponse */
export interface ConversationUnlockResponse {
  /**
   * Conversation Id
   * 会话ID
   */
  conversation_id: number;
  /**
   * Display Type
   * 角色呈现方式类型: live2d/static
   */
  display_type: string;
  /**
   * Ag File Url
   * 角色文件地址
   */
  ag_file_url: AiGirlfriendBfile;
}

/**
 * EnumAGDisplay
 * 动态/静态
 */
export enum EnumAGDisplay {
  Live2D = 'live2d',
  Static = 'static',
}

/**
 * EnumAGFilter
 * 1. 角色分类
 *     1. 包括 Trend / Live / Real / Anime，默认Trend，点击可以切换到对应分类（需要有拓展性，后续可能会增加更多分类）
 */
export enum EnumAGFilter {
  Trend = 'Trend',
  Live = 'Live',
  Realistic = 'Realistic',
  Anime = 'Anime',
}

/**
 * EnumAGStyle
 * 所有真实风格角色，包括动态和静态
 * 所有二次元角色，包括动态和静态
 */
export enum EnumAGStyle {
  Realistic = 'Realistic',
  Anime = 'Anime',
}

/**
 * EnumConversationEmotion
 * 会话情绪
 */
export enum EnumConversationEmotion {
  Happy = 'happy',
  Angry = 'angry',
  Sad = 'sad',
  Shy = 'shy',
  Default = 'default',
}

/**
 * EnumConversationGalleryListTab
 * 画廊列表tab
 */
export enum EnumConversationGalleryListTab {
  Photos = 'photos',
  Live = 'live',
}

/**
 * EnumJumpType
 * 推送参数定义：
 * https://isw1t6yp68.feishu.cn/sheets/shtcn7P98u5qHAgRokgqsV2IUCh?sheet=e87a39
 */
export enum EnumJumpType {
  GoodsList = 'goods_list',
  BuyCoin = 'buy_coin',
  AgLock = 'ag_lock',
}

/**
 * EnumMemberSource
 * An enumeration.
 */
export enum EnumMemberSource {
  ApplePay = 'apple_pay',
  GooglePay = 'google_pay',
  StripePay = 'stripe_pay',
  Background = 'background',
}

/**
 * EnumMemberType
 * 会员类型
 *
 * 周会员/免费会员 member_week
 * 月会员 member_month
 * 季度会员 member_quarter
 * 半年会员 member_half_year
 * 年会员 member_year
 * 终身会员 member_lifetime
 */
export enum EnumMemberType {
  Value = '',
  MemberMonth = 'member_month',
  MemberYear = 'member_year',
  MemberLifetime = 'member_lifetime',
}

/**
 * EnumUserCaptchaSource
 * 用户发送验证码来源
 *
 * 注册 register
 * 忘记密码 forget_password
 */
export enum EnumUserCaptchaSource {
  Register = 'register',
  ForgetPassword = 'forget_password',
}

/** EquityDesc */
export interface EquityDesc {
  /**
   * Desc
   * 权益描述
   * @default ""
   */
  desc?: string;
}

/** ExpLevelModel */
export interface ExpLevelModel {
  /**
   * Name
   * 等级名称
   * @maxLength 256
   */
  name: string;
  /**
   * Level
   * 等级
   */
  level: number;
  /**
   * Exp Range
   * 经验值
   */
  exp_range: any[];
  /**
   * Equity Desc
   * 权益描述
   * @maxLength 256
   */
  equity_desc: string;
  /**
   * Next Level Reward
   * 下一等级奖励
   */
  next_level_reward?: NextLevelReward;
}

/**
 * GuideOperationType
 * 引导操作类型
 */
export enum GuideOperationType {
  OpenRemind = 'open_remind',
  CloseRemind = 'close_remind',
  GuideShow = 'guide_show',
}

/** HTTPValidationError */
export interface HTTPValidationError {
  /** Detail */
  detail?: ValidationError[];
}

/** Health */
export interface Health {
  /**
   * Version
   * @example "1.0.0"
   */
  version: string;
  /**
   * Status
   * @example "OK"
   */
  status: string;
}

/**
 * HomePageAndroidResp
 * Android 平台
 */
export interface HomePageAndroidResp {
  /**
   * Platform
   * 平台
   * @default -1
   */
  platform?: number;
}

/**
 * HomePageAppResp
 * App 平台
 */
export interface HomePageAppResp {
  /**
   * Platform
   * 平台
   * @default -1
   */
  platform?: number;
}

/** HomePageCommonResp */
export interface HomePageCommonResp {
  /**
   * Fcm Topic
   * fcm 推送 topic
   * @default ""
   */
  fcm_topic?: string;
  /**
   * Banner List
   * banner 轮播图列表
   */
  banner_list?: Banner[];
  /**
   * Exp Level Range List
   * 好感度等级配置列表
   */
  exp_level_range_list?: ExpLevelModel[];
  /**
   * AG 角色分类列表
   * @default ["Trend","Live","Realistic","Anime"]
   */
  ag_role_category_list?: EnumAGFilter[];
  /**
   * Anime Image Prompt List
   * 二次元图片prompt列表，角色art_style_type 为Anime时使用
   * @default []
   */
  anime_image_prompt_list?: string[];
  /**
   * Real Image Promt List
   * 真人图片prompt列表，角色art_style_type为Realistic时使用
   * @default []
   */
  real_image_promt_list?: string[];
  /**
   * Image Cost Coin Config
   * 生图花费coin的配置
   */
  image_cost_coin_config: ImageCostCoinConfig;
}

/**
 * HomePageDynamicCommonResp
 * EnumHomeFilter 同步修改
 */
export interface HomePageDynamicCommonResp {
  /**
   * Banner List
   * banner 轮播图列表
   */
  banner_list?: Banner[];
  /**
   * User Ag Rights Info
   * 用户-AG权益信息
   */
  user_ag_rights_info?: UserAgRightsInfo;
  /**
   * User Info
   * 用户信息
   */
  user_info?: UserAppSchema;
  /**
   * Unread Count
   * 未读消息数量
   * @default 0
   */
  unread_count?: number;
}

/**
 * HomePageDynamicResp
 * 支持: 按照字段获取
 * * common 全部返回
 * * web
 * * app
 *     * ios
 *     * android
 */
export interface HomePageDynamicResp {
  /**
   * Common
   * 公共返回(不分端的数据，三端都需要)
   */
  common?: HomePageDynamicCommonResp;
  /**
   * Platform
   * 客户端自己的树
   */
  platform?:
    | HomePageWebResp
    | HomePageAppResp
    | HomePageIosResp
    | HomePageAndroidResp;
}

/**
 * HomePageIosResp
 * Ios 平台
 */
export interface HomePageIosResp {
  /**
   * Platform
   * 平台
   * @default -1
   */
  platform?: number;
}

/** HomePageStaticResp */
export interface HomePageStaticResp {
  /**
   * Common
   * 公共返回(不分端的数据，三端都需要)
   */
  common?: HomePageCommonResp;
  /**
   * Platform
   * 客户端自己的树
   */
  platform?:
    | HomePageWebResp
    | HomePageAppResp
    | HomePageIosResp
    | HomePageAndroidResp;
}

/**
 * HomePageWebResp
 * web 平台
 */
export interface HomePageWebResp {
  /**
   * Platform
   * 平台
   * @default -1
   */
  platform?: number;
}

/** ImageCostCoinConfig */
export interface ImageCostCoinConfig {
  /** Unlock Preset Image */
  unlock_preset_image: number;
  /** Message Generate Image */
  message_generate_image: number;
  /** Prompt Generate Image */
  prompt_generate_image: number;
}

/** Live2dFreeActionVoiceFile */
export interface Live2DFreeActionVoiceFile {
  /**
   * Touch Body
   * 触摸身体动作对应的语音动效
   * @maxLength 1024
   * @default ""
   */
  touch_body?: string;
  /**
   * Touch Chest
   * 触摸胸部动作对应的语音动效
   * @maxLength 1024
   * @default ""
   */
  touch_chest?: string;
}

/** LoginUserRequest */
export interface LoginUserRequest {
  /**
   * Email
   * @format email
   */
  email: string;
  /** Password */
  password: string;
}

/**
 * MessageEvaluationResult
 * ag回复消息评价结果
 */
export enum MessageEvaluationResult {
  Upvote = 'upvote',
  Trample = 'trample',
}

/**
 * MessageGenerateStatus
 * 消息生成状态
 */
export enum MessageGenerateStatus {
  Generating = 'generating',
  Regenerating = 'regenerating',
  Success = 'success',
  Failed = 'failed',
}

/** NextLevelReward */
export interface NextLevelReward {
  /**
   * Diamond
   * 钻石数量
   */
  diamond: number;
  /**
   * Unlock Img
   * 解锁图片数量
   */
  unlock_img: number;
}

/** NumberField */
export interface NumberField {
  /**
   * Enabled
   * 是否显示
   * @default true
   */
  enabled?: boolean;
  /**
   * Prefix
   * 前缀(后端使用)
   */
  prefix?: string;
  /**
   * Num Str
   * 数字
   */
  num_str?: string;
  /**
   * Description
   * 描述(客户端使用)
   * @default ""
   */
  description?: string;
}

/**
 * RegisterUserRequest
 * 验证邮箱验证码
 * 接口请求
 */
export interface RegisterUserRequest {
  /**
   * Password
   * @minLength 8
   * @maxLength 64
   */
  password: string;
  /**
   * Password Repeat
   * @minLength 8
   * @maxLength 64
   */
  password_repeat: string;
  /**
   * Email
   * @format email
   */
  email: string;
  /**
   * Code
   * 验证码内容
   */
  code: string;
}

/** ResSocialLogin */
export interface ResSocialLogin {
  /**
   * Access Token
   * access_token 用于访问受保护的资源，有效期较短（如1小时），以减少被盗用的风险
   * @default ""
   */
  access_token?: string;
  /**
   * Refresh Token
   * refresh_token 于在 access_token 过期时获取新的 access_token，有效期较长（如7天），只能用于刷新令牌，不应用于访问业务资源
   * @default ""
   */
  refresh_token?: string;
  /**
   * User Id
   * 用户id
   */
  user_id?: number;
  /**
   * Page Source
   * web页面广告渠道来源
   * @default ""
   */
  page_source?: string;
  /**
   * Is First Login
   * 是否首次登录. 数据库生成user_id的时候算首次
   * @default false
   */
  is_first_login?: boolean;
}

/**
 * RespCaptchaSend
 * 发送邮箱验证码
 * 接口响应
 */
export interface RespCaptchaSend {
  /**
   * Code Str
   * 验证码内容
   * @default ""
   */
  code_str?: string;
}

/** RespCaptchaValid */
export interface RespCaptchaValid {
  /**
   * Ok
   * 是否验证成功
   */
  ok: boolean;
}

/** RespCoinGoodsExchange */
export interface RespCoinGoodsExchange {
  /** User Coin Num */
  user_coin_num: number;
}

/** RespConversationAgInfo */
export interface RespConversationAgInfo {
  /**
   * Id
   * AI女友ID
   */
  id: number;
  /**
   * Ag Name
   * AI女友名称
   */
  ag_name: string;
  /**
   * Age
   * AI女友年龄
   */
  age: number;
  /**
   * Ag Avatar Url
   * AI女友头像
   */
  ag_avatar_url: string;
  /**
   * Personality
   * AI女友性格
   */
  personality: string[];
  /**
   * Level Name
   * 等级名称
   */
  level_name: string;
  /**
   * Exp Level
   * 经验等级
   */
  exp_level: number;
  /**
   * Exp Num
   * 经验值
   */
  exp_num: number;
  /**
   * Is Top Level
   * 是否满级
   */
  is_top_level: boolean;
  /**
   * Next Level Exp
   * 下一等级经验值
   */
  next_level_exp: number;
  /**
   * Character Desc
   * 角色性格描述
   */
  character_desc: string;
  /**
   * Conversation Id
   * 会话ID
   */
  conversation_id: number;
  /** 角色画风类型 */
  art_style_type: EnumAGStyle;
}

/** RespConversationConversationInfo */
export interface RespConversationConversationInfo {
  /**
   * Conversation Id
   * 会话ID
   */
  conversation_id: number;
  /**
   * User Id
   * 用户ID
   */
  user_id: number;
  /**
   * Ag Id
   * AG ID
   */
  ag_id: number;
  /**
   * Exp Level
   * 经验等级
   */
  exp_level: number;
  /**
   * Exp Num
   * 经验值
   */
  exp_num: number;
  /**
   * Last Message Content
   * 最后一条消息内容
   * @default ""
   */
  last_message_content?: string;
  /**
   * Last Message Time
   * 最后一条消息时间
   * @default 0
   */
  last_message_time?: number;
  /**
   * Unread Count
   * 未读消息数量
   */
  unread_count: number;
  /**
   * Is Deleted
   * 是否删除
   */
  is_deleted: number;
  /**
   * Is Show Guide
   * 是否显示引导
   * @default false
   */
  is_show_guide?: boolean;
  /**
   * Prop Status Map
   * 道具状态
   * @default {}
   */
  prop_status_map?: Record<string, boolean>;
}

/** RespConversationDetailAgInfo */
export interface RespConversationDetailAgInfo {
  /**
   * Id
   * 角色ID
   */
  id: number;
  /**
   * Ag Name
   * 角色姓名
   */
  ag_name: string;
  /**
   * Ag Avatar Url
   * 头像图
   */
  ag_avatar_url: string;
  /**
   * Cover Url
   * 封面图(首页展示)
   * @maxLength 1024
   */
  cover_url: string;
  /**
   * Ag File Url
   * 角色文件
   */
  ag_file_url: AiGirlfriendBfile;
  /**
   * Display Type
   * 角色呈现方式类型: live2d/static
   */
  display_type: string;
  /** 角色画风类型 */
  art_style_type: EnumAGStyle;
  /**
   * Voice File
   * 角色语音文件
   * @default {}
   */
  voice_file?: Live2DFreeActionVoiceFile;
  /**
   * Age
   * AI女友年龄
   */
  age: number;
  /**
   * Personality
   * AI女友性格
   */
  personality: string[];
  /**
   * Level Name
   * 等级名称
   */
  level_name: string;
  /**
   * Exp Level
   * 经验等级
   */
  exp_level: number;
  /**
   * Exp Num
   * 经验值
   */
  exp_num: number;
  /**
   * Is Top Level
   * 是否满级
   */
  is_top_level: boolean;
  /**
   * Next Level Exp
   * 下一等级经验值
   */
  next_level_exp: number;
  /**
   * Character Desc
   * 角色性格描述
   * @default ""
   */
  character_desc?: string;
  /**
   * Conversation Id
   * 会话ID
   */
  conversation_id: number;
}

/** RespConversationDetailGiftInfo */
export interface RespConversationDetailGiftInfo {
  /**
   * Id
   * 礼物ID
   */
  id: number;
  /**
   * Name
   * 礼物名称
   */
  name: string;
  /**
   * Image Url
   * 礼物图片
   */
  image_url: string;
  /**
   * Coin Num
   * 礼物价格
   */
  coin_num: number;
  /**
   * Is Member Only
   * 是否会员专属
   */
  is_member_only: boolean;
  /**
   * Goods Type
   * 礼物类型
   */
  goods_type: string;
  /**
   * Goods Video Url
   * 商品使用视频地址
   * @default ""
   */
  goods_video_url?: string;
}

/** RespConversationDetailPropInfo */
export interface RespConversationDetailPropInfo {
  /**
   * Id
   * 道具ID
   */
  id: number;
  /**
   * Name
   * 道具名称
   */
  name: string;
  /**
   * Image Url
   * 道具图片
   */
  image_url: string;
  /**
   * Coin Num
   * 道具价格
   */
  coin_num: number;
  /**
   * Is Member Only
   * 是否会员专属
   */
  is_member_only: boolean;
  /**
   * Goods Type
   * 道具类型
   */
  goods_type: string;
  /**
   * Has Unlocked
   * 是否解锁
   */
  has_unlocked: boolean;
  /**
   * Status
   * 开关类道具状态、非开关类道具为None
   */
  status?: boolean;
  /** 道具类型 */
  prop_type: CoinGoodsPropType;
  /**
   * Open Image Url
   * 开关类道具打开的图片地址
   * @default ""
   */
  open_image_url?: string;
  /**
   * Voice Url
   * 道具动效语音地址
   * @default ""
   */
  voice_url?: string;
}

/**
 * RespConversationGalleryList
 * 分页数据: 格式统一
 */
export interface RespConversationGalleryList {
  /**
   * Count
   * 总数
   * @default 0
   */
  count?: number;
  /**
   * Page
   * 当前页码
   * @default 1
   */
  page?: number;
  /**
   * Pages
   * 总页数
   * @default 1
   */
  pages?: number;
  /**
   * Page Size
   * 每页数量
   * @default 100
   */
  page_size?: number;
  /**
   * Lists
   * 图片列表
   */
  lists: (ConversationGalleryPhotos | ConversationGalleryLive)[];
}

/** RespConversationGenerateImage */
export interface RespConversationGenerateImage {
  /**
   * Conversation Unlock Image Id
   * 会话解锁图片ID
   */
  conversation_unlock_image_id: number;
  /**
   * Conversation Id
   * 会话ID
   */
  conversation_id: number;
  /**
   * User Id
   * 用户ID
   */
  user_id: number;
  /**
   * Ag Id
   * AI女友ID
   */
  ag_id: number;
  /**
   * Image Url
   * 图片地址
   */
  image_url: string;
  /** 生图类型 */
  generate_type: UnlockImageGenerateType;
  /** 生图状态 */
  generate_status: UnlockImageGenerateStatus;
  /**
   * User Coin Num
   * 用户金币数量
   */
  user_coin_num: number;
}

/**
 * RespConversationInteractiveDetail
 * 交互详情页
 * 接口响应
 */
export interface RespConversationInteractiveDetail {
  /**
   * Conversation Id
   * 会话ID
   */
  conversation_id: number;
  /**
   * Ag Info
   * ag信息
   * @default {}
   */
  ag_info?: RespConversationDetailAgInfo;
  /**
   * Level Info
   * 等级信息
   * @default {}
   */
  level_info?: ArgsConversationExpInfoResponse;
  /**
   * Prop List
   * 道具列表
   * @default []
   */
  prop_list?: RespConversationDetailPropInfo[];
  /**
   * Gift List
   * 礼物列表
   * @default []
   */
  gift_list?: RespConversationDetailGiftInfo[];
  /**
   * Message Info
   * 对话区消息内容
   * @default []
   */
  message_info?: UserAgMessageBaseModel[];
  /**
   * Conversation Info
   * 会话信息
   * @default {}
   */
  conversation_info?: RespConversationConversationInfo;
  /**
   * Remaining Send Msg Num
   * 用户当日剩余发消息次数
   * @default 0
   */
  remaining_send_msg_num?: number;
}

/**
 * RespConversationMessageGenerate
 * 会话 AG消息
 * 接口响应
 */
export interface RespConversationMessageGenerate {
  /**
   * 角色消息类型
   * @default "text"
   */
  ag_msg_type?: ConversationMessageType;
  /**
   * 角色消息生成状态
   * @default "generating"
   */
  generate_status?: MessageGenerateStatus;
  /** 角色情绪 */
  emotion?: EnumConversationEmotion;
  /**
   * User Id
   * 用户ID
   */
  user_id: number;
  /**
   * Ag Id
   * 角色ID
   */
  ag_id: number;
  /**
   * Last Msg Time
   * 最新消息时间
   */
  last_msg_time: number;
  /**
   * Recommended Reply
   * 推荐回复
   * @default []
   */
  recommended_reply?: string[];
  /**
   * Conversation Id
   * 会话ID
   */
  conversation_id: number;
  /**
   * Message Id
   * 消息ID
   */
  message_id: number;
  /**
   * User Msg Content
   * 用户消息内容
   * @default ""
   */
  user_msg_content?: string;
  /**
   * Ag Msg Content
   * 角色消息内容
   * @default ""
   */
  ag_msg_content?: string;
  /**
   * Create Time
   * 创建时间
   */
  create_time: number;
  /**
   * Update Time
   * 更新时间
   */
  update_time: number;
  /**
   * Deleted
   * 是否删除
   * @default false
   */
  deleted?: boolean;
  /**
   * Is Read
   * 是否已读
   * @default false
   */
  is_read?: boolean;
  /**
   * Evaluation Result
   * 评价结果
   * @default ""
   */
  evaluation_result?: string;
  /**
   * Extra
   * 额外信息
   */
  extra?: UserAgMessageExtra;
  /**
   * Image Info
   * 图片信息
   */
  image_info?: UserAgMessageExtraImage;
  /**
   * Voice Info
   * 语音信息
   */
  voice_info?: UserAgMessageExtraVoice;
  /**
   * Remaining Send Msg Num
   * 用户当日剩余发消息次数
   * @default 0
   */
  remaining_send_msg_num?: number;
}

/**
 * RespConversationMessageList
 * 分页数据: 格式统一
 */
export interface RespConversationMessageList {
  /**
   * Count
   * 总数
   * @default 0
   */
  count?: number;
  /**
   * Page
   * 当前页码
   * @default 1
   */
  page?: number;
  /**
   * Pages
   * 总页数
   * @default 1
   */
  pages?: number;
  /**
   * Page Size
   * 每页数量
   * @default 100
   */
  page_size?: number;
  /**
   * Lists
   * 消息列表
   */
  lists: UserAgMessageBaseModel[];
}

/** RespConversationUnlockImage */
export interface RespConversationUnlockImage {
  /**
   * Image Url
   * 解锁后的图片地址
   */
  image_url: string;
}

/** RespRet */
export interface RespRet {
  /**
   * Ret
   * 无实际意义，调试用. 比如数据库更新操作影响的行数
   * @default 0
   */
  ret?: number;
}

/** Time */
export interface Time {
  /**
   * Enabled
   * 是否显示
   * @default true
   */
  enabled?: boolean;
  /**
   * End Timestamp
   * 倒计时结束时间(前端使用)
   * @default 0
   */
  end_timestamp?: number;
}

/** Token */
export interface Token {
  /**
   * Access Token
   * access_token 用于访问受保护的资源，有效期较短（如1小时），以减少被盗用的风险
   * @default ""
   */
  access_token?: string;
  /**
   * Refresh Token
   * refresh_token 于在 access_token 过期时获取新的 access_token，有效期较长（如7天），只能用于刷新令牌，不应用于访问业务资源
   * @default ""
   */
  refresh_token?: string;
}

/**
 * UnlockImageGenerateStatus
 * An enumeration.
 */
export enum UnlockImageGenerateStatus {
  NotUnlock = 'not_unlock',
  Generating = 'generating',
  GenerateSuccess = 'generate_success',
  GenerateFailed = 'generate_failed',
}

/**
 * UnlockImageGenerateType
 * An enumeration.
 */
export enum UnlockImageGenerateType {
  PresetImage = 'preset_image',
  MessageImage = 'message_image',
  PromptImage = 'prompt_image',
}

/** UserAgMessageBaseModel */
export interface UserAgMessageBaseModel {
  /**
   * 角色消息类型
   * @default "text"
   */
  ag_msg_type?: ConversationMessageType;
  /**
   * 角色消息生成状态
   * @default "generating"
   */
  generate_status?: MessageGenerateStatus;
  /** 角色情绪 */
  emotion?: EnumConversationEmotion;
  /**
   * User Id
   * 用户ID
   */
  user_id: number;
  /**
   * Ag Id
   * 角色ID
   */
  ag_id: number;
  /**
   * Last Msg Time
   * 最新消息时间
   */
  last_msg_time: number;
  /**
   * Recommended Reply
   * 推荐回复
   * @default []
   */
  recommended_reply?: string[];
  /**
   * Conversation Id
   * 会话ID
   */
  conversation_id: number;
  /**
   * Message Id
   * 消息ID
   */
  message_id: number;
  /**
   * User Msg Content
   * 用户消息内容
   * @default ""
   */
  user_msg_content?: string;
  /**
   * Ag Msg Content
   * 角色消息内容
   * @default ""
   */
  ag_msg_content?: string;
  /**
   * Create Time
   * 创建时间
   */
  create_time: number;
  /**
   * Update Time
   * 更新时间
   */
  update_time: number;
  /**
   * Deleted
   * 是否删除
   * @default false
   */
  deleted?: boolean;
  /**
   * Is Read
   * 是否已读
   * @default false
   */
  is_read?: boolean;
  /**
   * Evaluation Result
   * 评价结果
   * @default ""
   */
  evaluation_result?: string;
  /**
   * Extra
   * 额外信息
   */
  extra?: UserAgMessageExtra;
  /**
   * Image Info
   * 图片信息
   */
  image_info?: UserAgMessageExtraImage;
  /**
   * Voice Info
   * 语音信息
   */
  voice_info?: UserAgMessageExtraVoice;
}

/** UserAgMessageExtra */
export interface UserAgMessageExtra {
  /**
   * Image Info
   * 图片信息
   */
  image_info?: UserAgMessageExtraImage;
  /**
   * Voice Info
   * 语音信息
   */
  voice_info?: UserAgMessageExtraVoice;
  /**
   * Inc Exp
   * 对应增加的经验值
   */
  inc_exp?: number;
  /**
   * Red Words
   * 前端标红的词
   */
  red_words?: string;
  /**
   * Is Be Viewed
   * 图片是否被预览
   */
  is_be_viewed?: boolean;
}

/** UserAgMessageExtraImage */
export interface UserAgMessageExtraImage {
  /**
   * Conversation Unlock Image Id
   * 解锁图片ID
   */
  conversation_unlock_image_id?: number;
  /**
   * Image Url
   * 图片URL
   */
  image_url: string;
  /**
   * 图片生成状态
   * @default "not_unlock"
   */
  generate_status?: UnlockImageGenerateStatus;
  /**
   * Unlock Coin Num
   * 解锁金币数
   * @default 0
   */
  unlock_coin_num?: number;
  /**
   * Unlock Level
   * 解锁等级
   */
  unlock_level?: number;
  /**
   * 解锁方式
   * @default "coin"
   */
  unlock_method?: AgPresetImageUnlockMethod;
  /**
   * Preset Image Id
   * 预设图片ID
   */
  preset_image_id?: number;
  /** 生成类型 */
  generate_type?: UnlockImageGenerateType;
}

/** UserAgMessageExtraVoice */
export interface UserAgMessageExtraVoice {
  /**
   * Voice Url
   * 语音URL
   */
  voice_url: string;
}

/**
 * UserAgRightsInfo
 * 动态资源: 用户 AG 权益信息
 */
export interface UserAgRightsInfo {
  /**
   * Has Lock Count
   * 已经解锁的次数
   * @default 0
   */
  has_lock_count?: number;
  /**
   * Un Lock Count
   * 剩余解锁model次数
   * @default 0
   */
  un_lock_count?: number;
  /**
   * N Coins
   * 用户的金币数量
   * @default 0
   */
  n_coins?: number;
}

/** UserAppSchema */
export interface UserAppSchema {
  /**
   * Id
   * id
   * @default 0
   */
  id?: number;
  /**
   * Create Time
   * id
   * @default 0
   */
  create_time?: number;
  /**
   * Update Time
   * id
   * @default 0
   */
  update_time?: number;
  /**
   * Email
   * 邮箱
   */
  email?: string;
  /**
   * Login Type
   * 登录类型
   */
  login_type?: string;
  /**
   * Source
   * 用户来源
   */
  source?: string;
  /**
   * Date Joined
   * 注册时间
   */
  date_joined?: number;
  /**
   * Social Email
   * 社交邮箱
   */
  social_email?: string;
  /**
   * Nickname
   * 昵称
   */
  nickname?: string;
  /**
   * Avatar
   * 头像
   */
  avatar?: string;
  /**
   * Deleted
   * 是否删除
   */
  deleted?: boolean;
  /**
   * 会员类型
   * @default ""
   */
  member_type?: EnumMemberType;
  /**
   * Member Start Time
   * 会员开始时间
   */
  member_start_time?: number;
  /**
   * Member End Time
   * 会员结束时间
   */
  member_end_time?: number;
  /** 会员来源 */
  member_source?: EnumMemberSource;
  /**
   * Is Member
   * 是否是会员
   * @default false
   */
  is_member?: boolean;
  /**
   * Create In24H
   * 注册是否24h内
   * @default false
   */
  create_in24h?: boolean;
  /**
   * Create In30M End Timestamp
   * create_in30m_end_timestamp
   * @default 0
   */
  create_in30m_end_timestamp?: number;
  /**
   * Create In24H End Timestamp
   * create_in24h_end_timestamp
   * @default 0
   */
  create_in24h_end_timestamp?: number;
  /**
   * Last Login Time
   * 最后登录时间
   */
  last_login_time?: number;
  /**
   * Register Platform
   * 注册平台
   */
  register_platform?: string;
  /**
   * Fcm Register Token
   * fcm注册token
   */
  fcm_register_token?: string;
  /**
   * Device Id
   * 设备id
   */
  device_id?: string;
  /**
   * Deleted Time
   * 删除时间
   */
  deleted_time?: number;
  /**
   * Guest To User Time
   * 游客转用户时间
   */
  guest_to_user_time?: number;
  /**
   * Is First Login
   * 是否第一次登录
   */
  is_first_login?: boolean;
  /**
   * Jump To
   * 跳转链接
   * @default ""
   */
  jump_to?: EnumJumpType | string;
  /**
   * User Coin Num
   * 用户金币数
   * @default 0
   */
  user_coin_num?: number;
  /**
   * Has Renamed
   * 是否改过昵称
   * @default false
   */
  has_renamed?: boolean;
  /**
   * Extra
   * 额外信息
   */
  extra?: object;
}

/**
 * UserUpdateFcmTokenRequest
 * 更新 firebase token
 */
export interface UserUpdateFcmTokenRequest {
  /**
   * Fcm Register Token
   * firebase fcm token, >=1
   * @minLength 1
   */
  fcm_register_token: string;
}

/**
 * UserUpdateInfo
 * 更新 用户相关信息
 */
export interface UserUpdateInfo {
  /**
   * Nickname
   * 昵称
   */
  nickname?: string | null;
  /**
   * Avatar
   * 头像url
   */
  avatar?: string | null;
}

/** ValidationError */
export interface ValidationError {
  /** Location */
  loc: (string | number)[];
  /** Message */
  msg: string;
  /** Error Type */
  type: string;
}

import { type ExtraRequestParams } from '@/types/index';
import { request } from '@/utils/request';

/**
 * @title AI Girlfriend API
 * @version 1.0.0
 *
 *
 *        AI Girlfriend API 接口规范
 *        1. uri 路径都以/结尾，如 /api/xxx/ 如果有不以/结尾的，联系后端修改
 *        2. 所有业务错误码及含义查看文档 https://isw1t6yp68.feishu.cn/sheets/ZhvSsTtTNhfEFPtCPOxcH7cSn6d
 *
 *        域名:
 *        dev:   dev-server.xoxogf.ai
 *        stage:
 *        prod:
 *        token有效期: access_token: 1h, refresh_token: 7d
 *
 */
class XoxogfAPI {
  private static apiInstance: XoxogfAPI | null = null;
  public static getInstance() {
    if (!XoxogfAPI.apiInstance) XoxogfAPI.apiInstance = new XoxogfAPI();
    return XoxogfAPI.apiInstance;
  }

  monitoring = {
    /**
     * No description
     * @tags Health
     * @name GetHealthList
     * @summary Health
     * @request GET:/v1/monitoring/health/
     */
    getHealthList: (options: ExtraRequestParams = {}) =>
      request.get<Health>(`/v1/monitoring/health/`, {
        ...options,
      }),
  };
  users = {
    /**
     * @description 注册 * step1:请求发送邮箱验证码(/v1/utils/captcha/send)，获取code * step2:请求邮箱注册
     * @tags Users
     * @name PostRegister
     * @summary 邮箱注册
     * @request POST:/v1/users/register/
     */
    postRegister: (
      data: RegisterUserRequest,
      options: ExtraRequestParams = {}
    ) =>
      request.post<ResSocialLogin>(`/v1/users/register/`, {
        params: { ...data },
        ...options,
      }),
    /**
     * No description
     * @tags Users
     * @name PostLogin
     * @summary 邮箱登陆
     * @request POST:/v1/users/login/
     */
    postLogin: (data: LoginUserRequest, options: ExtraRequestParams = {}) =>
      request.post<ResSocialLogin>(`/v1/users/login/`, {
        params: { ...data },
        ...options,
      }),
    /**
     * @description 退出 * server:后端清空服务器的相关信息。 流程保留，目前没有黑白名单，不需要处理, 返回{} * client:access_token, refresh_token 置空
     * @tags Users
     * @name PostLogout
     * @summary 退出
     * @request POST:/v1/users/logout/
     * @secure
     */
    postLogout: (options: ExtraRequestParams = {}) =>
      request.post<RespRet>(`/v1/users/logout/`, {
        ...options,
      }),
    /**
     * @description 1.用户首次登录：用户通过提供用户名和密码或其他认证信息首次登录系统。 2.发放令牌：认证服务器验证用户的凭证后，向客户端发放 access_token 和 refresh_token。 3.使用 access_token：客户端使用 access_token 访问服务器上的受保护资源。 4.access_token 过期：一旦 access_token 过期，客户端将使用 refresh_token 向认证服务器请求新的 access_token。 5.刷新令牌：认证服务器验证 refresh_token 的有效性，如果验证通过，则发放一个新的 access_token（以及新 refresh_token）续签
     * @tags Users
     * @name PostRefreshToken
     * @summary 刷新access_token
     * @request POST:/v1/users/refresh_token/
     */
    postRefreshToken: (data: Token, options: ExtraRequestParams = {}) =>
      request.post<Token>(`/v1/users/refresh_token/`, {
        params: { ...data },
        ...options,
      }),
    /**
     * @description (通过邮箱)重置密码后，所有端的access_token/refresh_token都会失效，需要重新登陆, 客户端需要清空
     * @tags Users
     * @name PostUpdateResetPassword
     * @summary 忘记密码
     * @request POST:/v1/users/update/reset_password/
     */
    postUpdateResetPassword: (
      data: RegisterUserRequest,
      options: ExtraRequestParams = {}
    ) =>
      request.post<RespRet>(`/v1/users/update/reset_password/`, {
        params: { ...data },
        ...options,
      }),
    /**
     * @description 更新: firebase token * android: 清空app应用数据/重新安装 * ios: 清空app应用数据/重新安装/修改device_id
     * @tags Users
     * @name PostUpdateFcm
     * @summary 更新firebase token
     * @request POST:/v1/users/update/fcm/
     * @secure
     */
    postUpdateFcm: (
      data: UserUpdateFcmTokenRequest,
      options: ExtraRequestParams = {}
    ) =>
      request.post<RespRet>(`/v1/users/update/fcm/`, {
        params: { ...data },
        ...options,
      }),
    /**
     * @description 更新用户信息 输入多少字段，更新多少字段 更新昵称后，has_renamed字段更新为True，此时用户再解锁角色，不再需要进入改名页面
     * @tags Users
     * @name PutCenterInfo
     * @summary User Center Info
     * @request PUT:/v1/users/center/info/
     * @secure
     */
    putCenterInfo: (data: UserUpdateInfo, options: ExtraRequestParams = {}) =>
      request.put<any>(`/v1/users/center/info/`, {
        params: { ...data },
        ...options,
      }),
    /**
     * No description
     * @tags Users
     * @name DeleteCenterInfo
     * @summary Delete User
     * @request DELETE:/v1/users/center/info/
     * @secure
     */
    deleteCenterInfo: (options: ExtraRequestParams = {}) =>
      request.delete<any>(`/v1/users/center/info/`, {
        ...options,
      }),
    /**
     * No description
     * @tags Users
     * @name PostPointDataApp
     * @summary 上报埋点app
     * @request POST:/v1/users/point_data/app/
     */
    postPointDataApp: (
      data: ArgsApiPointData,
      options: ExtraRequestParams = {}
    ) =>
      request.post<any>(`/v1/users/point_data/app/`, {
        params: { ...data },
        ...options,
      }),
    /**
     * No description
     * @tags Users
     * @name PostPointDataWeb
     * @summary 上报埋点web
     * @request POST:/v1/users/point_data/web/
     */
    postPointDataWeb: (
      data: ArgsApiWebTrackData,
      options: ExtraRequestParams = {}
    ) =>
      request.post<any>(`/v1/users/point_data/web/`, {
        params: { ...data },
        ...options,
      }),
  };
  auth = {
    /**
     * @description 谷歌登陆-app * *
     * @tags Social(OAuth2三方登陆)
     * @name PostGoogleApp
     * @summary 谷歌登陆-app
     * @request POST:/v1/auth/google/app/
     */
    postGoogleApp: (data: ArgsGoogleLogin, options: ExtraRequestParams = {}) =>
      request.post<ResSocialLogin>(`/v1/auth/google/app/`, {
        params: { ...data },
        ...options,
      }),
    /**
     * @description https://developers.google.com/identity/oauth2/web/guides/overview?hl=zh-cn 为 Web 授权
     * @tags Social(OAuth2三方登陆)
     * @name PostGoogleWeb
     * @summary 谷歌登陆-web
     * @request POST:/v1/auth/google/web/
     */
    postGoogleWeb: (data: ArgsGoogleLogin, options: ExtraRequestParams = {}) =>
      request.post<ResSocialLogin>(`/v1/auth/google/web/`, {
        params: { ...data },
        ...options,
      }),
    /**
     * No description
     * @tags Social(OAuth2三方登陆)
     * @name PostAppleApp
     * @summary 苹果登陆-app
     * @request POST:/v1/auth/apple/app/
     */
    postAppleApp: (data: ArgsAppleLogin, options: ExtraRequestParams = {}) =>
      request.post<ResSocialLogin>(`/v1/auth/apple/app/`, {
        params: { ...data },
        ...options,
      }),
    /**
     * No description
     * @tags Social(OAuth2三方登陆)
     * @name PostAppleWeb
     * @summary 苹果登陆-web
     * @request POST:/v1/auth/apple/web/
     */
    postAppleWeb: (data: ArgsAppleLogin, options: ExtraRequestParams = {}) =>
      request.post<ResSocialLogin>(`/v1/auth/apple/web/`, {
        params: { ...data },
        ...options,
      }),
  };
  home = {
    /**
     * No description
     * @tags Home(首页)
     * @name GetStaticResourcesList
     * @summary 静态资源
     * @request GET:/v1/home/static_resources/
     */
    getStaticResourcesList: (options: ExtraRequestParams = {}) =>
      request.get<HomePageStaticResp>(`/v1/home/static_resources/`, {
        ...options,
      }),
    /**
     * @description 限制： (user_id, 业务key) 只放和用户相关的业务. 返回： 默认返回全部. 动态接口： 通过key获取指定业务 key: ['all', 'user_info', 'banner_list', 'user_ag_rights_info'] eg1: 只获取user_info, key=user_info eg2: 只获取banner_list, key=banner_list eg3: 只获取user_ag_rights_info, key=user_ag_rights_info 多个获取: eg2: 同时获取user_info和user_ag_rights_info, key=user_info,user_ag_rights_info
     * @tags Home(首页)
     * @name GetDynamicResourcesList
     * @summary 动态资源 (用户+业务)
     * @request GET:/v1/home/dynamic_resources/
     * @secure
     */
    getDynamicResourcesList: (
      data?: {
        /**
         * Key
         * @default "all"
         */
        key?: string;
      },
      options: ExtraRequestParams = {}
    ) =>
      request.get<HomePageDynamicResp>(`/v1/home/dynamic_resources/`, {
        params: { ...data },
        ...options,
      }),
    /**
     * @description page 目前只有50个 调用时机: 1.未登陆，首页调用 2.登陆后(请求头带token)，首页调用, 会返回会话id,以及是否解锁
     * @tags Home(首页)
     * @name GetAgListList
     * @summary Ag List
     * @request GET:/v1/home/ag/list/
     */
    getAgListList: (
      data?: {
        /**
         * Page
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page Size
         * @max 200
         * @default 100
         */
        page_size?: number;
        /** @default "Trend" */
        art_style_type?: EnumAGFilter;
      },
      options: ExtraRequestParams = {}
    ) =>
      request.get<AGListResponse>(`/v1/home/ag/list/`, {
        params: { ...data },
        ...options,
      }),
  };
  utils = {
    /**
     * @description todo: aws waf等 限流策略 保证接口安全 flow: 1.生成验证码 2.存入 redis 3.发送邮件
     * @tags utils(工具类服务)
     * @name PostCaptchaSend
     * @summary 发送邮箱验证码
     * @request POST:/v1/utils/captcha/send/
     */
    postCaptchaSend: (
      data: ArgsCaptchaSend,
      options: ExtraRequestParams = {}
    ) =>
      request.post<RespCaptchaSend>(`/v1/utils/captcha/send/`, {
        params: { ...data },
        ...options,
      }),
    /**
     * @description (目前仅供调试), 验证后码立刻失效, 验证后重新获取新码再调用注册接口
     * @tags utils(工具类服务)
     * @name PostCaptchaValidate
     * @summary 验证邮箱验证码
     * @request POST:/v1/utils/captcha/validate/
     * @secure
     */
    postCaptchaValidate: (
      data: ArgsCaptchaValidate,
      options: ExtraRequestParams = {}
    ) =>
      request.post<RespCaptchaValid>(`/v1/utils/captcha/validate/`, {
        params: { ...data },
        ...options,
      }),
  };
  conversation = {
    /**
     * @description 互动页详情 调用此接口，获取互动页详情，调用前需要先判断has_renamed，如果为false，需要先跳到修改昵称页
     * @tags conversation_router
     * @name GetDetailList
     * @summary 互动页详情
     * @request GET:/v1/conversation/detail/
     * @secure
     */
    getDetailList: (
      data?: {
        /**
         * Conversation Id
         * @default 0
         */
        conversation_id?: number;
      },
      options: ExtraRequestParams = {}
    ) =>
      request.get<RespConversationInteractiveDetail>(
        `/v1/conversation/detail/`,
        {
          params: { ...data },
          ...options,
        }
      ),
    /**
     * @description # 生成消息 generate, message_id 为 None, content 必传 # 对当前消息重新生成 regenerate, content 为 None, message_id 必传
     * @tags conversation_router
     * @name PostMessageGenerate
     * @summary ag生成消息
     * @request POST:/v1/conversation/message/generate/
     * @secure
     */
    postMessageGenerate: (
      data: ArgsConversationMessageGenerate,
      options: ExtraRequestParams = {}
    ) =>
      request.post<RespConversationMessageGenerate>(
        `/v1/conversation/message/generate/`,
        {
          params: { ...data },
          ...options,
        }
      ),
    /**
     * No description
     * @tags conversation_router
     * @name PostReportAction
     * @summary 引导上报
     * @request POST:/v1/conversation/report_action/
     * @secure
     */
    postReportAction: (
      data: ArgsConversationReportAction,
      options: ExtraRequestParams = {}
    ) =>
      request.post<any>(`/v1/conversation/report_action/`, {
        params: { ...data },
        ...options,
      }),
    /**
     * No description
     * @tags conversation_router
     * @name PostMessageRecommendedReply
     * @summary 推荐回复
     * @request POST:/v1/conversation/message/recommended_reply/
     * @secure
     */
    postMessageRecommendedReply: (
      data: ArgsConversationMessageRecommendedReply,
      options: ExtraRequestParams = {}
    ) =>
      request.post<any>(`/v1/conversation/message/recommended_reply/`, {
        params: { ...data },
        ...options,
      }),
    /**
     * No description
     * @tags conversation_router
     * @name PostMessageGenerateImage
     * @summary 消息生图
     * @request POST:/v1/conversation/message/generate_image/
     * @secure
     */
    postMessageGenerateImage: (
      data: ArgsConversationMessageGenerateImage,
      options: ExtraRequestParams = {}
    ) =>
      request.post<RespConversationGenerateImage>(
        `/v1/conversation/message/generate_image/`,
        {
          params: { ...data },
          ...options,
        }
      ),
    /**
     * No description
     * @tags conversation_router
     * @name PostPromptGenerateImage
     * @summary prompt生成图片
     * @request POST:/v1/conversation/prompt_generate_image/
     * @secure
     */
    postPromptGenerateImage: (
      data: ArgsConversationpromptGenerateImage,
      options: ExtraRequestParams = {}
    ) =>
      request.post<RespConversationGenerateImage>(
        `/v1/conversation/prompt_generate_image/`,
        {
          params: { ...data },
          ...options,
        }
      ),
    /**
     * No description
     * @tags conversation_router
     * @name PostMessageEvaluation
     * @summary 消息评价
     * @request POST:/v1/conversation/message/evaluation/
     * @secure
     */
    postMessageEvaluation: (
      data: ArgsConversationMessageEvaluation,
      options: ExtraRequestParams = {}
    ) =>
      request.post<any>(`/v1/conversation/message/evaluation/`, {
        params: { ...data },
        ...options,
      }),
    /**
     * No description
     * @tags conversation_router
     * @name PostMessageGenerateVoice
     * @summary 生成语音
     * @request POST:/v1/conversation/message/generate_voice/
     * @secure
     */
    postMessageGenerateVoice: (
      data: ArgsConversationMessageGenerateVoice,
      options: ExtraRequestParams = {}
    ) =>
      request.post<any>(`/v1/conversation/message/generate_voice/`, {
        params: { ...data },
        ...options,
      }),
    /**
     * @description 获取好感度信息 升级奖励在静态资源接口里面，字段名：exp_level_range_list 用户/AI女友 名称头像前端可以从其它接口获取 好感度达到五级，好感度上限返回为Null
     * @tags conversation_router
     * @name GetExpInfoList
     * @summary Exp Info
     * @request GET:/v1/conversation/exp/info/
     * @secure
     */
    getExpInfoList: (
      data: {
        /** Conversation Id */
        conversation_id: number;
      },
      options: ExtraRequestParams = {}
    ) =>
      request.get<ArgsConversationExpInfoResponse>(
        `/v1/conversation/exp/info/`,
        {
          params: { ...data },
          ...options,
        }
      ),
    /**
     * @description 会话列表
     * @tags conversation_router
     * @name GetListList
     * @summary Conv List
     * @request GET:/v1/conversation/list/
     * @secure
     */
    getListList: (options: ExtraRequestParams = {}) =>
      request.get<ConversationListQueryResponse>(`/v1/conversation/list/`, {
        ...options,
      }),
    /**
     * No description
     * @tags conversation_router
     * @name DeleteConversation
     * @summary Reset Conversation
     * @request DELETE:/v1/conversation/
     * @secure
     */
    deleteConversation: (
      data: ArgsConversationForDelete,
      options: ExtraRequestParams = {}
    ) =>
      request.delete<any>(`/v1/conversation/`, {
        params: { ...data },
        ...options,
      }),
    /**
     * @description 检查用户是否可以解锁角色 可以解锁则创建会话
     * @tags conversation_router
     * @name PostCheckUnlock
     * @summary Check Unlock
     * @request POST:/v1/conversation/check/unlock/
     * @secure
     */
    postCheckUnlock: (
      data: ArgsConversationUnlock,
      options: ExtraRequestParams = {}
    ) =>
      request.post<ConversationUnlockResponse>(
        `/v1/conversation/check/unlock/`,
        {
          params: { ...data },
          ...options,
        }
      ),
    /**
     * @description 设置开关类道具状态
     * @tags conversation_router
     * @name PostSetPropStatus
     * @summary 设置开关类道具状态
     * @request POST:/v1/conversation/set_prop_status/
     * @secure
     */
    postSetPropStatus: (
      data: ArgsConversationSetPropStatus,
      options: ExtraRequestParams = {}
    ) =>
      request.post<any>(`/v1/conversation/set_prop_status/`, {
        params: { ...data },
        ...options,
      }),
    /**
     * @description 角色资料页信息
     * @tags conversation_router
     * @name GetAgInfoList
     * @summary 角色资料页信息
     * @request GET:/v1/conversation/ag_info/
     * @secure
     */
    getAgInfoList: (
      data?: {
        /**
         * Conversation Id
         * @default 0
         */
        conversation_id?: number;
      },
      options: ExtraRequestParams = {}
    ) =>
      request.get<RespConversationAgInfo>(`/v1/conversation/ag_info/`, {
        params: { ...data },
        ...options,
      }),
    /**
     * @description lambda回调, 后端自己调用的接口, 前端无需关注
     * @tags conversation_router
     * @name PostLambdaCallback
     * @summary lambda回调, 后端自己调用的接口
     * @request POST:/v1/conversation/lambda_callback/
     * @secure
     */
    postLambdaCallback: (
      data: ArgsConversationLambdaCallback,
      options: ExtraRequestParams = {}
    ) =>
      request.post<any>(`/v1/conversation/lambda_callback/`, {
        params: { ...data },
        ...options,
      }),
    /**
     * No description
     * @tags conversation_router
     * @name PostUnlockImage
     * @summary 解锁图片
     * @request POST:/v1/conversation/unlock_image/
     * @secure
     */
    postUnlockImage: (
      data: ArgsConversationUplockImage,
      options: ExtraRequestParams = {}
    ) =>
      request.post<RespConversationUnlockImage>(
        `/v1/conversation/unlock_image/`,
        {
          params: { ...data },
          ...options,
        }
      ),
    /**
     * @description gallery区域列表 tab 为photos 时lists返回的数据结构 为 ConversationGalleryPhotos generate_status 为 not_unlock 可调用解锁图片接口解锁 传 preset_image_id generate_status 为 generate_failed 可调用重新生图的接口 传 conversation_unlock_image_id, 为websocket 返回结果 tab 为live 时lists返回的数据结构 为 ConversationGalleryLive
     * @tags conversation_router
     * @name GetGalleryListList
     * @summary gallery区域列表
     * @request GET:/v1/conversation/gallery_list/
     * @secure
     */
    getGalleryListList: (
      data: {
        /**
         * Page
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page Size
         * @max 200
         * @default 100
         */
        page_size?: number;
        /**
         * Conversation Id
         * @default 0
         */
        conversation_id?: number;
        /** 画廊列表tab */
        tab: EnumConversationGalleryListTab;
      },
      options: ExtraRequestParams = {}
    ) =>
      request.get<RespConversationGalleryList>(
        `/v1/conversation/gallery_list/`,
        {
          params: { ...data },
          ...options,
        }
      ),
    /**
     * @description 消息历史
     * @tags conversation_router
     * @name GetMessageListList
     * @summary 消息历史
     * @request GET:/v1/conversation/message_list/
     * @secure
     */
    getMessageListList: (
      data?: {
        /**
         * Page
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * Page Size
         * @max 200
         * @default 100
         */
        page_size?: number;
        /**
         * Conversation Id
         * @default 0
         */
        conversation_id?: number;
      },
      options: ExtraRequestParams = {}
    ) =>
      request.get<RespConversationMessageList>(
        `/v1/conversation/message_list/`,
        {
          params: { ...data },
          ...options,
        }
      ),
    /**
     * No description
     * @tags conversation_router
     * @name PostRegenerateImage
     * @summary 重新生图
     * @request POST:/v1/conversation/regenerate_image/
     * @secure
     */
    postRegenerateImage: (
      data: ArgsConversationRegenerateImage,
      options: ExtraRequestParams = {}
    ) =>
      request.post<any>(`/v1/conversation/regenerate_image/`, {
        params: { ...data },
        ...options,
      }),
    /**
     * No description
     * @tags conversation_router
     * @name PostViewImage
     * @summary 查看图片
     * @request POST:/v1/conversation/view_image/
     * @secure
     */
    postViewImage: (
      data: ArgsConversationViewImage,
      options: ExtraRequestParams = {}
    ) =>
      request.post<any>(`/v1/conversation/view_image/`, {
        params: { ...data },
        ...options,
      }),
  };
  coinGoods = {
    /**
     * No description
     * @tags coin_goods_router
     * @name PostExchange
     * @summary 兑换金币商品
     * @request POST:/v1/coin_goods/exchange/
     * @secure
     */
    postExchange: (
      data: ArgsExchangeCoinGoods,
      options: ExtraRequestParams = {}
    ) =>
      request.post<RespCoinGoodsExchange>(`/v1/coin_goods/exchange/`, {
        params: { ...data },
        ...options,
      }),
  };
}

export const apis = XoxogfAPI.getInstance();
