"use strict";
define(["objects/Object",
		"objects/Module",
		"objects/Application",
		"objects/Router",
		"objects/MiddleWareRouter",
		"objects/View",
		"objects/Menu",

		"views/FormView",
		"views/GridView",
		"views/ChartView",
		"views/JSONView",

		"loaders/TemplateLoader",
		"loaders/AppLoader",

		"utils/MobileDetection",
		"utils/BrowserDetection",
		"utils/Validator",
		"utils/HistoryInit",
		"utils/MetadataParser",

		'miscs/colorSetting',
		'openbiz.custom',
		'i18n!./nls/locale',

		'views/charts/PieChartView',

		'views/elements/columns/Element',
		'views/elements/columns/Link',
		'views/elements/columns/Text',
		'views/elements/columns/RecordAction',

		'views/elements/records/Button',
		'views/elements/records/Link',

		"views/elements/forms/OptionElement",
		"views/elements/forms/DropdownView",
		"views/elements/forms/RadioView",
		"views/elements/forms/ColorPicker",
		'views/elements/forms/Button',
		'views/elements/forms/Link',
		'views/elements/forms/Label',
		'views/elements/forms/Text',
		'views/elements/forms/Textarea',
		'views/elements/forms/Date',
		'views/elements/forms/DataPicker',
		'views/elements/forms/Uploader',
		'views/elements/forms/User',
		'views/elements/forms/Currency',
		'views/elements/forms/Gallery'
],
	function(Object,
		Module,
		Application,		
		Router,
		MiddleWareRouter,
		View,
		Menu,
		FormView,
		GridView,
		ChartView,
		JSONView,		
		TemplateLoader,
		AppLoader,
		MobileDetection,
		BrowserDetection,
		Validator,
		historyInit,
		MetadataParser,
		colorSetting,
		updateUI,
		locale,
		PieChartView,
		Element,
		ColumnLink,
		ColumnText,		
		RecordAction,
		RecordButton,
		RecordLink,
		OptionElement,
		DropdownView,
		RadioView,
		ColorPicker,
		FormButton,
		FormLink,
		FormLabel,
		FormText,
		FormTextarea,
		FormDate,
		FormDataPicker,
		Uploader,
		User,
		Currency,
		Gallery
		){		
	return {
		apps:{},
		loadedApps:[],
		session:{},
		locale:locale,
		loaders:{
			TemplateLoader : TemplateLoader,
			AppLoader : AppLoader
		},
		objects:{
			Object : 	 Object,
			Application: Application,
			Module : 	 Module,
			Router : 	 Router,
			View   : 	 View,
			Menu   : 	 Menu,
			MiddleWareRouter:MiddleWareRouter
		},			
		utils:{
			MobileDetection: MobileDetection,
			BrowserDetection: BrowserDetection,
			MetadataParser: MetadataParser
		},		
		ui:{
			update: updateUI,
            loader:$('<div class="load-overlay"><div><div class="c1"></div><div class="c2"></div><div class="c3"></div><div class="c4"></div></div><span>'+ locale.loading.text +'</span></div>')
		},
		charts:{
			PieChartView:PieChartView
		},
		elements:{
			columns:{
				link:ColumnLink,
				text:ColumnText,
				recordActions:RecordAction
			},
			records:{
				button:RecordButton,
				link:RecordLink
			},
			forms:{
				link:FormLink,
				button:FormButton,
				dropdown:DropdownView,
				radio:RadioView,
				label:FormLabel,
				colorpicker:ColorPicker,
				text:FormText,
				textarea:FormTextarea,
				date:FormDate,
				picker:FormDataPicker,
				uploader:Uploader,
				user:User,
				currency:Currency,
				gallery:Gallery
			}
		},
		Element:Element,
		OptionElement:OptionElement,
		baseUrl:openbizUrl,
		//shortcut alias
		Application: Application,
		Module: Module,
		Object: Object,
		Router: Router,
		MiddleWareRouter:MiddleWareRouter,
		View: 	View,
		Menu: 	Menu,
		Grid: Backgrid,
		ChartView: ChartView,
		JSONView: JSONView,
		FormView: FormView,
		GridView: GridView,
		isMobile: MobileDetection,
		Browser: BrowserDetection,
		loadApps: AppLoader.load,	
		validator: Validator,
		historyInit: historyInit,
		MetadataParser: MetadataParser,
		init:function(){
			this.historyInit();
			this.validator.defaults.messages=locale.validation,
			this.validator.init();
		},
		colorSetting:colorSetting
	}
});