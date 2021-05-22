const defs = {
  MAX_GROUP_SIZE: 101,
  MAX_SUBJECT_LENGTH: 25,
  IMG_MAX_EDGE: 1600,
  IMG_MAX_BYTES: 1048576,
  IMG_THUMB_MAX_EDGE: 100,
  DOC_THUMB_MAX_EDGE: 480,
  MAX_MEDIA_UPLOAD_SIZE: 16777216,
  MAX_FILE_SIZE: 104857600,
  MAX_FILES: 30,
  SHOW_GIF_SEARCH: !1,
  USE_NOTIFICATION_QUERY: !1,
  FWD_UI_START_TS: 0,
  GOOGLE_MAPS_DO_NOT_AUTH: !0,
  GOOGLE_MAPS_KEYLESS: !1,
  SUSPICIOUS_LINKS: !1,
  FINAL_LIVE_LOCATION: !1,
  STATUS_RANKING: !1,
  FREQUENTLY_FORWARDED_MESSAGES: !1,
  FREQUENTLY_FORWARDED_THRESHOLD: 5,
  FREQUENTLY_FORWARDED_MAX: 1,
  FREQUENTLY_FORWARDED_GROUP_SETTING: !1,
  QUICK_MESSAGE_SEARCH: !1,
  EPHEMERAL_MESSAGES: !1,
  PRELOAD_STICKERS: !1,
  PRODUCT_CATALOG_DEEPLINK: !1,
  PRODUCT_CATALOG_OPEN_DEEPLINK: !1,
  PRODUCT_MEDIA_ATTACHMENTS: !1,
  WEB_CLEAN_INCOMING_FILENAME: !1,
  WEB_VOIP_INTERNAL_TESTER: !1,
  WEB_ENABLE_MODEL_STORAGE: !1,
  WS_CAN_CACHE_REQUESTS: !1,
  MAX_FORWARD_COUNT_GLOBAL: 5,
  FREQUENTLY_FORWARDED_SENTINEL: 127,
  MAX_SMB_LABEL_COUNT: 20,
  DEFAULT_SMB__NEW_LABEL_COLOR: '#d6d7d7',
  FB_CLB_TOKEN: '1063127757113399|745146ffa34413f9dbb5469f5370b7af',
  FB_CLB_CHECK_URL: 'https://crashlogs.whatsapp.net/wa_fls_upload_check',
  FB_CLB_URL: 'https://crashlogs.whatsapp.net/wa_clb_data',
  G_MAPS_DIR_URL: 'https://maps.google.com/maps/dir',
  G_MAPS_IMG_URL: 'https://maps.googleapis.com/maps/api/staticmap',
  G_MAPS_SEARCH_URL: 'https://maps.google.com/maps/search',
  G_MAPS_URL: 'https://maps.google.com/maps',
  NOTIFICATION_PROMPT_DELAY: 1e4,
  PTT_PLAYBACK_DELAY: 400,
  NOTIFICATION_TIMEOUT: 5e3,
  CALL_NOTIFICATION_TIMEOUT: 45e3,
  IDLE_TIMEOUT: 6e4,
  IDLE_TIMEOUT_WAIT: 78e4,
  SEARCH_ZOOM: 17,
  SEND_UNAVAILABLE_WAIT: 15e3,
  SEND_PAUSED_WAIT: 2500,
  CLEAR_CHAT_DIRTY_WAIT: 2500,
  LOG_UPLOAD_INTERVAL: 36e5,
  REVOKE_WINDOW: 4096,
  WAM_ROTATE_INTERVAL: 300,
  ALBUM_DIFF_INTERVAL: 600,
  MAX_TXT_MSG_SIZE: 65536,
  INITIAL_PAGE_SIZE: 768,
  FREQUENTLY_FORWARDED_INITIAL_PAGE_SIZE: 308,
  SUBSEQUENT_PAGE_SIZE: 3072,
  OVERFLOWING_PAGE_THRESHOLD: 0.1,
  GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH: 100,
  GROUP_DESCRIPTION_LENGTH: 0,
  GROUPS_V3_RESTRICT_GROUPS: !1,
  GROUPS_V3_ANNOUNCE_GROUPS: !1,
  GROUPS_V3: !1,
  INFO_DRAWER_MAX_ROWS: 10,
  NUM_COLORS: 20,
  FTS_MIN_CHARS: 2,
  FTS_TTL: 6e4,
  FTS_TYPING_DELAY: 300,
  FTS_NUM_RESULTS: 30,
  STICKERS: !1,
  HSM_ASPECT_RATIO: 1.91,
  TEMPLATE_DOC_MIME_TYPES: 1,
  TEMPLATE_URL_START: 64,
  TEMPLATE_URL_END: 32,
  MMS_MEDIA_KEY_TTL: 1 / 0,
  KEY_STORAGE_TEST: 'storage_test',
  KEY_CLIENT_TOKEN: 'WAToken1',
  KEY_SERVER_TOKEN: 'WAToken2',
  KEY_SECRET: 'WASecretKey',
  KEY_SECRET_BUNDLE: 'WASecretBundle',
  KEY_SECURITY_NOTIFICATIONS: 'WASecurityNotifications',
  KEY_BROWSER_ID: 'WABrowserId',
  KEY_GEOCODER_LOCATION: 'WAGeocoderLocation',
  KEY_GROUP_ASSIGNED_COLOR: 'WAGroupAssignedColor',
  KEY_GMAPS_OVER_LIMIT: 'WAGmapsOverLimit',
  KEY_GLOBAL_MUTE_SOUNDS: 'WAGlobalSounds',
  KEY_GLOBAL_MUTE_NOTIFICATIONS: 'WAGlobalNotifications',
  KEY_GLOBAL_MUTE_IN_APP_NOTIFICATIONS: 'WAGlobalInAppNotifications',
  KEY_GLOBAL_MUTE_PREVIEWS: 'WAGlobalPreviews',
  KEY_GLOBAL_COLLAPSE_MUTED: 'WAGlobalCollapseMuted',
  KEY_NOTIFICATION_SOUND: 'WANotificationSound',
  KEY_LANG: 'WALangPref',
  KEY_LAST_ACTIVE_EMOJI_TAB: 'WALastActiveEmojiTab',
  KEY_LAST_SELECTED_COMPOSE_BOX_PANEL: 'WALastActiveComposeBoxPanel',
  KEY_LAST_CHAT_MUTE_DURATION: 'WALastChatMuteDuration',
  KEY_UNKNOWN_ID: 'WAUnknownID',
  KEY_VERSION: 'WAVersion',
  KEY_LOAD_RETRY_GENERATION: 'WALoadRetryGeneration',
  KEY_WHATSAPP_MUTEX: 'whatsapp-mutex',
  KEY_LAST_WID: 'last-wid',
  KEY_LAST_WID_MD: 'last-wid-md',
  KEY_SAVE_TO_CAMERA_ROLL: 'save_to_camera_roll',
  KEY_SMB_LABEL_COLOR_PALETTE: 'smb_label_color_palette',
  KEY_LAST_PUSHNAME: 'last-pushname',
  KEY_PROTO_VERSION: 'WAProtoVersion',
  KEY_MOBILE_PLATFORM: 'mobile-platform',
  KEY_REMEMBER_ME: 'remember-me',
  KEY_LOGOUT_TOKEN: 'logout-token',
  KEY_OLD_LOGOUT_CREDS: 'old-logout-cred',
  KEY_NO_TAKEOVER: 'no-takeover',
  KEY_WHATSAPP_LS_VERSION: 'ver',
  KEY_WAM_BUFFER: 'wam-buffer',
  KEY_WAM_INFO: 'wam-info',
  KEY_TIME_SPENT_EVENT: 'WaTimeSpentEvent',
  KEY_VIDEO_VOLUME: 'video-volume',
  KEY_VIDEO_MUTE: 'video-mute',
  KEY_CONTACT_CHECKSUM: 'contact-checksum',
  KEY_COMPOSE_CONTENTS_PREFIX: 'compose-contents_',
  COOKIE_REF: 'ref',
  COOKIE_TOK: 'tok',
  PAGE_SIZE: 50,
  MSG_PRELOAD_THRESHOLD: 20,
  MEDIA_QUERY_LIMIT: 50,
  MIN_PIC_SIDE: 192,
  MAX_PIC_SIDE: 640,
  PROF_PIC_THUMB_SIDE: 96,
  MAX_CAPTION_LENGTH: 1024,
  MAX_PRODUCT_SUBTITLE_LENGTH: 70,
  MAX_REPLY_PRODUCT_TITLE_LENGTH: 40,
  MAX_REPLY_PRODUCT_DESC_LENGTH: 95,
  ALBUM_MIN_SIZE: 4,
  ALBUM_MAX_SIZE: 102,
  ALBUM_MAX_HEIGHT: 168,
  ALBUM_PADDING: 3,
  PRESENCE_COMPOSING_TIMEOUT: 25e3,
  PRESENCE_RESEND_WAIT: 1e4,
  MIMETYPE_OGG: 'audio/ogg',
  IMAGE_MIMES: 'image/*',
  WEBP_MIMES: 'image/webp',
  VIDEO_MIMES: 'video/mp4,video/3gpp,video/quicktime',
  KEY_LOG_CURSOR: 'debugCursor',
  MAX_STATUS_LENGTH: 139,
  MAX_PUSHNAME_LENGTH: 25,
  DISP_TYPE: {
    CONVERSATION: 'CONVERSATION',
    MSG_INFO: 'MSG_INFO',
    STARRED_MSGS: 'STARRED_MSGS',
    GALLERY: 'GALLERY',
    REPLY_STAGE: 'REPLY_STAGE',
    QUOTED_MSG: 'QUOTED_MSG',
    CONTACT_CARD: 'CONTACT_CARD',
  },
  SEND_LOGS_MAX_EMAIL_LENGTH: 320,
  SEND_LOGS_MAX_SUBJECT_LENGTH: 50,
  SEND_LOGS_MIN_DESC_LENGTH: 10,
  SEND_LOGS_MAX_DESC_LENGTH: 500,
  SEND_LOGS_MAX_SCREENSHOTS: 3,
  SEND_LOGS_MAX_SCREENSHOT_SIZE: 10485760,
  ACK: {
    MD_DOWNGRADE: -7,
    INACTIVE: -6,
    CONTENT_UNUPLOADABLE: -5,
    CONTENT_TOO_BIG: -4,
    CONTENT_GONE: -3,
    EXPIRED: -2,
    FAILED: -1,
    CLOCK: 0,
    SENT: 1,
    RECEIVED: 2,
    READ: 3,
    PLAYED: 4,
  },
  ACK_STRING: {
    SENDER: 'sender',
    DELIVERY: 'delivery',
    READ: 'read',
    PLAYED: 'played',
    INACTIVE: 'inactive',
  },
  RETRY: {
    VALIDATE_OLD_SESSION: 2,
    MAX_RETRY: 5,
  },
  KEY_BUNDLE_TYPE: '',
  EDIT_ATTR: {
    REVOKE: 7,
  },
  DEVICE: {
    PRIMARY_DEVICE: 0,
    PRIMARY_VERSION: -1,
  },
  BATTERY_LOW_THRESHOLD_1: 15,
  BATTERY_LOW_THRESHOLD_2: 5,
  BATTERY_DELAY: 1e4,
  WAM_MAX_BUFFER_SIZE: 5e4,
  SOCKET_STATE: {
    OPENING: 'OPENING',
    PAIRING: 'PAIRING',
    UNPAIRED: 'UNPAIRED',
    UNPAIRED_IDLE: 'UNPAIRED_IDLE',
    CONNECTED: 'CONNECTED',
    WITHOUT_INTERNET: 'WITHOUT INTERNET',
    CONFLICT: 'CONFLICT',
    UNLAUNCHED: 'UNLAUNCHED',
    PROXYBLOCK: 'PROXYBLOCK',
    TOS_BLOCK: 'TOS_BLOCK',
    SMB_TOS_BLOCK: 'SMB_TOS_BLOCK',
    DEPRECATED_VERSION: 'DEPRECATED_VERSION',
  },
  SOCKET_STREAM: {
    DISCONNECTED: 'DISCONNECTED',
    SYNCING: 'SYNCING',
    RESUMING: 'RESUMING',
    CONNECTED: 'CONNECTED',
  },
  COLLECTION_HAS_SYNCED: 'collection_has_synced',
  NEW_MSG_SENT: 'new_msg_sent',
  DIAGNOSTIC_DELAY: 18e3,
  ONE_BY_ONE_TRANS_GIF:
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  WALLPAPER_COLOR: [
    '#ede9e4',
    '#ccebdc',
    '#aed8c7',
    '#7acba5',
    '#c7e9eb',
    '#a9dbd8',
    '#68d5d9',
    '#6ec3d4',
    '#f2dad5',
    '#f2d5e1',
    '#fbcad2',
    '#ffa7a8',
    '#cbdaec',
    '#d7d3eb',
    '#e5c0eb',
    '#d0deb1',
    '#dee0b4',
    '#e6dfa8',
    '#f7e9a8',
    '#ffd1a4',
    '#ff8a8c',
    '#ff5978',
    '#f56056',
    '#dc6e4f',
    '#e6e365',
    '#73c780',
    '#2293a4',
    '#219ed9',
    '#2b5aa6',
    '#74676a',
    '#48324d',
    '#dee3e9',
    '#d9dade',
    '#c0c1c4',
    '#7e90a3',
    '#55626f',
    '#243640',
    '#162127',
  ],
  DEFAULT_CHAT_WALLPAPER: 'default_chat_wallpaper',
  INVERT_TRANSPARENT: {
    '#ede9e4': !1,
    '#ccebdc': !1,
    '#aed8c7': !1,
    '#7acba5': !1,
    '#c7e9eb': !1,
    '#a9dbd8': !1,
    '#68d5d9': !1,
    '#6ec3d4': !1,
    '#f2dad5': !1,
    '#f2d5e1': !1,
    '#fbcad2': !1,
    '#ffa7a8': !1,
    '#cbdaec': !1,
    '#d7d3eb': !1,
    '#e5c0eb': !1,
    '#d0deb1': !1,
    '#dee0b4': !1,
    '#e6dfa8': !1,
    '#f7e9a8': !1,
    '#ffd1a4': !1,
    '#ff8a8c': !0,
    '#ff5978': !0,
    '#f56056': !0,
    '#dc6e4f': !0,
    '#e6e365': !1,
    '#73c780': !0,
    '#2293a4': !0,
    '#219ed9': !0,
    '#2b5aa6': !0,
    '#74676a': !0,
    '#48324d': !0,
    '#dee3e9': !1,
    '#d9dade': !1,
    '#c0c1c4': !1,
    '#7e90a3': !0,
    '#55626f': !0,
    '#243640': !0,
    '#162127': !0,
  },
  L10N_PRIORITY: {
    SAVED: 6,
    PHONE: 5,
    PREVIOUS: 4,
    URL: 3,
    BROWSER: 2,
    DEFAULT: 1,
  },
  RENDER_CURSOR: {
    RECENT_AT_TOP: 'recent_at_top',
    RECENT_AT_BOTTOM: 'recent_at_bottom',
    CONVERSATION: 'conversation',
    GROUP_CONVERSATION: 'group_conversation',
    STARRED_DRAWER: 'starred_drawer',
  },
  SECURITY_LINK: 'https://www.whatsapp.com/security/',
  SMB_TOS_LEARN_MORE_LINK:
    'https://www.whatsapp.com/legal/small-business-terms/',
  SERVER_WID: 'server@c.us',
  PSA_WID: '0@c.us',
  STATUS_WID: 'status@broadcast',
  OFFICIAL_BIZ_WID: '16505361212@c.us',
  VISIBILITY: {
    ABOVE: 'above',
    VISIBLE: 'visible',
    BELOW: 'below',
  },
  VIDEO_STREAM_URL: '/stream/video',
  SPELL_CHECK_SKIP_WORDS: {
    en_us: new Set([
      'ain',
      'couldn',
      'didn',
      'doesn',
      'hadn',
      'hasn',
      'mightn',
      'mustn',
      'needn',
      'oughtn',
      'shan',
      'shouldn',
      'wasn',
      'weren',
      'wouldn',
      'Ain',
      'Couldn',
      'Didn',
      'Doesn',
      'Hadn',
      'Hasn',
      'Mightn',
      'Mustn',
      'Needn',
      'Oughtn',
      'Shan',
      'Shouldn',
      'Wasn',
      'Weren',
      'Wouldn',
    ]),
    en_gb: new Set([
      'ain',
      'couldn',
      'didn',
      'doesn',
      'hadn',
      'hasn',
      'mightn',
      'mustn',
      'needn',
      'oughtn',
      'shan',
      'shouldn',
      'wasn',
      'weren',
      'wouldn',
      'Ain',
      'Couldn',
      'Didn',
      'Doesn',
      'Hadn',
      'Hasn',
      'Mightn',
      'Mustn',
      'Needn',
      'Oughtn',
      'Shan',
      'Shouldn',
      'Wasn',
      'Weren',
      'Wouldn',
    ]),
    en: new Set([
      'ain',
      'couldn',
      'didn',
      'doesn',
      'hadn',
      'hasn',
      'mightn',
      'mustn',
      'needn',
      'oughtn',
      'shan',
      'shouldn',
      'wasn',
      'weren',
      'wouldn',
      'Ain',
      'Couldn',
      'Didn',
      'Doesn',
      'Hadn',
      'Hasn',
      'Mightn',
      'Mustn',
      'Needn',
      'Oughtn',
      'Shan',
      'Shouldn',
      'Wasn',
      'Weren',
      'Wouldn',
    ]),
  },
  GROUP_INVITE_LINK_URL: 'https://chat.whatsapp.com/',
  GROUP_SETTING_TYPE: {
    ANNOUNCEMENT: 'announcement',
    RESTRICT: 'restrict',
    NO_FREQUENTLY_FORWARDED: 'no_frequently_forwarded',
    EPHEMERAL: 'ephemeral',
  },
  GROUP_SETTING_TO_METADATA: {
    announcement: 'announce',
    restrict: 'restrict',
    no_frequently_forwarded: 'noFrequentlyForwarded',
    ephemeral: 'ephemeralDuration',
  },
  L10N: {
    DEFAULT: 'en',
  },
  EMOJI: {
    BUCKET_SIZE: 25,
    CATEGORIES: {
      SMILEYS_PEOPLE: 'SMILEYS_PEOPLE',
      ANIMALS_NATURE: 'ANIMALS_NATURE',
      FOOD_DRINK: 'FOOD_DRINK',
      ACTIVITY: 'ACTIVITY',
      TRAVEL_PLACES: 'TRAVEL_PLACES',
      OBJECTS: 'OBJECTS',
      SYMBOLS: 'SYMBOLS',
      FLAGS: 'FLAGS',
    },
    CATEGORY_MAPPING: {
      'Smileys & People': 'SMILEYS_PEOPLE',
      'Animals & Nature': 'ANIMALS_NATURE',
      'Food & Drink': 'FOOD_DRINK',
      Activity: 'ACTIVITY',
      'Travel & Places': 'TRAVEL_PLACES',
      Objects: 'OBJECTS',
      Symbols: 'SYMBOLS',
      Flags: 'FLAGS',
    },
    ORDERED_CATEGORY_IDS: [
      'SMILEYS_PEOPLE',
      'ANIMALS_NATURE',
      'FOOD_DRINK',
      'ACTIVITY',
      'TRAVEL_PLACES',
      'OBJECTS',
      'SYMBOLS',
      'FLAGS',
    ],
    EMOJI_TYPE: {
      APPLE: 'APPLE',
      WHATSAPP: 'WHATSAPP',
    },
    LARGE_EMOJI_BASE_PATH: '/img',
    LARGE_EMOJI_ELECTRON_BASE_PATH: 'img',
    EMOJI_SPRITES_BASE_PATH: '/img',
    EMOJI_SPRITES_ELECTRON_BASE_PATH: 'img',
  },
  MSG_TYPE: {
    NOTIFICATION: 'notification',
    NOTIFICATION_TEMPLATE: 'notification_template',
    GROUP_NOTIFICATION: 'group_notification',
    GP2: 'gp2',
    BROADCAST_NOTIFICATION: 'broadcast_notification',
    E2E_NOTIFICATION: 'e2e_notification',
    CALL_LOG: 'call_log',
    PROTOCOL: 'protocol',
    CHAT: 'chat',
    LOCATION: 'location',
    PAYMENT: 'payment',
    VCARD: 'vcard',
    CIPHERTEXT: 'ciphertext',
    MULTI_VCARD: 'multi_vcard',
    REVOKED: 'revoked',
    OVERSIZED: 'oversized',
    GROUPS_V4_INVITE: 'groups_v4_invite',
    TEMPLATE: 'template',
    HSM: 'hsm',
    TEMPLATE_BUTTON_REPLY: 'template_button_reply',
    IMAGE: 'image',
    VIDEO: 'video',
    AUDIO: 'audio',
    PTT: 'ptt',
    STICKER: 'sticker',
    DOCUMENT: 'document',
    PRODUCT: 'product',
    UNKNOWN: 'unknown',
  },
  TEMPLATE_SUBTYPE: {
    IMAGE: 'image',
    VIDEO: 'video',
    LOCATION: 'location',
    DOCUMENT: 'document',
    TEXT: 'text',
  },
  TEMPLATE_BUTTON_SUBTYPE: {
    QUICK_REPLY: 'quick_reply',
    CALL: 'call',
    URL: 'url',
  },
  NATIVE_PREF: {
    LAST_SAVED_LOCATION: 'lastSavedLocation',
    CONTENT_SETTINGS: 'contentSettings',
  },
  TOUCHBAR_MAX_EMOJIS: 8,
  VERIFIED_LEVEL: {
    UNKNOWN: 0,
    LOW: 1,
    HIGH: 2,
  },
  HOSTNAME: {
    YOUTUBE: 'www.youtube.com',
    YOUTUBE_SHORTENED: 'youtu.be',
    INSTAGRAM: 'www.instagram.com',
    STREAMABLE: 'streamable.com',
    FACEBOOK: 'www.facebook.com',
    FBWATCH: 'fbwat.ch',
    LASSOVIDEOS: 'lassovideos.com',
  },
  WHATSAPP_ORIGIN: 'https://whatsapp.com',
  SMB_SEARCH_FILTERS: {
    UNREAD: 'unread',
    GROUP: 'group',
    BROADCAST: 'broadcast',
  },
  SMB_LABELS: {
    MAX_LABEL_LENGTH: 100,
  },
  PRODUCT_INQUIRY_TYPE: 'product_inquiry',
  PRODUCT_LIST_ITEM_HEIGHT: 96,
  LOADABLE_DELAY: 200,
  MAX_EPHEMERAL_DURATION: 31536e3,
  EPHEMERAL_SETTINGS: {
    OFF: 0,
    ONE_HOUR: 3600,
    ONE_DAY: 86400,
    ONE_WEEK: 604800,
    ONE_MONTH: 2592e3,
    ONE_YEAR: 31536e3,
  },
  TAB_ORDERS: {
    COMPOSE_BOX_INPUT: 1,
    MESSAGE_LIST: 2,
    CHAT_STARRED_DRAWER: 3,
    CHAT_LIST_SEARCH: 3,
    CHAT_LIST: 4,
    CHAT_CONTACT_LIST: 4,
    CHAT_IMAGE_GALLERY: 4,
    CHAT_SEARCH_MSG_LIST: 4,
    PANEL_SEARCH_INPUT: 5,
    COMPOSE_BOX_MENU_BUTTON: 5,
  },
  SPEEDY_RESUME_MAX_CHATS: 5e3,
  MEDIA_VIEWER: {
    ANIMATION_DURATION: 500,
    CLOSE_ANIMATION_DURATION: 200,
    ZOOM_IN_FACTOR: 2,
  },
};
