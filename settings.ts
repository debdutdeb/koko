import { ISetting, SettingType } from '@rocket.chat/apps-engine/definition/settings';
export const settings: Array<ISetting> = [
    {
        id: 'Members_Room_Name',
        type: SettingType.STRING,
        packageValue: '',
        required: true,
        public: false,
        i18nLabel: 'Koko_Members_Room_Name',
        i18nDescription: 'Koko_Members_Room_Name_Description',
    },
    {
        id: 'Post_Praise_Room_Name',
        type: SettingType.STRING,
        packageValue: '',
        required: true,
        public: false,
        i18nLabel: 'Koko_Post_Praise_Room_Name',
        i18nDescription: 'Koko_Post_Praise_Room_Name_Description',
    },
    {
        id: 'Post_Answers_Room_Name',
        type: SettingType.STRING,
        packageValue: '',
        required: true,
        public: false,
        i18nLabel: 'Koko_Post_Answers_Room_Name',
        i18nDescription: 'Koko_Post_Answers_Room_Name_Description',
    },
    {
        id: 'Bot_Username',
        type: SettingType.STRING,
        packageValue: 'rocket.cat',
        required: true,
        public: false,
        i18nLabel: 'Koko_Bot_Username',
        i18nDescription: 'Koko_Bot_Username_Description',
    },
];
