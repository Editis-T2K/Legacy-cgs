define([
	/* screens */
	'modules/CourseScreen/CourseScreen',
	'modules/TocScreen/TocScreen',
	'modules/LessonScreen/LessonScreen',
	'modules/TaskScreen/TaskScreen',
	'modules/DialogScreen/DialogScreen',
	'modules/DialogNoPropsScreen/DialogNoPropsScreen',
	'modules/AppletDialogScreen/AppletDialogScreen',
	'modules/BaseDialogScreen/BaseDialogScreen',
	'modules/PdfScreen/PdfScreen',

	/* components */
	'modules/MenuComponent/MenuComponent',
	'modules/PropsComponent/PropsComponent',
	'modules/TreeComponent/TreeComponent',
	'modules/NavBarComponent/NavBarComponent',
	'modules/StageComponent/StageComponent',
	'modules/LessonsTableComponent/LessonsTableComponent',
	'modules/AppletsTableComponent/AppletsTableComponent',
	
	/* editors */
	'modules/CourseEditor/CourseEditor',
	'modules/TocEditor/TocEditor',
	'modules/LessonEditor/LessonEditor',
	'modules/SeparatorEditor/SeparatorEditor',
	'modules/ReferenceSequenceEditor/ReferenceSequenceEditor',
	'modules/LoEditor/LoEditor',
	'modules/PageEditor/PageEditor',
	'modules/QuizEditor/QuizEditor',
	'modules/SequenceEditor/SequenceEditor',
	'modules/HtmlSequenceEditor/HtmlSequenceEditor',
	'modules/DifferentiatedSequenceEditor/DifferentiatedSequenceEditor',
	'modules/BaseTaskEditor/BaseTaskEditor',
	'modules/InstructionEditor/InstructionEditor',
	'modules/QuestionEditor/QuestionEditor',
    'modules/AssessmentQuestionEditor/AssessmentQuestionEditor',
	'modules/QuestionOnlyEditor/QuestionOnlyEditor',
	'modules/MCEditor/MCEditor',
	'modules/MCAnswerEditor/MCAnswerEditor',
	'modules/FreeWritingEditor/FreeWritingEditor',
	'modules/FreeWritingAnswerEditor/FreeWritingAnswerEditor',
	'modules/ShortAnswerEditor/ShortAnswerEditor',
	'modules/ShortAnswerAnswerEditor/ShortAnswerAnswerEditor',
	'modules/OptionEditor/OptionEditor',
	'modules/TextEditorEditor/TextEditorEditor',
	'modules/TextViewerEditor/TextViewerEditor',
	'modules/ImageViewerEditor/ImageViewerEditor',
	'modules/HeaderEditor/HeaderEditor',
	'modules/SharedContentEditor/SharedContentEditor',
	'modules/SoundButtonEditor/SoundButtonEditor',
	'modules/SubQuestionEditor/SubQuestionEditor',
	'modules/AudioPlayerEditor/AudioPlayerEditor',
	'modules/VideoPlayerEditor/VideoPlayerEditor',
	'modules/ProgressEditor/ProgressEditor',
	'modules/AdvancedProgressEditor/AdvancedProgressEditor',
	'modules/HintEditor/HintEditor',
	'modules/FeedbackEditor/FeedbackEditor',
	'modules/InfoBaloonEditor/InfoBaloonEditor',
	'modules/HelpEditor/HelpEditor',
	'modules/AssetsManagerEditor/AssetsManagerEditor',
	'modules/NarrationsManagerEditor/NarrationsManagerEditor',
	'modules/TtsManagerEditor/TtsManagerEditor',
	'modules/CommentsReportEditor/CommentsReportEditor',
	'modules/TitleEditor/TitleEditor',
	'modules/GenericTitleEditor/GenericTitleEditor',
	'modules/GenericSubTitleEditor/GenericSubTitleEditor',
	'modules/NarrativeEditor/NarrativeEditor',
	'modules/PedagogicalStatementEditor/PedagogicalStatementEditor',
	'modules/SelfCheckEditor/SelfCheckEditor',
    'modules/CompareEditor/CompareEditor',
    'modules/PdfEditor/PdfEditor',
    'modules/AppletWrapperEditor/AppletWrapperEditor',
    'modules/AppletEditor/AppletEditor',
    'modules/AppletTaskEditor/AppletTaskEditor',
    'modules/AppletAnswerEditor/AppletAnswerEditor',
    'modules/MTQEditor/MTQEditor',
    'modules/MatchingAnswerEditor/MatchingAnswerEditor',
    'modules/SortingAnswerEditor/SortingAnswerEditor',
    'modules/SequencingAnswerEditor/SequencingAnswerEditor',
	'modules/MTQAreaEditor/MTQAreaEditor',
	'modules/MTQBankEditor/MTQBankEditor',
	'modules/MtqSubQuestionEditor/MtqSubQuestionEditor',
    'modules/MtqSubAnswerEditor/MtqSubAnswerEditor',
    'modules/MtqMultiSubAnswerEditor/MtqMultiSubAnswerEditor',
    'modules/DefinitionEditor/DefinitionEditor',
    'modules/MathfieldEditor/MathfieldEditor',
    'modules/AnswerFieldTypeMathfieldEditor/AnswerFieldTypeMathfieldEditor',
    'modules/TableEditor/TableEditor',
    'modules/TableRowEditor/TableRowEditor',
    'modules/TableCellEditor/TableCellEditor',
	'modules/AnswerFieldTypeTextEditor/AnswerFieldTypeTextEditor',
    'modules/MathfieldEditorEditor/MathfieldEditorEditor',
    'modules/AnswerLinkingEditor/AnswerLinkingEditor',
    'modules/LinkingPairEditor/LinkingPairEditor',
    'modules/LinkingAreaEditor/LinkingAreaEditor',
    'modules/LinkingSubAnswerEditor/LinkingSubAnswerEditor',
    'modules/DistructorsEditor/DistructorsEditor',
    'modules/styleAndEffectEditor/styleAndEffectEditor',

    /* pdf layout editors */
    'modules/LivePageElementEditor/LivePageElementEditor',
    'modules/LivePageTextViewerWrapperEditor/LivePageTextViewerWrapperEditor',
    'modules/LivePageImageViewerEditor/LivePageImageViewerEditor',
    'modules/LivePageSoundButtonEditor/LivePageSoundButtonEditor',
    'modules/LivePageAudioPlayerEditor/LivePageAudioPlayerEditor',
    'modules/LivePageVideoPlayerEditor/LivePageVideoPlayerEditor',
    'modules/LivePageAppletWrapperEditor/LivePageAppletWrapperEditor',
    'modules/LivePageMultimediaEditor/LivePageMultimediaEditor',
    'modules/LivePageQuestionOnlyEditor/LivePageQuestionOnlyEditor',
    'modules/LivePageAppletTaskEditor/LivePageAppletTaskEditor',
	
	/* overlay editors */
	'modules/OverlayElementEditor/OverlayElementEditor',
	'modules/OverlayLinkEditor/OverlayLinkEditor',
	'modules/OverlayImageEditor/OverlayImageEditor',
	'modules/OverlayAudioEditor/OverlayAudioEditor',
	'modules/OverlayVideoEditor/OverlayVideoEditor',
	'modules/OverlaySequenceEditor/OverlaySequenceEditor',
	
    /*task template - for task bar*/
    "modules/QuestionOnlyEditor/TaskTemplate",
    "modules/MCEditor/TaskTemplate",
    "modules/FreeWritingEditor/TaskTemplate",
    "modules/ShortAnswerEditor/TaskTemplate",
    
    "modules/ClozeTextViewerEditor/ClozeTextViewerEditor",
    "modules/ClozeEditor/ClozeEditor",
    "modules/ClozeAnswerEditor/ClozeAnswerEditor",
    "modules/ClozeBankEditor/ClozeBankEditor",

    "modules/URLSequenceEditor/URLSequenceEditor",
    //Imported Editor
    "modules/ConvertEditors/ConvertEditors",
    "modules/ConvertEditors/ConvertNarrativeEditor/ConvertNarrativeEditor",
    "modules/ConvertEditors/ConvertQuestionOnlyEditor/ConvertQuestionOnlyEditor",
    "modules/ConvertEditors/ConvertPedagogicalStatementEditor/ConvertPedagogicalStatementEditor",
    "modules/ConvertEditors/ConvertMultipleChoiceEditor/ConvertMultipleChoiceEditor",
    "modules/ConvertEditors/ConvertMCAnswerEditor/ConvertMCAnswerEditor",
    "modules/ConvertEditors/ConvertFreeWritingEditor/ConvertFreeWritingEditor",
    "modules/ConvertEditors/ConvertSelfCheckEditor/ConvertSelfCheckEditor",
	"modules/ConvertEditors/ConvertHeaderEditor/ConvertHeaderEditor",

    //plugin
    "modules/LoEditor/config",
    "modules/SequenceEditor/config",
    "modules/QuestionEditor/config",
    "modules/PluginHiddenEditor/config",

  	"modules/PluginEditor/PluginContentEditor",
  	"modules/PluginEditor/PluginTaskEditor",
  	"modules/PluginEditor/PluginExternalEditor",
  	"modules/PluginEditor/PluginHiddenEditor"

], {loaded: true});