var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.gwtApp;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.8.2";
var $strongName = '77797B19BA618D5E2EB9B301FB92FA69';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 'object', $intern_1 = 'function', $intern_2 = 'java.lang', $intern_3 = 'com.cherentsov.mapfront.client', $intern_4 = {102:1, 27:1}, $intern_5 = 'serverResponseLabelError', $intern_6 = 'application/json', $intern_7 = 'org.fusesource.restygwt.client', $intern_8 = 'com.cherentsov.mapfront.shared', $intern_9 = {3:1}, $intern_10 = 3.141592653589793, $intern_11 = 'overflow', $intern_12 = 'com.google.gwt.animation.client', $intern_13 = 'com.google.gwt.user.client', $intern_14 = 'com.google.gwt.core.client', $intern_15 = '__noinit__', $intern_16 = '__java$exception', $intern_17 = {3:1, 4:1}, $intern_18 = 'com.google.gwt.core.client.impl', $intern_19 = 'null', $intern_20 = 'CSS1Compat', $intern_21 = {7:1, 12:1, 3:1, 6:1, 5:1}, $intern_22 = 'com.google.gwt.dom.client', $intern_23 = {12:1, 21:1, 3:1, 6:1, 5:1}, $intern_24 = {17:1, 3:1, 6:1, 5:1}, $intern_25 = 'com.google.web.bindery.event.shared', $intern_26 = 'com.google.gwt.event.shared', $intern_27 = 'com.google.gwt.event.dom.client', $intern_28 = 'com.google.gwt.event.logical.shared', $intern_29 = {35:1, 3:1, 4:1}, $intern_30 = 'UmbrellaException', $intern_31 = 'com.google.gwt.http.client', $intern_32 = 'Content-Type', $intern_33 = {26:1, 3:1, 4:1}, $intern_34 = 'com.google.gwt.json.client', $intern_35 = 'Error parsing JSON: ', $intern_36 = 4194303, $intern_37 = 17592186044416, $intern_38 = 4194304, $intern_39 = 524288, $intern_40 = 'com.google.gwt.text.shared.testing', $intern_41 = 65536, $intern_42 = 1048576, $intern_43 = 16777216, $intern_44 = 33554432, $intern_45 = 67108864, $intern_46 = 'com.google.gwt.user.client.impl', $intern_47 = 'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.', $intern_48 = 'Style names cannot be empty', $intern_49 = 'com.google.gwt.user.client.ui', $intern_50 = {15:1, 11:1, 14:1, 13:1, 16:1, 10:1, 8:1}, $intern_51 = 'left', $intern_52 = 'position', $intern_53 = 'visibility', $intern_54 = '0.0px', $intern_55 = 'offsetWidth', $intern_56 = 'offsetHeight', $intern_57 = 'clip', $intern_58 = 'rect(0px, 0px, 0px, 0px)', $intern_59 = 'visible', $intern_60 = 'cellSpacing', $intern_61 = 'cellPadding', $intern_62 = 'popupContent', $intern_63 = {235:1, 27:1}, $intern_64 = {15:1, 11:1, 14:1, 13:1, 16:1, 43:1, 10:1, 8:1}, $intern_65 = {20:1, 3:1, 6:1, 5:1}, $intern_66 = 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie9) does not match the runtime user.agent value (', $intern_67 = ').\n', $intern_68 = 'Expect more errors.', $intern_69 = 'java.util', $intern_70 = {22:1}, $intern_71 = 'delete', $intern_72 = 'java.util.logging', $intern_73 = {3:1, 234:1}, $intern_74 = 'Index: ', $intern_75 = ', Size: ';
var _, com_google_gwt_lang_Runtime_prototypesByTypeId, com_google_gwt_lang_ModuleUtils_initFnList, com_google_gwt_lang_CollapsedPropertyHolder_permutationId = -1;
function com_google_gwt_lang_ModuleUtils_setGwtProperty__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V(propertyName, propertyValue){
  typeof window === $intern_0 && typeof window['$gwt'] === $intern_0 && (window['$gwt'][propertyName] = propertyValue);
}

function com_google_gwt_lang_ModuleUtils_gwtOnLoad__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(errFn, modName, modBase, softPermutationId){
  com_google_gwt_lang_ModuleUtils_ensureModuleInit__V();
  var initFnList = com_google_gwt_lang_ModuleUtils_initFnList;
  $moduleName = modName;
  $moduleBase = modBase;
  com_google_gwt_lang_CollapsedPropertyHolder_permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function com_google_gwt_lang_ModuleUtils_ensureModuleInit__V(){
  com_google_gwt_lang_ModuleUtils_initFnList == null && (com_google_gwt_lang_ModuleUtils_initFnList = []);
}

function com_google_gwt_lang_ModuleUtils_addInitFunctions__V(){
  com_google_gwt_lang_ModuleUtils_ensureModuleInit__V();
  var initFnList = com_google_gwt_lang_ModuleUtils_initFnList;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function com_google_gwt_lang_Runtime_typeMarkerFn__V(){
}

function com_google_gwt_lang_Runtime_toString__Ljava_lang_Object_2Ljava_lang_String_2(object){
  var java_lang_Object_toString__Ljava_lang_Object_2Ljava_lang_String_2_number_0;
  if (Array.isArray(object) && object.java_lang_Object_typeMarker === com_google_gwt_lang_Runtime_typeMarkerFn__V) {
    return java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(object)) + '@' + (java_lang_Object_toString__Ljava_lang_Object_2Ljava_lang_String_2_number_0 = java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(object) >>> 0 , java_lang_Object_toString__Ljava_lang_Object_2Ljava_lang_String_2_number_0.toString(16));
  }
  return object.toString();
}

function com_google_gwt_lang_Runtime_portableObjCreate__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function com_google_gwt_lang_Runtime_emptyMethod__V(){
}

function com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = com_google_gwt_lang_Runtime_prototypesByTypeId, com_google_gwt_lang_Runtime_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2_superPrototype_0;
  var prototype = prototypesByTypeId[typeId];
  var clazz = prototype instanceof Array?prototype[0]:null;
  if (prototype && !clazz) {
    _ = prototype;
  }
   else {
    _ = (com_google_gwt_lang_Runtime_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2_superPrototype_0 = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype , !com_google_gwt_lang_Runtime_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2_superPrototype_0 && (com_google_gwt_lang_Runtime_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2_superPrototype_0 = com_google_gwt_lang_Runtime_prototypesByTypeId[superTypeIdOrPrototype]) , com_google_gwt_lang_Runtime_portableObjCreate__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(com_google_gwt_lang_Runtime_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2_superPrototype_0));
    _.java_lang_Object_castableTypeMap = castableTypeMap;
    !superTypeIdOrPrototype && (_.java_lang_Object_typeMarker = com_google_gwt_lang_Runtime_typeMarkerFn__V);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.java_lang_Object__1_1_1clazz = clazz);
}

function com_google_gwt_lang_Runtime_bootstrap__V(){
  com_google_gwt_lang_Runtime_prototypesByTypeId = {};
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
  function now_0(){
    return (new Date).getTime();
  }

  !Date.now && (Date.now = now_0);
}

com_google_gwt_lang_Runtime_bootstrap__V();
function java_lang_Object_Object__V(){
}

function java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(this$static, other){
  return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(this$static)?java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static, other):com_google_gwt_lang_Cast_instanceOfDouble__Ljava_lang_Object_2Z(this$static)?(javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static) , this$static === other):com_google_gwt_lang_Cast_instanceOfBoolean__Ljava_lang_Object_2Z(this$static)?(javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static) , this$static === other):com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(this$static)?this$static.equals__Ljava_lang_Object_2Z(other):com_google_gwt_lang_Array_isJavaArray__Ljava_lang_Object_2Z(this$static)?this$static === other:com_google_gwt_core_client_JavaScriptObject_$equals__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2Z(this$static, other);
}

function java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(this$static){
  return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(this$static)?com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit:com_google_gwt_lang_Cast_instanceOfDouble__Ljava_lang_Object_2Z(this$static)?com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Double_12_1classLit:com_google_gwt_lang_Cast_instanceOfBoolean__Ljava_lang_Object_2Z(this$static)?com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Boolean_12_1classLit:com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(this$static)?this$static.java_lang_Object__1_1_1clazz:com_google_gwt_lang_Array_isJavaArray__Ljava_lang_Object_2Z(this$static)?this$static.java_lang_Object__1_1_1clazz:this$static.java_lang_Object__1_1_1clazz || Array.isArray(this$static) && com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptObject_12_1classLit, 1) || com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptObject_12_1classLit;
}

function java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(this$static){
  return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(this$static)?javaemul_internal_StringHashCache_getHashCode__Ljava_lang_String_2I(this$static):com_google_gwt_lang_Cast_instanceOfDouble__Ljava_lang_Object_2Z(this$static)?java_lang_Double_$hashCode__Ljava_lang_Double_2I(this$static):com_google_gwt_lang_Cast_instanceOfBoolean__Ljava_lang_Object_2Z(this$static)?(javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static) , this$static)?1231:1237:com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(this$static)?this$static.hashCode__I():com_google_gwt_lang_Array_isJavaArray__Ljava_lang_Object_2Z(this$static)?javaemul_internal_ObjectHashing_getHashCode__Ljava_lang_Object_2I(this$static):com_google_gwt_core_client_JavaScriptObject_$hashCode__Lcom_google_gwt_core_client_JavaScriptObject_2I(this$static);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(1, null, {}, java_lang_Object_Object__V);
_.equals__Ljava_lang_Object_2Z = function java_lang_Object_equals__Ljava_lang_Object_2Z(other){
  return this === other;
}
;
_.getClass__Ljava_lang_Class_2 = function java_lang_Object_getClass__Ljava_lang_Class_2(){
  return this.java_lang_Object__1_1_1clazz;
}
;
_.hashCode__I = function java_lang_Object_hashCode__I(){
  return javaemul_internal_ObjectHashing_getHashCode__Ljava_lang_Object_2I(this);
}
;
_.toString__Ljava_lang_String_2 = function java_lang_Object_toString__Ljava_lang_String_2(){
  var number;
  return java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(this)) + '@' + (number = java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(this) >>> 0 , number.toString(16));
}
;
_.equals = function(other){
  return this.equals__Ljava_lang_Object_2Z(other);
}
;
_.hashCode = function(){
  return this.hashCode__I();
}
;
_.toString = function(){
  return this.toString__Ljava_lang_String_2();
}
;
function com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId){
  if (com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(src_0)) {
    return !!com_google_gwt_lang_Cast_stringCastMap[dstId];
  }
   else if (src_0.java_lang_Object_castableTypeMap) {
    return !!src_0.java_lang_Object_castableTypeMap[dstId];
  }
   else if (com_google_gwt_lang_Cast_instanceOfDouble__Ljava_lang_Object_2Z(src_0)) {
    return !!com_google_gwt_lang_Cast_doubleCastMap[dstId];
  }
   else if (com_google_gwt_lang_Cast_instanceOfBoolean__Ljava_lang_Object_2Z(src_0)) {
    return !!com_google_gwt_lang_Cast_booleanCastMap[dstId];
  }
  return false;
}

function com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(src_0, dstId){
  javaemul_internal_InternalPreconditions_checkCriticalType__ZLjava_lang_String_2V(src_0 == null || com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId));
  return src_0;
}

function com_google_gwt_lang_Cast_castToJso__Ljava_lang_Object_2Ljava_lang_Object_2(src_0){
  javaemul_internal_InternalPreconditions_checkCriticalType__ZLjava_lang_String_2V(src_0 == null || com_google_gwt_lang_Cast_isJsObjectOrFunction__Ljava_lang_Object_2Z(src_0) && !(src_0.java_lang_Object_typeMarker === com_google_gwt_lang_Runtime_typeMarkerFn__V));
  return src_0;
}

function com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(src_0){
  javaemul_internal_InternalPreconditions_checkCriticalType__ZLjava_lang_String_2V(src_0 == null || com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(src_0));
  return src_0;
}

function com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(src_0){
  return !Array.isArray(src_0) && src_0.java_lang_Object_typeMarker === com_google_gwt_lang_Runtime_typeMarkerFn__V;
}

function com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId){
  return src_0 != null && com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId);
}

function com_google_gwt_lang_Cast_instanceOfBoolean__Ljava_lang_Object_2Z(src_0){
  return typeof src_0 === 'boolean';
}

function com_google_gwt_lang_Cast_instanceOfDouble__Ljava_lang_Object_2Z(src_0){
  return typeof src_0 === 'number';
}

function com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(src_0){
  return src_0 != null && com_google_gwt_lang_Cast_isJsObjectOrFunction__Ljava_lang_Object_2Z(src_0) && !(src_0.java_lang_Object_typeMarker === com_google_gwt_lang_Runtime_typeMarkerFn__V);
}

function com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(src_0){
  return typeof src_0 === 'string';
}

function com_google_gwt_lang_Cast_isJsObjectOrFunction__Ljava_lang_Object_2Z(src_0){
  return typeof src_0 === $intern_0 || typeof src_0 === $intern_1;
}

function com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(src_0){
  return src_0 == null?null:src_0;
}

function com_google_gwt_lang_Cast_round_1int__DI(x_0){
  return Math.max(Math.min(x_0, 2147483647), -2147483648) | 0;
}

var com_google_gwt_lang_Cast_booleanCastMap, com_google_gwt_lang_Cast_doubleCastMap, com_google_gwt_lang_Cast_stringCastMap;
function java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this$static){
  if (this$static.java_lang_Class_typeName != null) {
    return;
  }
  java_lang_Class_initializeNames__Ljava_lang_Class_2V(this$static);
}

function java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this$static){
  java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this$static);
  return this$static.java_lang_Class_typeName;
}

function java_lang_Class_Class__V(){
  ++java_lang_Class_nextSequentialId;
  this.java_lang_Class_typeName = null;
  this.java_lang_Class_simpleName = null;
  this.java_lang_Class_packageName = null;
  this.java_lang_Class_compoundName = null;
  this.java_lang_Class_canonicalName = null;
  this.java_lang_Class_typeId = null;
  this.java_lang_Class_arrayLiterals = null;
}

function java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName){
  var clazz;
  clazz = new java_lang_Class_Class__V;
  clazz.java_lang_Class_packageName = packageName;
  clazz.java_lang_Class_compoundName = compoundClassName;
  return clazz;
}

function java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2(packageName, compoundClassName, typeId){
  var clazz;
  clazz = java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName);
  java_lang_Class_maybeSetClassLiteral__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2V(typeId, clazz);
  return clazz;
}

function java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName);
  java_lang_Class_maybeSetClassLiteral__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2V(typeId, clazz);
  clazz.java_lang_Class_modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function java_lang_Class_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(leafClass, dimensions){
  var arrayLiterals = leafClass.java_lang_Class_arrayLiterals = leafClass.java_lang_Class_arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.private$java_lang_Class$createClassLiteralForArray__ILjava_lang_Class_2(dimensions));
}

function java_lang_Class_getPrototypeForClass__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2(clazz){
  if (clazz.isPrimitive__Z()) {
    return null;
  }
  var typeId = clazz.java_lang_Class_typeId;
  return com_google_gwt_lang_Runtime_prototypesByTypeId[typeId];
}

function java_lang_Class_initializeNames__Ljava_lang_Class_2V(clazz){
  if (clazz.isArray__Z()) {
    var componentType = clazz.java_lang_Class_componentType;
    componentType.isPrimitive__Z()?(clazz.java_lang_Class_typeName = '[' + componentType.java_lang_Class_typeId):!componentType.isArray__Z()?(clazz.java_lang_Class_typeName = '[L' + componentType.getName__Ljava_lang_String_2() + ';'):(clazz.java_lang_Class_typeName = '[' + componentType.getName__Ljava_lang_String_2());
    clazz.java_lang_Class_canonicalName = componentType.getCanonicalName__Ljava_lang_String_2() + '[]';
    clazz.java_lang_Class_simpleName = componentType.getSimpleName__Ljava_lang_String_2() + '[]';
    return;
  }
  var packageName = clazz.java_lang_Class_packageName;
  var compoundName = clazz.java_lang_Class_compoundName;
  compoundName = compoundName.split('/');
  clazz.java_lang_Class_typeName = java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('.', [packageName, java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('$', compoundName)]);
  clazz.java_lang_Class_canonicalName = java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('.', [packageName, java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('.', compoundName)]);
  clazz.java_lang_Class_simpleName = compoundName[compoundName.length - 1];
}

function java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function java_lang_Class_maybeSetClassLiteral__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2V(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.java_lang_Class_typeId = typeId;
  var prototype = java_lang_Class_getPrototypeForClass__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2(clazz);
  if (!prototype) {
    com_google_gwt_lang_Runtime_prototypesByTypeId[typeId] = [clazz];
    return;
  }
  prototype.java_lang_Object__1_1_1clazz = clazz;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(75, 1, {}, java_lang_Class_Class__V);
_.private$java_lang_Class$createClassLiteralForArray__ILjava_lang_Class_2 = function java_lang_Class_createClassLiteralForArray__ILjava_lang_Class_2(dimensions){
  var clazz;
  clazz = new java_lang_Class_Class__V;
  clazz.java_lang_Class_modifiers = 4;
  dimensions > 1?(clazz.java_lang_Class_componentType = java_lang_Class_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(this, dimensions - 1)):(clazz.java_lang_Class_componentType = this);
  return clazz;
}
;
_.getCanonicalName__Ljava_lang_String_2 = function java_lang_Class_getCanonicalName__Ljava_lang_String_2(){
  java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this);
  return this.java_lang_Class_canonicalName;
}
;
_.getName__Ljava_lang_String_2 = function java_lang_Class_getName__Ljava_lang_String_2(){
  return java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this);
}
;
_.getSimpleName__Ljava_lang_String_2 = function java_lang_Class_getSimpleName__Ljava_lang_String_2(){
  java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this);
  return this.java_lang_Class_simpleName;
}
;
_.isArray__Z = function java_lang_Class_isArray__Z(){
  return (this.java_lang_Class_modifiers & 4) != 0;
}
;
_.isPrimitive__Z = function java_lang_Class_isPrimitive__Z(){
  return (this.java_lang_Class_modifiers & 1) != 0;
}
;
_.toString__Ljava_lang_String_2 = function java_lang_Class_toString__Ljava_lang_String_2(){
  return ((this.java_lang_Class_modifiers & 2) != 0?'interface ':(this.java_lang_Class_modifiers & 1) != 0?'':'class ') + (java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this) , this.java_lang_Class_typeName);
}
;
_.java_lang_Class_modifiers = 0;
var java_lang_Class_nextSequentialId = 1;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Object', 1);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Class_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Class', 75);
function com_cherentsov_mapfront_client_GTWClient_$onModuleLoad__Lcom_cherentsov_mapfront_client_GTWClient_2V(this$static){
  var usernameLabel;
  com_google_gwt_user_client_ui_Label_$setText__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2V(this$static.com_cherentsov_mapfront_client_GTWClient_helloLabel, 'GwtApp Application hello world');
  usernameLabel = new com_google_gwt_user_client_ui_Label_Label__V;
  com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(usernameLabel.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper, 'Username: ', false);
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2('helloId'), this$static.com_cherentsov_mapfront_client_GTWClient_helloLabel);
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2('usernameLabelId'), usernameLabel);
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2('usernameId'), this$static.com_cherentsov_mapfront_client_GTWClient_nameField);
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2('confirmButtonId'), this$static.com_cherentsov_mapfront_client_GTWClient_confirmButton);
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2('errorLabelContainer'), this$static.com_cherentsov_mapfront_client_GTWClient_errorLabel);
  com_google_gwt_user_client_ui_DialogBox_$setText__Lcom_google_gwt_user_client_ui_DialogBox_2Ljava_lang_String_2V(this$static.com_cherentsov_mapfront_client_GTWClient_dialogBox, 'Remote procedure call from server');
  this$static.com_cherentsov_mapfront_client_GTWClient_dialogBox.com_google_gwt_user_client_ui_PopupPanel_isAnimationEnabled = true;
  com_google_gwt_user_client_ui_UIObject_$getElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2(this$static.com_cherentsov_mapfront_client_GTWClient_closeButton).id = 'closeButtonId';
  com_google_gwt_user_client_ui_UIObject_$addStyleName__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2V(this$static.com_cherentsov_mapfront_client_GTWClient_dialogVPanel, 'dialogVPanel');
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_cherentsov_mapfront_client_GTWClient_dialogVPanel, new com_google_gwt_user_client_ui_HTML_HTML__Ljava_lang_String_2V('<b>\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u043F\u043E\u043B\u044F \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440:<\/b>'));
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_cherentsov_mapfront_client_GTWClient_dialogVPanel, this$static.com_cherentsov_mapfront_client_GTWClient_sendToServerLabel);
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_cherentsov_mapfront_client_GTWClient_dialogVPanel, new com_google_gwt_user_client_ui_HTML_HTML__Ljava_lang_String_2V('<br><b>\u041E\u0442\u0432\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430:<\/b>'));
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_cherentsov_mapfront_client_GTWClient_dialogVPanel, this$static.com_cherentsov_mapfront_client_GTWClient_serverResponseHtml);
  com_google_gwt_user_client_ui_VerticalPanel_$setHorizontalAlignment__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2V(this$static.com_cherentsov_mapfront_client_GTWClient_dialogVPanel, (com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1RIGHT));
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_cherentsov_mapfront_client_GTWClient_dialogVPanel, this$static.com_cherentsov_mapfront_client_GTWClient_closeButton);
  com_google_gwt_user_client_ui_DecoratedPopupPanel_$setWidget__Lcom_google_gwt_user_client_ui_DecoratedPopupPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_cherentsov_mapfront_client_GTWClient_dialogBox, this$static.com_cherentsov_mapfront_client_GTWClient_dialogVPanel);
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static.com_cherentsov_mapfront_client_GTWClient_confirmButton, new com_cherentsov_mapfront_client_GTWClient$1_GTWClient$1__Lcom_cherentsov_mapfront_client_GTWClient_2V(this$static), (com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_TYPE));
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static.com_cherentsov_mapfront_client_GTWClient_nameField, new com_cherentsov_mapfront_client_GTWClient$2_GTWClient$2__Lcom_cherentsov_mapfront_client_GTWClient_2V(this$static), (com_google_gwt_event_dom_client_KeyUpEvent_$clinit__V() , com_google_gwt_event_dom_client_KeyUpEvent_$clinit__V() , com_google_gwt_event_dom_client_KeyUpEvent_TYPE));
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static.com_cherentsov_mapfront_client_GTWClient_closeButton, new com_cherentsov_mapfront_client_GTWClient$3_GTWClient$3__Lcom_cherentsov_mapfront_client_GTWClient_2V(this$static), (null , com_google_gwt_event_dom_client_ClickEvent_TYPE));
}

function com_cherentsov_mapfront_client_GTWClient_$sendInfoToServer__Lcom_cherentsov_mapfront_client_GTWClient_2V(this$static){
  var nameToServer;
  com_google_gwt_user_client_ui_Label_$setText__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2V(this$static.com_cherentsov_mapfront_client_GTWClient_errorLabel, '');
  nameToServer = com_google_gwt_user_client_ui_ValueBoxBase_$getText__Lcom_google_gwt_user_client_ui_ValueBoxBase_2Ljava_lang_String_2(this$static.com_cherentsov_mapfront_client_GTWClient_nameField);
  com_google_gwt_user_client_ui_Label_$setText__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2V(this$static.com_cherentsov_mapfront_client_GTWClient_sendToServerLabel, nameToServer);
  com_google_gwt_user_client_ui_FocusWidget_$setEnabled__Lcom_google_gwt_user_client_ui_FocusWidget_2ZV(this$static.com_cherentsov_mapfront_client_GTWClient_confirmButton, false);
  com_google_gwt_user_client_ui_Label_$setText__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2V(this$static.com_cherentsov_mapfront_client_GTWClient_serverResponseHtml, '');
  com_cherentsov_mapfront_client_GwtServiceIntf_1Generated_1RestServiceProxy_1_$gwtCallServer__Lcom_cherentsov_mapfront_client_GwtServiceIntf_1Generated_1RestServiceProxy_1_2Lcom_cherentsov_mapfront_shared_UIContent_2Lorg_fusesource_restygwt_client_MethodCallback_2V(this$static.com_cherentsov_mapfront_client_GTWClient_gwtAppService, new com_cherentsov_mapfront_shared_UIContent_UIContent__Ljava_lang_String_2Ljava_lang_String_2V, new com_cherentsov_mapfront_client_GTWClient$4_GTWClient$4__Lcom_cherentsov_mapfront_client_GTWClient_2V(this$static));
}

function com_cherentsov_mapfront_client_GTWClient_GTWClient__V(){
  this.com_cherentsov_mapfront_client_GTWClient_confirmButton = new com_google_gwt_user_client_ui_Button_Button__Ljava_lang_String_2V('Confirm');
  this.com_cherentsov_mapfront_client_GTWClient_nameField = new com_google_gwt_user_client_ui_TextBox_TextBox__V;
  this.com_cherentsov_mapfront_client_GTWClient_errorLabel = new com_google_gwt_user_client_ui_Label_Label__V;
  this.com_cherentsov_mapfront_client_GTWClient_helloLabel = new com_google_gwt_user_client_ui_Label_Label__V;
  this.com_cherentsov_mapfront_client_GTWClient_dialogVPanel = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V;
  this.com_cherentsov_mapfront_client_GTWClient_dialogBox = new com_google_gwt_user_client_ui_DialogBox_DialogBox__V;
  this.com_cherentsov_mapfront_client_GTWClient_serverResponseHtml = new com_google_gwt_user_client_ui_HTML_HTML__V;
  this.com_cherentsov_mapfront_client_GTWClient_sendToServerLabel = new com_google_gwt_user_client_ui_Label_Label__V;
  this.com_cherentsov_mapfront_client_GTWClient_closeButton = new com_google_gwt_user_client_ui_Button_Button__Ljava_lang_String_2V('Close');
  this.com_cherentsov_mapfront_client_GTWClient_gwtAppService = new com_cherentsov_mapfront_client_GwtServiceIntf_1Generated_1RestServiceProxy_1_GwtServiceIntf_1Generated_1RestServiceProxy_1__V;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(91, 1, {}, com_cherentsov_mapfront_client_GTWClient_GTWClient__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1cherentsov_1mapfront_1client_1GTWClient_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'GTWClient', 91);
function com_cherentsov_mapfront_client_GTWClient$1_GTWClient$1__Lcom_cherentsov_mapfront_client_GTWClient_2V(this$0){
  this.com_cherentsov_mapfront_client_GTWClient$1_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(97, 1, $intern_4, com_cherentsov_mapfront_client_GTWClient$1_GTWClient$1__Lcom_cherentsov_mapfront_client_GTWClient_2V);
_.onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V = function com_cherentsov_mapfront_client_GTWClient$1_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V(event_0){
  com_google_gwt_user_client_ui_FocusWidget_$setEnabled__Lcom_google_gwt_user_client_ui_FocusWidget_2ZV(this.com_cherentsov_mapfront_client_GTWClient$1_this$01.com_cherentsov_mapfront_client_GTWClient_confirmButton, false);
  com_cherentsov_mapfront_client_GTWClient_$sendInfoToServer__Lcom_cherentsov_mapfront_client_GTWClient_2V(this.com_cherentsov_mapfront_client_GTWClient$1_this$01);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1cherentsov_1mapfront_1client_1GTWClient$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'GTWClient/1', 97);
function com_cherentsov_mapfront_client_GTWClient$2_GTWClient$2__Lcom_cherentsov_mapfront_client_GTWClient_2V(this$0){
  this.com_cherentsov_mapfront_client_GTWClient$2_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(98, 1, {238:1, 27:1}, com_cherentsov_mapfront_client_GTWClient$2_GTWClient$2__Lcom_cherentsov_mapfront_client_GTWClient_2V);
_.onKeyUp__Lcom_google_gwt_event_dom_client_KeyUpEvent_2V = function com_cherentsov_mapfront_client_GTWClient$2_onKeyUp__Lcom_google_gwt_event_dom_client_KeyUpEvent_2V(event_0){
  (event_0.com_google_gwt_event_dom_client_DomEvent_nativeEvent.keyCode | 0) == 13 && com_cherentsov_mapfront_client_GTWClient_$sendInfoToServer__Lcom_cherentsov_mapfront_client_GTWClient_2V(this.com_cherentsov_mapfront_client_GTWClient$2_this$01);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1cherentsov_1mapfront_1client_1GTWClient$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'GTWClient/2', 98);
function com_cherentsov_mapfront_client_GTWClient$3_GTWClient$3__Lcom_cherentsov_mapfront_client_GTWClient_2V(this$0){
  this.com_cherentsov_mapfront_client_GTWClient$3_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(99, 1, $intern_4, com_cherentsov_mapfront_client_GTWClient$3_GTWClient$3__Lcom_cherentsov_mapfront_client_GTWClient_2V);
_.onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V = function com_cherentsov_mapfront_client_GTWClient$3_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V(event_0){
  com_google_gwt_user_client_ui_DialogBox_$hide__Lcom_google_gwt_user_client_ui_DialogBox_2ZV(this.com_cherentsov_mapfront_client_GTWClient$3_this$01.com_cherentsov_mapfront_client_GTWClient_dialogBox, false);
  com_google_gwt_user_client_ui_FocusWidget_$setEnabled__Lcom_google_gwt_user_client_ui_FocusWidget_2ZV(this.com_cherentsov_mapfront_client_GTWClient$3_this$01.com_cherentsov_mapfront_client_GTWClient_confirmButton, true);
  com_google_gwt_user_client_ui_FocusWidget_$setFocus__Lcom_google_gwt_user_client_ui_FocusWidget_2ZV(this.com_cherentsov_mapfront_client_GTWClient$3_this$01.com_cherentsov_mapfront_client_GTWClient_confirmButton);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1cherentsov_1mapfront_1client_1GTWClient$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'GTWClient/3', 99);
function com_cherentsov_mapfront_client_GTWClient$4_$onFailure__Lcom_cherentsov_mapfront_client_GTWClient$4_2Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Throwable_2V(this$static, method){
  var headers, statusCode;
  com_google_gwt_user_client_ui_DialogBox_$setText__Lcom_google_gwt_user_client_ui_DialogBox_2Ljava_lang_String_2V(this$static.com_cherentsov_mapfront_client_GTWClient$4_this$01.com_cherentsov_mapfront_client_GTWClient_dialogBox, 'Remote Procedure Call - Failure');
  com_google_gwt_user_client_ui_UIObject_$addStyleName__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2V(this$static.com_cherentsov_mapfront_client_GTWClient$4_this$01.com_cherentsov_mapfront_client_GTWClient_serverResponseHtml, $intern_5);
  com_google_gwt_user_client_ui_HTML_$setHTML__Lcom_google_gwt_user_client_ui_HTML_2Ljava_lang_String_2V(this$static.com_cherentsov_mapfront_client_GTWClient$4_this$01.com_cherentsov_mapfront_client_GTWClient_serverResponseHtml, (statusCode = method.org_fusesource_restygwt_client_Method_response.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest.status , ' ' + (statusCode == 1223?204:statusCode) + ' ____ ' + (headers = method.org_fusesource_restygwt_client_Method_response.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest.getAllResponseHeaders() , headers != null?headers:'') + ' ____ ' + method.org_fusesource_restygwt_client_Method_response.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest.responseText));
  com_google_gwt_user_client_ui_PopupPanel_$center__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this$static.com_cherentsov_mapfront_client_GTWClient$4_this$01.com_cherentsov_mapfront_client_GTWClient_dialogBox);
  com_google_gwt_user_client_ui_FocusWidget_$setFocus__Lcom_google_gwt_user_client_ui_FocusWidget_2ZV(this$static.com_cherentsov_mapfront_client_GTWClient$4_this$01.com_cherentsov_mapfront_client_GTWClient_closeButton);
}

function com_cherentsov_mapfront_client_GTWClient$4_$onSuccess__Lcom_cherentsov_mapfront_client_GTWClient$4_2Lorg_fusesource_restygwt_client_Method_2Lcom_cherentsov_mapfront_shared_ResponceState_2V(this$static, result){
  com_google_gwt_user_client_ui_DialogBox_$setText__Lcom_google_gwt_user_client_ui_DialogBox_2Ljava_lang_String_2V(this$static.com_cherentsov_mapfront_client_GTWClient$4_this$01.com_cherentsov_mapfront_client_GTWClient_dialogBox, 'Remote Procedure Call');
  com_google_gwt_user_client_ui_UIObject_$setStyleName__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2ZV(this$static.com_cherentsov_mapfront_client_GTWClient$4_this$01.com_cherentsov_mapfront_client_GTWClient_serverResponseHtml);
  com_google_gwt_user_client_ui_HTML_$setHTML__Lcom_google_gwt_user_client_ui_HTML_2Ljava_lang_String_2V(this$static.com_cherentsov_mapfront_client_GTWClient$4_this$01.com_cherentsov_mapfront_client_GTWClient_serverResponseHtml, result.com_cherentsov_mapfront_shared_ResponceState_bank[0]);
  com_google_gwt_user_client_ui_PopupPanel_$center__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this$static.com_cherentsov_mapfront_client_GTWClient$4_this$01.com_cherentsov_mapfront_client_GTWClient_dialogBox);
  com_google_gwt_user_client_ui_FocusWidget_$setFocus__Lcom_google_gwt_user_client_ui_FocusWidget_2ZV(this$static.com_cherentsov_mapfront_client_GTWClient$4_this$01.com_cherentsov_mapfront_client_GTWClient_closeButton);
}

function com_cherentsov_mapfront_client_GTWClient$4_GTWClient$4__Lcom_cherentsov_mapfront_client_GTWClient_2V(this$0){
  this.com_cherentsov_mapfront_client_GTWClient$4_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(101, 1, {}, com_cherentsov_mapfront_client_GTWClient$4_GTWClient$4__Lcom_cherentsov_mapfront_client_GTWClient_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1cherentsov_1mapfront_1client_1GTWClient$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'GTWClient/4', 101);
function com_cherentsov_mapfront_client_GwtServiceIntf_1Generated_1RestServiceProxy_1_$getResource__Lcom_cherentsov_mapfront_client_GwtServiceIntf_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Resource_2(this$static){
  var serviceRoot;
  if (!this$static.com_cherentsov_mapfront_client_GwtServiceIntf_1Generated_1RestServiceProxy_1_resource) {
    serviceRoot = (org_fusesource_restygwt_client_Defaults_$clinit__V() , org_fusesource_restygwt_client_Defaults_$clinit__V() , org_fusesource_restygwt_client_Defaults_serviceRoot);
    this$static.com_cherentsov_mapfront_client_GwtServiceIntf_1Generated_1RestServiceProxy_1_resource = new org_fusesource_restygwt_client_Resource_Resource__Ljava_lang_String_2V(serviceRoot);
  }
  return this$static.com_cherentsov_mapfront_client_GwtServiceIntf_1Generated_1RestServiceProxy_1_resource;
}

function com_cherentsov_mapfront_client_GwtServiceIntf_1Generated_1RestServiceProxy_1_$gwtCallServer__Lcom_cherentsov_mapfront_client_GwtServiceIntf_1Generated_1RestServiceProxy_1_2Lcom_cherentsov_mapfront_shared_UIContent_2Lorg_fusesource_restygwt_client_MethodCallback_2V(this$static, data_0, callback){
  var __method, com_cherentsov_mapfront_shared_UIContent_1Generated_1JsonEncoderDecoder_1_$encode__Lcom_cherentsov_mapfront_shared_UIContent_1Generated_1JsonEncoderDecoder_1_2Lcom_cherentsov_mapfront_shared_UIContent_2Lcom_google_gwt_json_client_JSONValue_2_rc_0;
  __method = org_fusesource_restygwt_client_Resource_$put__Lorg_fusesource_restygwt_client_Resource_2Lorg_fusesource_restygwt_client_Method_2(org_fusesource_restygwt_client_Resource_$resolve__Lorg_fusesource_restygwt_client_Resource_2Ljava_lang_String_2Lorg_fusesource_restygwt_client_Resource_2(com_cherentsov_mapfront_client_GwtServiceIntf_1Generated_1RestServiceProxy_1_$getResource__Lcom_cherentsov_mapfront_client_GwtServiceIntf_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Resource_2(this$static), 'gwtAppService'));
  com_google_gwt_http_client_RequestBuilder_$setHeader__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Ljava_lang_String_2V(__method.org_fusesource_restygwt_client_Method_builder, 'Accept', $intern_6);
  org_fusesource_restygwt_client_Method_$json__Lorg_fusesource_restygwt_client_Method_2Lcom_google_gwt_json_client_JSONValue_2Lorg_fusesource_restygwt_client_Method_2(__method, (com_cherentsov_mapfront_shared_UIContent_1Generated_1JsonEncoderDecoder_1_$encode__Lcom_cherentsov_mapfront_shared_UIContent_1Generated_1JsonEncoderDecoder_1_2Lcom_cherentsov_mapfront_shared_UIContent_2Lcom_google_gwt_json_client_JSONValue_2_rc_0 = new com_google_gwt_json_client_JSONObject_JSONObject__V , org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_isNotNullValuePut__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2V(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2(data_0.com_cherentsov_mapfront_shared_UIContent_bank), com_cherentsov_mapfront_shared_UIContent_1Generated_1JsonEncoderDecoder_1_$encode__Lcom_cherentsov_mapfront_shared_UIContent_1Generated_1JsonEncoderDecoder_1_2Lcom_cherentsov_mapfront_shared_UIContent_2Lcom_google_gwt_json_client_JSONValue_2_rc_0, 'bank') , org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_isNotNullValuePut__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2V(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2(data_0.com_cherentsov_mapfront_shared_UIContent_city), com_cherentsov_mapfront_shared_UIContent_1Generated_1JsonEncoderDecoder_1_$encode__Lcom_cherentsov_mapfront_shared_UIContent_1Generated_1JsonEncoderDecoder_1_2Lcom_cherentsov_mapfront_shared_UIContent_2Lcom_google_gwt_json_client_JSONValue_2_rc_0, 'city') , com_cherentsov_mapfront_shared_UIContent_1Generated_1JsonEncoderDecoder_1_$encode__Lcom_cherentsov_mapfront_shared_UIContent_1Generated_1JsonEncoderDecoder_1_2Lcom_cherentsov_mapfront_shared_UIContent_2Lcom_google_gwt_json_client_JSONValue_2_rc_0));
  try {
    org_fusesource_restygwt_client_Method_$send__Lorg_fusesource_restygwt_client_Method_2Lcom_google_gwt_http_client_RequestCallback_2Ljava_lang_Object_2(__method, new com_cherentsov_mapfront_client_GwtServiceIntf_1Generated_1RestServiceProxy_1$1_GwtServiceIntf_1Generated_1RestServiceProxy_1$1__Lcom_cherentsov_mapfront_client_GwtServiceIntf_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V(__method, callback, __method));
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 26)) {
      com_cherentsov_mapfront_client_GTWClient$4_$onFailure__Lcom_cherentsov_mapfront_client_GTWClient$4_2Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Throwable_2V(callback, __method);
    }
     else 
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}

function com_cherentsov_mapfront_client_GwtServiceIntf_1Generated_1RestServiceProxy_1_GwtServiceIntf_1Generated_1RestServiceProxy_1__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(96, 1, {}, com_cherentsov_mapfront_client_GwtServiceIntf_1Generated_1RestServiceProxy_1_GwtServiceIntf_1Generated_1RestServiceProxy_1__V);
_.com_cherentsov_mapfront_client_GwtServiceIntf_1Generated_1RestServiceProxy_1_resource = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1cherentsov_1mapfront_1client_1GwtServiceIntf_11Generated_11RestServiceProxy_11_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'GwtServiceIntf_Generated_RestServiceProxy_', 96);
function org_fusesource_restygwt_client_AbstractRequestCallback_$onError__Lorg_fusesource_restygwt_client_AbstractRequestCallback_2Lcom_google_gwt_http_client_Request_2Ljava_lang_Throwable_2V(this$static){
  com_cherentsov_mapfront_client_GTWClient$4_$onFailure__Lcom_cherentsov_mapfront_client_GTWClient$4_2Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Throwable_2V(this$static.org_fusesource_restygwt_client_AbstractRequestCallback_callback, this$static.org_fusesource_restygwt_client_AbstractRequestCallback_method);
}

function org_fusesource_restygwt_client_AbstractRequestCallback_$onResponseReceived__Lorg_fusesource_restygwt_client_AbstractRequestCallback_2Lcom_google_gwt_http_client_Request_2Lcom_google_gwt_http_client_Response_2V(this$static, response){
  var content, lastArg, statusCode, value_0;
  this$static.org_fusesource_restygwt_client_AbstractRequestCallback_method.org_fusesource_restygwt_client_Method_response = response;
  if (org_fusesource_restygwt_client_Method_$isExpected__Lorg_fusesource_restygwt_client_Method_2IZ(this$static.org_fusesource_restygwt_client_AbstractRequestCallback_method, (statusCode = response.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest.status , statusCode == 1223?204:statusCode))) {
    try {
      com_google_gwt_logging_client_LogConfiguration_loggingIsEnabled__Z() && !this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger && (this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger = java_util_logging_Logger_getLogger__Ljava_lang_String_2Ljava_util_logging_Logger_2((java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractRequestCallback_12_1classLit) , com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractRequestCallback_12_1classLit.java_lang_Class_typeName)));
      !!this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger && java_util_logging_Logger_$fine__Ljava_util_logging_Logger_2Ljava_lang_String_2V((com_google_gwt_logging_client_LogConfiguration_loggingIsEnabled__Z() && !this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger && (this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger = java_util_logging_Logger_getLogger__Ljava_lang_String_2Ljava_util_logging_Logger_2((java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractRequestCallback_12_1classLit) , com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractRequestCallback_12_1classLit.java_lang_Class_typeName))) , this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger));
      content = response.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest.responseText;
      if (content != null && content.length != 0) {
        com_google_gwt_logging_client_LogConfiguration_loggingIsEnabled__Z() && !this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger && (this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger = java_util_logging_Logger_getLogger__Ljava_lang_String_2Ljava_util_logging_Logger_2((java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractRequestCallback_12_1classLit) , com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractRequestCallback_12_1classLit.java_lang_Class_typeName)));
        !!this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger && java_util_logging_Logger_$finest__Ljava_util_logging_Logger_2Ljava_lang_String_2V((com_google_gwt_logging_client_LogConfiguration_loggingIsEnabled__Z() && !this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger && (this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger = java_util_logging_Logger_getLogger__Ljava_lang_String_2Ljava_util_logging_Logger_2((java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractRequestCallback_12_1classLit) , com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractRequestCallback_12_1classLit.java_lang_Class_typeName))) , this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger));
        value_0 = com_cherentsov_mapfront_client_GwtServiceIntf_1Generated_1RestServiceProxy_1$1_$parseResult__Lcom_cherentsov_mapfront_client_GwtServiceIntf_1Generated_1RestServiceProxy_1$1_2Lcom_cherentsov_mapfront_shared_ResponceState_2(this$static);
      }
       else {
        value_0 = null;
      }
    }
     catch ($e0) {
      $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 4)) {
        com_google_gwt_logging_client_LogConfiguration_loggingIsEnabled__Z() && !this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger && (this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger = java_util_logging_Logger_getLogger__Ljava_lang_String_2Ljava_util_logging_Logger_2((java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractRequestCallback_12_1classLit) , com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractRequestCallback_12_1classLit.java_lang_Class_typeName)));
        !!this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger && java_util_logging_Logger_$log__Ljava_util_logging_Logger_2Ljava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2V((com_google_gwt_logging_client_LogConfiguration_loggingIsEnabled__Z() && !this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger && (this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger = java_util_logging_Logger_getLogger__Ljava_lang_String_2Ljava_util_logging_Logger_2((java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractRequestCallback_12_1classLit) , com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractRequestCallback_12_1classLit.java_lang_Class_typeName))) , this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger), (java_util_logging_Level_$clinit__V() , java_util_logging_Level_FINE));
        com_cherentsov_mapfront_client_GTWClient$4_$onFailure__Lcom_cherentsov_mapfront_client_GTWClient$4_2Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Throwable_2V(this$static.org_fusesource_restygwt_client_AbstractRequestCallback_callback, this$static.org_fusesource_restygwt_client_AbstractRequestCallback_method);
        return;
      }
       else 
        throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    }
    com_cherentsov_mapfront_client_GTWClient$4_$onSuccess__Lcom_cherentsov_mapfront_client_GTWClient$4_2Lorg_fusesource_restygwt_client_Method_2Lcom_cherentsov_mapfront_shared_ResponceState_2V(this$static.org_fusesource_restygwt_client_AbstractRequestCallback_callback, value_0);
  }
   else {
    com_cherentsov_mapfront_client_GTWClient$4_$onFailure__Lcom_cherentsov_mapfront_client_GTWClient$4_2Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Throwable_2V(this$static.org_fusesource_restygwt_client_AbstractRequestCallback_callback, (lastArg = this$static.org_fusesource_restygwt_client_AbstractRequestCallback_method , new org_fusesource_restygwt_client_FailedResponseException_FailedResponseException__Lcom_google_gwt_http_client_Response_2V((org_fusesource_restygwt_client_Defaults_$clinit__V() , response)) , lastArg));
  }
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(132, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractRequestCallback_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_7, 'AbstractRequestCallback', 132);
function com_cherentsov_mapfront_client_GwtServiceIntf_1Generated_1RestServiceProxy_1$1_$parseResult__Lcom_cherentsov_mapfront_client_GwtServiceIntf_1Generated_1RestServiceProxy_1$1_2Lcom_cherentsov_mapfront_shared_ResponceState_2(this$static){
  var __e;
  try {
    return com_cherentsov_mapfront_shared_ResponceState_1Generated_1JsonEncoderDecoder_1_$decode__Lcom_cherentsov_mapfront_shared_ResponceState_1Generated_1JsonEncoderDecoder_1_2Lcom_google_gwt_json_client_JSONValue_2Lcom_cherentsov_mapfront_shared_ResponceState_2((com_google_gwt_json_client_JSONParser_$clinit__V() , com_google_gwt_json_client_JSONParser_parse__Ljava_lang_String_2ZLcom_google_gwt_json_client_JSONValue_2(this$static.com_cherentsov_mapfront_client_GwtServiceIntf_1Generated_1RestServiceProxy_1$1_val$_1_1method4.org_fusesource_restygwt_client_Method_response.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest.responseText)));
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 4)) {
      __e = $e0;
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new org_fusesource_restygwt_client_ResponseFormatException_ResponseFormatException__Ljava_lang_String_2Ljava_lang_Throwable_2V(__e));
    }
     else 
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}

function com_cherentsov_mapfront_client_GwtServiceIntf_1Generated_1RestServiceProxy_1$1_GwtServiceIntf_1Generated_1RestServiceProxy_1$1__Lcom_cherentsov_mapfront_client_GwtServiceIntf_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V($anonymous0, $anonymous1, val$__method){
  this.com_cherentsov_mapfront_client_GwtServiceIntf_1Generated_1RestServiceProxy_1$1_val$_1_1method4 = val$__method;
  this.org_fusesource_restygwt_client_AbstractRequestCallback_method = $anonymous0;
  this.org_fusesource_restygwt_client_AbstractRequestCallback_callback = $anonymous1;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(133, 132, {}, com_cherentsov_mapfront_client_GwtServiceIntf_1Generated_1RestServiceProxy_1$1_GwtServiceIntf_1Generated_1RestServiceProxy_1$1__Lcom_cherentsov_mapfront_client_GwtServiceIntf_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1cherentsov_1mapfront_1client_1GwtServiceIntf_11Generated_11RestServiceProxy_11$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'GwtServiceIntf_Generated_RestServiceProxy_/1', 133);
function com_cherentsov_mapfront_shared_ResponceState_$setBank__Lcom_cherentsov_mapfront_shared_ResponceState_2_3Ljava_lang_String_2V(this$static, bank){
  this$static.com_cherentsov_mapfront_shared_ResponceState_bank = bank;
}

function com_cherentsov_mapfront_shared_ResponceState_ResponceState__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(232, 1, {}, com_cherentsov_mapfront_shared_ResponceState_ResponceState__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1cherentsov_1mapfront_1shared_1ResponceState_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_8, 'ResponceState', 232);
function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_asArray__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONArray_2(value_0){
  var array, object;
  array = value_0.isArray__Lcom_google_gwt_json_client_JSONArray_2();
  if (!array) {
    object = value_0.isObject__Lcom_google_gwt_json_client_JSONObject_2();
    if (!object) {
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new org_fusesource_restygwt_client_JsonEncoderDecoder$DecodingException_JsonEncoderDecoder$DecodingException__Ljava_lang_String_2V('Expected a json array, but was given: ' + value_0));
    }
    array = new com_google_gwt_json_client_JSONArray_JSONArray__V;
    com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2(array, 0);
    com_google_gwt_json_client_JSONArray_$set0__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2V(array, 0, object);
  }
  return array;
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getSize__Lcom_google_gwt_json_client_JSONValue_2I(value_0){
  var array;
  if (!value_0 || !!value_0.isNull__Lcom_google_gwt_json_client_JSONNull_2()) {
    return 0;
  }
  array = org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_asArray__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONArray_2(value_0);
  return array.com_google_gwt_json_client_JSONArray_jsArray.length;
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(value_0){
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(value_0, 89) || value_0 == null) {
    return null;
  }
  return value_0;
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_isNotNullValuePut__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2V(object, value_0, jsonName){
  var com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2_previous_0;
  !!object && (com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2_previous_0 = com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(value_0, jsonName) , com_google_gwt_json_client_JSONObject_$put0__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2V(value_0, jsonName, object) , com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2_previous_0);
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toArray__Lcom_google_gwt_json_client_JSONValue_2Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(value_0, template){
  var array, i, size_0;
  if (!value_0 || !!value_0.isNull__Lcom_google_gwt_json_client_JSONNull_2()) {
    return null;
  }
  array = org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_asArray__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONArray_2(value_0);
  size_0 = array.com_google_gwt_json_client_JSONArray_jsArray.length;
  for (i = 0; i < size_0; i++) {
    template[i] = org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_String_2(com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2(array, i));
  }
  return template;
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toObject__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2(value_0){
  var object;
  object = value_0.isObject__Lcom_google_gwt_json_client_JSONObject_2();
  if (!object) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new org_fusesource_restygwt_client_JsonEncoderDecoder$DecodingException_JsonEncoderDecoder$DecodingException__Ljava_lang_String_2V('Expected a json object, but was given: null'));
  }
  return object;
}

function com_cherentsov_mapfront_shared_ResponceState_1Generated_1JsonEncoderDecoder_1_$decode__Lcom_cherentsov_mapfront_shared_ResponceState_1Generated_1JsonEncoderDecoder_1_2Lcom_google_gwt_json_client_JSONValue_2Lcom_cherentsov_mapfront_shared_ResponceState_2(value_0){
  var object, rc;
  if (!value_0 || !!value_0.isNull__Lcom_google_gwt_json_client_JSONNull_2()) {
    return null;
  }
  object = org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toObject__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2(value_0);
  rc = new com_cherentsov_mapfront_shared_ResponceState_ResponceState__V;
  com_cherentsov_mapfront_shared_ResponceState_$setBank__Lcom_cherentsov_mapfront_shared_ResponceState_2_3Ljava_lang_String_2V(rc, org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toArray__Lcom_google_gwt_json_client_JSONValue_2Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'bank'), com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, $intern_9, 2, org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getSize__Lcom_google_gwt_json_client_JSONValue_2I(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'bank')), 6, 1))));
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toArray__Lcom_google_gwt_json_client_JSONValue_2Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'city'), com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, $intern_9, 2, org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getSize__Lcom_google_gwt_json_client_JSONValue_2I(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'city')), 6, 1)));
  return rc;
}

function com_cherentsov_mapfront_shared_UIContent_UIContent__Ljava_lang_String_2Ljava_lang_String_2V(){
  this.com_cherentsov_mapfront_shared_UIContent_bank = '\u0411\u0430\u043D\u043A';
  this.com_cherentsov_mapfront_shared_UIContent_city = '\u0413\u043E\u0440\u043E\u0434';
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(100, 1, {}, com_cherentsov_mapfront_shared_UIContent_UIContent__Ljava_lang_String_2Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1cherentsov_1mapfront_1shared_1UIContent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_8, 'UIContent', 100);
function com_google_gwt_animation_client_Animation_$cancel__Lcom_google_gwt_animation_client_Animation_2V(this$static){
  if (!this$static.com_google_gwt_animation_client_Animation_isRunning) {
    return;
  }
  this$static.com_google_gwt_animation_client_Animation_wasStarted = this$static.com_google_gwt_animation_client_Animation_isStarted;
  this$static.com_google_gwt_animation_client_Animation_element = null;
  this$static.com_google_gwt_animation_client_Animation_isRunning = false;
  this$static.com_google_gwt_animation_client_Animation_isStarted = false;
  if (this$static.com_google_gwt_animation_client_Animation_requestHandle) {
    this$static.com_google_gwt_animation_client_Animation_requestHandle.cancel__V();
    this$static.com_google_gwt_animation_client_Animation_requestHandle = null;
  }
  this$static.com_google_gwt_animation_client_Animation_wasStarted && com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$onComplete__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2V(this$static);
}

function com_google_gwt_animation_client_Animation_$run__Lcom_google_gwt_animation_client_Animation_2IDLcom_google_gwt_dom_client_Element_2V(this$static, startTime){
  com_google_gwt_animation_client_Animation_$cancel__Lcom_google_gwt_animation_client_Animation_2V(this$static);
  this$static.com_google_gwt_animation_client_Animation_isRunning = true;
  this$static.com_google_gwt_animation_client_Animation_isStarted = false;
  this$static.com_google_gwt_animation_client_Animation_duration = 200;
  this$static.com_google_gwt_animation_client_Animation_startTime = startTime;
  this$static.com_google_gwt_animation_client_Animation_element = null;
  ++this$static.com_google_gwt_animation_client_Animation_runId;
  com_google_gwt_animation_client_Animation$1_$execute__Lcom_google_gwt_animation_client_Animation$1_2DV(this$static.com_google_gwt_animation_client_Animation_callback, com_google_gwt_core_client_JsDate_now__D());
}

function com_google_gwt_animation_client_Animation_$update__Lcom_google_gwt_animation_client_Animation_2DZ(this$static, curTime){
  var curRunId, finished, progress;
  curRunId = this$static.com_google_gwt_animation_client_Animation_runId;
  finished = curTime >= this$static.com_google_gwt_animation_client_Animation_startTime + this$static.com_google_gwt_animation_client_Animation_duration;
  if (this$static.com_google_gwt_animation_client_Animation_isStarted && !finished) {
    progress = (curTime - this$static.com_google_gwt_animation_client_Animation_startTime) / this$static.com_google_gwt_animation_client_Animation_duration;
    com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$onUpdate__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2DV(this$static, (1 + $wnd.Math.cos($intern_10 + progress * $intern_10)) / 2);
    return this$static.com_google_gwt_animation_client_Animation_isRunning && this$static.com_google_gwt_animation_client_Animation_runId == curRunId;
  }
  if (!this$static.com_google_gwt_animation_client_Animation_isStarted && curTime >= this$static.com_google_gwt_animation_client_Animation_startTime) {
    this$static.com_google_gwt_animation_client_Animation_isStarted = true;
    this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_offsetHeight = com_google_gwt_user_client_ui_PopupPanel_$getOffsetHeight__Lcom_google_gwt_user_client_ui_PopupPanel_2I(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel);
    this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_offsetWidth = com_google_gwt_user_client_ui_PopupPanel_$getOffsetWidth__Lcom_google_gwt_user_client_ui_PopupPanel_2I(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel);
    com_google_gwt_user_client_ui_UIObject_$getElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel).style[$intern_11] = 'hidden';
    com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$onUpdate__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2DV(this$static, (1 + $wnd.Math.cos($intern_10)) / 2);
    if (!(this$static.com_google_gwt_animation_client_Animation_isRunning && this$static.com_google_gwt_animation_client_Animation_runId == curRunId)) {
      return false;
    }
  }
  if (finished) {
    this$static.com_google_gwt_animation_client_Animation_isRunning = false;
    this$static.com_google_gwt_animation_client_Animation_isStarted = false;
    com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$onComplete__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2V(this$static);
    return false;
  }
  return true;
}

function com_google_gwt_animation_client_Animation_Animation__Lcom_google_gwt_animation_client_AnimationScheduler_2V(scheduler){
  this.com_google_gwt_animation_client_Animation_callback = new com_google_gwt_animation_client_Animation$1_Animation$1__Lcom_google_gwt_animation_client_Animation_2V(this);
  this.com_google_gwt_animation_client_Animation_scheduler = scheduler;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(80, 1, {});
_.com_google_gwt_animation_client_Animation_duration = -1;
_.com_google_gwt_animation_client_Animation_isRunning = false;
_.com_google_gwt_animation_client_Animation_isStarted = false;
_.com_google_gwt_animation_client_Animation_runId = -1;
_.com_google_gwt_animation_client_Animation_startTime = -1;
_.com_google_gwt_animation_client_Animation_wasStarted = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1Animation_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'Animation', 80);
function com_google_gwt_animation_client_Animation$1_$execute__Lcom_google_gwt_animation_client_Animation$1_2DV(this$static, timestamp){
  com_google_gwt_animation_client_Animation_$update__Lcom_google_gwt_animation_client_Animation_2DZ(this$static.com_google_gwt_animation_client_Animation$1_this$01, timestamp)?(this$static.com_google_gwt_animation_client_Animation$1_this$01.com_google_gwt_animation_client_Animation_requestHandle = this$static.com_google_gwt_animation_client_Animation$1_this$01.com_google_gwt_animation_client_Animation_scheduler.requestAnimationFrame__Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2(this$static.com_google_gwt_animation_client_Animation$1_this$01.com_google_gwt_animation_client_Animation_callback, this$static.com_google_gwt_animation_client_Animation$1_this$01.com_google_gwt_animation_client_Animation_element)):(this$static.com_google_gwt_animation_client_Animation$1_this$01.com_google_gwt_animation_client_Animation_requestHandle = null);
}

function com_google_gwt_animation_client_Animation$1_Animation$1__Lcom_google_gwt_animation_client_Animation_2V(this$0){
  this.com_google_gwt_animation_client_Animation$1_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(129, 1, {}, com_google_gwt_animation_client_Animation$1_Animation$1__Lcom_google_gwt_animation_client_Animation_2V);
_.execute__DV = function com_google_gwt_animation_client_Animation$1_execute__DV(timestamp){
  com_google_gwt_animation_client_Animation$1_$execute__Lcom_google_gwt_animation_client_Animation$1_2DV(this, timestamp);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1Animation$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'Animation/1', 129);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(270, 1, {});
var com_google_gwt_animation_client_AnimationScheduler_instance;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1AnimationScheduler_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'AnimationScheduler', 270);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(69, 1, {69:1});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1AnimationScheduler$AnimationHandle_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'AnimationScheduler/AnimationHandle', 69);
function com_google_gwt_animation_client_AnimationSchedulerImplStandard_AnimationSchedulerImplStandard__V(){
}

function com_google_gwt_animation_client_AnimationSchedulerImplStandard_cancelImpl__Lcom_google_gwt_core_client_JavaScriptObject_2V(holder){
  $wnd.cancelAnimationFrame(holder.id);
}

function com_google_gwt_animation_client_AnimationSchedulerImplStandard_requestImpl__Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_core_client_JavaScriptObject_2(cb, element){
  var callback = $entry(function(){
    var time = com_google_gwt_core_client_JsDate_now__D();
    cb.execute__DV(time);
  }
  );
  var handle = $wnd.requestAnimationFrame(callback, element);
  return {id:handle};
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(216, 270, {}, com_google_gwt_animation_client_AnimationSchedulerImplStandard_AnimationSchedulerImplStandard__V);
_.requestAnimationFrame__Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2 = function com_google_gwt_animation_client_AnimationSchedulerImplStandard_requestAnimationFrame__Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2(callback, element){
  var handle;
  handle = com_google_gwt_animation_client_AnimationSchedulerImplStandard_requestImpl__Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_core_client_JavaScriptObject_2(callback, element);
  return new com_google_gwt_animation_client_AnimationSchedulerImplStandard$1_AnimationSchedulerImplStandard$1__Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2V(handle);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1AnimationSchedulerImplStandard_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'AnimationSchedulerImplStandard', 216);
function com_google_gwt_animation_client_AnimationSchedulerImplStandard$1_AnimationSchedulerImplStandard$1__Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2V(val$handle){
  this.com_google_gwt_animation_client_AnimationSchedulerImplStandard$1_val$handle2 = val$handle;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(217, 69, {69:1}, com_google_gwt_animation_client_AnimationSchedulerImplStandard$1_AnimationSchedulerImplStandard$1__Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2V);
_.cancel__V = function com_google_gwt_animation_client_AnimationSchedulerImplStandard$1_cancel__V(){
  com_google_gwt_animation_client_AnimationSchedulerImplStandard_cancelImpl__Lcom_google_gwt_core_client_JavaScriptObject_2V(this.com_google_gwt_animation_client_AnimationSchedulerImplStandard$1_val$handle2);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1AnimationSchedulerImplStandard$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'AnimationSchedulerImplStandard/1', 217);
function com_google_gwt_animation_client_AnimationSchedulerImplTimer_$cancelAnimationFrame__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2V(this$static, requestId){
  java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests, requestId);
  this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests.java_util_ArrayList_array.length == 0 && com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_timer);
}

function com_google_gwt_animation_client_AnimationSchedulerImplTimer_$updateAnimations__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2V(this$static){
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1AnimationSchedulerImplTimer$AnimationHandleImpl_12_1classLit, {281:1, 3:1}, 70, this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests.java_util_ArrayList_array.length, 0, 1);
  curAnimations = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$toArray__Ljava_util_ArrayList_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests, curAnimations), 281);
  duration = new com_google_gwt_core_client_Duration_Duration__V;
  for (requestId$index = 0 , requestId$max = curAnimations.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = curAnimations[requestId$index];
    java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests, requestId);
    com_google_gwt_animation_client_Animation$1_$execute__Lcom_google_gwt_animation_client_Animation$1_2DV(requestId.com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_callback, duration.com_google_gwt_core_client_Duration_start);
  }
  this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests.java_util_ArrayList_array.length > 0 && com_google_gwt_user_client_Timer_$schedule__Lcom_google_gwt_user_client_Timer_2IV(this$static.com_google_gwt_animation_client_AnimationSchedulerImplTimer_timer, $wnd.Math.max(5, 16 - (com_google_gwt_core_client_JsDate_now__D() - duration.com_google_gwt_core_client_Duration_start)));
}

function com_google_gwt_animation_client_AnimationSchedulerImplTimer_AnimationSchedulerImplTimer__V(){
  this.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests = new java_util_ArrayList_ArrayList__V;
  this.com_google_gwt_animation_client_AnimationSchedulerImplTimer_timer = new com_google_gwt_animation_client_AnimationSchedulerImplTimer$1_AnimationSchedulerImplTimer$1__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2V(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(218, 270, {}, com_google_gwt_animation_client_AnimationSchedulerImplTimer_AnimationSchedulerImplTimer__V);
_.requestAnimationFrame__Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2 = function com_google_gwt_animation_client_AnimationSchedulerImplTimer_requestAnimationFrame__Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2(callback, element){
  var requestId;
  requestId = new com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_AnimationSchedulerImplTimer$AnimationHandleImpl__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2V(this, callback);
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests, requestId);
  this.com_google_gwt_animation_client_AnimationSchedulerImplTimer_animationRequests.java_util_ArrayList_array.length == 1 && com_google_gwt_user_client_Timer_$schedule__Lcom_google_gwt_user_client_Timer_2IV(this.com_google_gwt_animation_client_AnimationSchedulerImplTimer_timer, 16);
  return requestId;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1AnimationSchedulerImplTimer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'AnimationSchedulerImplTimer', 218);
function com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static){
  if (!this$static.com_google_gwt_user_client_Timer_timerId) {
    return;
  }
  ++this$static.com_google_gwt_user_client_Timer_cancelCounter;
  this$static.com_google_gwt_user_client_Timer_isRepeating?com_google_gwt_user_client_Timer_clearInterval__IV(this$static.com_google_gwt_user_client_Timer_timerId.java_lang_Integer_value):com_google_gwt_user_client_Timer_clearTimeout__IV(this$static.com_google_gwt_user_client_Timer_timerId.java_lang_Integer_value);
  this$static.com_google_gwt_user_client_Timer_timerId = null;
}

function com_google_gwt_user_client_Timer_$schedule__Lcom_google_gwt_user_client_Timer_2IV(this$static, delayMillis){
  if (delayMillis < 0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('must be non-negative'));
  }
  !!this$static.com_google_gwt_user_client_Timer_timerId && com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static);
  this$static.com_google_gwt_user_client_Timer_isRepeating = false;
  this$static.com_google_gwt_user_client_Timer_timerId = java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_user_client_Timer_setTimeout__Lcom_google_gwt_core_client_JavaScriptObject_2II(com_google_gwt_user_client_Timer_createCallback__Lcom_google_gwt_user_client_Timer_2ILcom_google_gwt_core_client_JavaScriptObject_2(this$static, this$static.com_google_gwt_user_client_Timer_cancelCounter), delayMillis));
}

function com_google_gwt_user_client_Timer_Timer__V(){
}

function com_google_gwt_user_client_Timer_clearInterval__IV(timerId){
  $wnd.clearInterval(timerId);
}

function com_google_gwt_user_client_Timer_clearTimeout__IV(timerId){
  $wnd.clearTimeout(timerId);
}

function com_google_gwt_user_client_Timer_createCallback__Lcom_google_gwt_user_client_Timer_2ILcom_google_gwt_core_client_JavaScriptObject_2(timer, cancelCounter){
  return $entry(function(){
    timer.package_private$com_google_gwt_user_client$fire__IV(cancelCounter);
  }
  );
}

function com_google_gwt_user_client_Timer_setTimeout__Lcom_google_gwt_core_client_JavaScriptObject_2II(func, time){
  return $wnd.setTimeout(func, time);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(67, 1, {});
_.package_private$com_google_gwt_user_client$fire__IV = function com_google_gwt_user_client_Timer_fire__IV(scheduleCancelCounter){
  if (scheduleCancelCounter != this.com_google_gwt_user_client_Timer_cancelCounter) {
    return;
  }
  this.com_google_gwt_user_client_Timer_isRepeating || (this.com_google_gwt_user_client_Timer_timerId = null);
  this.run__V();
}
;
_.com_google_gwt_user_client_Timer_cancelCounter = 0;
_.com_google_gwt_user_client_Timer_isRepeating = false;
_.com_google_gwt_user_client_Timer_timerId = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Timer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'Timer', 67);
function com_google_gwt_animation_client_AnimationSchedulerImplTimer$1_AnimationSchedulerImplTimer$1__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2V(this$0){
  this.com_google_gwt_animation_client_AnimationSchedulerImplTimer$1_this$01 = this$0;
  com_google_gwt_user_client_Timer_Timer__V.call(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(219, 67, {}, com_google_gwt_animation_client_AnimationSchedulerImplTimer$1_AnimationSchedulerImplTimer$1__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2V);
_.run__V = function com_google_gwt_animation_client_AnimationSchedulerImplTimer$1_run__V(){
  com_google_gwt_animation_client_AnimationSchedulerImplTimer_$updateAnimations__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2V(this.com_google_gwt_animation_client_AnimationSchedulerImplTimer$1_this$01);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1AnimationSchedulerImplTimer$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'AnimationSchedulerImplTimer/1', 219);
function com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_AnimationSchedulerImplTimer$AnimationHandleImpl__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2V(this$0, callback){
  this.com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_this$01 = this$0;
  this.com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_callback = callback;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(70, 69, {69:1, 70:1}, com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_AnimationSchedulerImplTimer$AnimationHandleImpl__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationCallback_2V);
_.cancel__V = function com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_cancel__V(){
  com_google_gwt_animation_client_AnimationSchedulerImplTimer_$cancelAnimationFrame__Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2V(this.com_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_this$01, this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1animation_1client_1AnimationSchedulerImplTimer$AnimationHandleImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'AnimationSchedulerImplTimer/AnimationHandleImpl', 70);
function com_google_gwt_core_client_Duration_Duration__V(){
  this.com_google_gwt_core_client_Duration_start = com_google_gwt_core_client_JsDate_now__D();
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(192, 1, {}, com_google_gwt_core_client_Duration_Duration__V);
_.com_google_gwt_core_client_Duration_start = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1Duration_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_14, 'Duration', 192);
function java_lang_Throwable_$addSuppressed__Ljava_lang_Throwable_2Ljava_lang_Throwable_2V(this$static, exception){
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2V(exception);
  javaemul_internal_InternalPreconditions_checkCriticalArgument__ZLjava_lang_Object_2V(exception != this$static, 'Exception can not suppress itself.');
  if (this$static.java_lang_Throwable_disableSuppression) {
    return;
  }
  this$static.java_lang_Throwable_suppressedExceptions == null?(this$static.java_lang_Throwable_suppressedExceptions = com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Throwable_12_1classLit, 1), $intern_9, 4, 0, [exception])):(this$static.java_lang_Throwable_suppressedExceptions[this$static.java_lang_Throwable_suppressedExceptions.length] = exception);
}

function java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this$static){
  this$static.java_lang_Throwable_writetableStackTrace && this$static.java_lang_Throwable_backingJsObject !== $intern_15 && this$static.private$java_lang_Throwable$initializeBackingError__V();
  return this$static;
}

function java_lang_Throwable_$initCause__Ljava_lang_Throwable_2Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this$static, cause){
  javaemul_internal_InternalPreconditions_checkCriticalState__ZLjava_lang_Object_2V(!this$static.java_lang_Throwable_cause);
  javaemul_internal_InternalPreconditions_checkCriticalArgument__ZLjava_lang_Object_2V(true, 'Self-causation not permitted');
  this$static.java_lang_Throwable_cause = cause;
  return this$static;
}

function java_lang_Throwable_$setBackingJsObject__Ljava_lang_Throwable_2Ljava_lang_Object_2V(this$static, backingJsObject){
  this$static.java_lang_Throwable_backingJsObject = backingJsObject;
  backingJsObject != null && javaemul_internal_JsUtils_setPropertySafe__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2V(backingJsObject, $intern_16, this$static);
}

function java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2Ljava_lang_String_2(this$static, message){
  var className;
  className = java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this$static.java_lang_Object__1_1_1clazz);
  return message == null?className:className + ': ' + message;
}

function java_lang_Throwable_Throwable__Ljava_lang_String_2Ljava_lang_Throwable_2V(message, cause){
  this.java_lang_Throwable_cause = cause;
  this.java_lang_Throwable_detailMessage = message;
  java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this);
  this.private$java_lang_Throwable$initializeBackingError__V();
}

function java_lang_Throwable_fixIE__Ljava_lang_Object_2Ljava_lang_Object_2(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(4, 1, $intern_17);
_.package_private$java_lang$createError__Ljava_lang_String_2Ljava_lang_Object_2 = function java_lang_Throwable_createError__Ljava_lang_String_2Ljava_lang_Object_2(msg){
  return new Error(msg);
}
;
_.getMessage__Ljava_lang_String_2 = function java_lang_Throwable_getMessage__Ljava_lang_String_2(){
  return this.java_lang_Throwable_detailMessage;
}
;
_.private$java_lang_Throwable$initializeBackingError__V = function java_lang_Throwable_initializeBackingError__V(){
  var className, errorMessage, message;
  message = this.java_lang_Throwable_detailMessage == null?null:this.java_lang_Throwable_detailMessage.replace(new RegExp('\n', 'g'), ' ');
  errorMessage = (className = java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this.java_lang_Object__1_1_1clazz) , message == null?className:className + ': ' + message);
  java_lang_Throwable_$setBackingJsObject__Ljava_lang_Throwable_2Ljava_lang_Object_2V(this, java_lang_Throwable_fixIE__Ljava_lang_Object_2Ljava_lang_Object_2(this.package_private$java_lang$createError__Ljava_lang_String_2Ljava_lang_Object_2(errorMessage)));
  com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Object_2V(this);
}
;
_.toString__Ljava_lang_String_2 = function java_lang_Throwable_toString__Ljava_lang_String_2(){
  return java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2Ljava_lang_String_2(this, this.getMessage__Ljava_lang_String_2());
}
;
_.java_lang_Throwable_backingJsObject = $intern_15;
_.java_lang_Throwable_disableSuppression = false;
_.java_lang_Throwable_writetableStackTrace = true;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Throwable_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Throwable', 4);
function java_lang_Exception_Exception__Ljava_lang_String_2V(message){
  this.java_lang_Throwable_detailMessage = message;
  java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this);
  this.private$java_lang_Throwable$initializeBackingError__V();
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(33, 4, $intern_17);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Exception_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Exception', 33);
function java_lang_RuntimeException_RuntimeException__V(){
  java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this);
  this.private$java_lang_Throwable$initializeBackingError__V();
}

function java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V(message){
  java_lang_Exception_Exception__Ljava_lang_String_2V.call(this, message);
}

function java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2Ljava_lang_Throwable_2V(message, cause){
  java_lang_Throwable_Throwable__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, message, cause);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(9, 33, $intern_17, java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1RuntimeException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'RuntimeException', 9);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(63, 9, $intern_17);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1JsException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'JsException', 63);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(105, 63, $intern_17);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1JavaScriptExceptionBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'JavaScriptExceptionBase', 105);
function com_google_gwt_core_client_JavaScriptException_$clinit__V(){
  com_google_gwt_core_client_JavaScriptException_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_core_client_JavaScriptException_NOT_1SET = new java_lang_Object_Object__V;
}

function com_google_gwt_core_client_JavaScriptException_$ensureInit__Lcom_google_gwt_core_client_JavaScriptException_2V(this$static){
  var exception;
  if (this$static.com_google_gwt_core_client_JavaScriptException_message == null) {
    exception = com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_core_client_JavaScriptException_e) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_core_client_JavaScriptException_NOT_1SET)?null:this$static.com_google_gwt_core_client_JavaScriptException_e;
    this$static.com_google_gwt_core_client_JavaScriptException_name = exception == null?$intern_19:com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(exception)?com_google_gwt_core_client_JavaScriptException_getExceptionName0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(com_google_gwt_lang_Cast_castToJso__Ljava_lang_Object_2Ljava_lang_Object_2(exception)):com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(exception)?'String':java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(exception));
    this$static.com_google_gwt_core_client_JavaScriptException_description = this$static.com_google_gwt_core_client_JavaScriptException_description + ': ' + (com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(exception)?com_google_gwt_core_client_JavaScriptException_getExceptionDescription0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(com_google_gwt_lang_Cast_castToJso__Ljava_lang_Object_2Ljava_lang_Object_2(exception)):exception + '');
    this$static.com_google_gwt_core_client_JavaScriptException_message = '(' + this$static.com_google_gwt_core_client_JavaScriptException_name + ') ' + this$static.com_google_gwt_core_client_JavaScriptException_description;
  }
}

function com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V(e){
  com_google_gwt_core_client_JavaScriptException_$clinit__V();
  java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this);
  this.java_lang_Throwable_backingJsObject = e;
  e != null && javaemul_internal_JsUtils_setPropertySafe__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2V(e, $intern_16, this);
  this.java_lang_Throwable_detailMessage = e == null?$intern_19:com_google_gwt_lang_Runtime_toString__Ljava_lang_Object_2Ljava_lang_String_2(e);
  this.com_google_gwt_core_client_JavaScriptException_description = '';
  this.com_google_gwt_core_client_JavaScriptException_e = e;
  this.com_google_gwt_core_client_JavaScriptException_description = '';
}

function com_google_gwt_core_client_JavaScriptException_getExceptionDescription0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(e){
  return e == null?null:e.message;
}

function com_google_gwt_core_client_JavaScriptException_getExceptionName0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(e){
  return e == null?null:e.name;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(23, 105, {23:1, 3:1, 4:1}, com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V);
_.getMessage__Ljava_lang_String_2 = function com_google_gwt_core_client_JavaScriptException_getMessage__Ljava_lang_String_2(){
  return com_google_gwt_core_client_JavaScriptException_$ensureInit__Lcom_google_gwt_core_client_JavaScriptException_2V(this) , this.com_google_gwt_core_client_JavaScriptException_message;
}
;
_.getThrown__Ljava_lang_Object_2 = function com_google_gwt_core_client_JavaScriptException_getThrown__Ljava_lang_Object_2(){
  return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(this.com_google_gwt_core_client_JavaScriptException_e) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_core_client_JavaScriptException_NOT_1SET)?null:this.com_google_gwt_core_client_JavaScriptException_e;
}
;
var com_google_gwt_core_client_JavaScriptException_NOT_1SET;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_14, 'JavaScriptException', 23);
function com_google_gwt_core_client_JavaScriptObject_$equals__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2Z(this$static, other){
  return !!this$static && !!this$static.equals?this$static.equals(other):com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(this$static) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(other);
}

function com_google_gwt_core_client_JavaScriptObject_$hashCode__Lcom_google_gwt_core_client_JavaScriptObject_2I(this$static){
  return !!this$static && !!this$static.hashCode?this$static.hashCode():javaemul_internal_ObjectHashing_getHashCode__Ljava_lang_Object_2I(this$static);
}

var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_14, 'JavaScriptObject$', 0);
function com_google_gwt_core_client_JsDate_now__D(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

function com_google_gwt_core_client_JsonUtils_escapeChar__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(c, escapeTable){
  var lookedUp = com_google_gwt_core_client_JsonUtils_escapeTable[c.charCodeAt(0)];
  return lookedUp == null?c:lookedUp;
}

function com_google_gwt_core_client_JsonUtils_escapeJsonForEval__Ljava_lang_String_2Ljava_lang_String_2(toEscape){
  var escapeTable = com_google_gwt_core_client_JsonUtils_getEscapeTable__Lcom_google_gwt_core_client_JavaScriptObject_2();
  var s = toEscape.replace(/[\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb]/g, function(x_0){
    return com_google_gwt_core_client_JsonUtils_escapeChar__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(x_0, escapeTable);
  }
  );
  return s;
}

function com_google_gwt_core_client_JsonUtils_escapeValue__Ljava_lang_String_2Ljava_lang_String_2(toEscape){
  var escapeTable = com_google_gwt_core_client_JsonUtils_getEscapeTable__Lcom_google_gwt_core_client_JavaScriptObject_2();
  var s = toEscape.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g, function(x_0){
    return com_google_gwt_core_client_JsonUtils_escapeChar__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(x_0, escapeTable);
  }
  );
  return '"' + s + '"';
}

function com_google_gwt_core_client_JsonUtils_getEscapeTable__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  !com_google_gwt_core_client_JsonUtils_escapeTable && (com_google_gwt_core_client_JsonUtils_escapeTable = com_google_gwt_core_client_JsonUtils_initEscapeTable__Lcom_google_gwt_core_client_JavaScriptObject_2());
  return com_google_gwt_core_client_JsonUtils_escapeTable;
}

function com_google_gwt_core_client_JsonUtils_initEscapeTable__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  var out = ['\\u0000', '\\u0001', '\\u0002', '\\u0003', '\\u0004', '\\u0005', '\\u0006', '\\u0007', '\\b', '\\t', '\\n', '\\u000B', '\\f', '\\r', '\\u000E', '\\u000F', '\\u0010', '\\u0011', '\\u0012', '\\u0013', '\\u0014', '\\u0015', '\\u0016', '\\u0017', '\\u0018', '\\u0019', '\\u001A', '\\u001B', '\\u001C', '\\u001D', '\\u001E', '\\u001F'];
  out[34] = '\\"';
  out[92] = '\\\\';
  out[173] = '\\u00ad';
  out[1536] = '\\u0600';
  out[1537] = '\\u0601';
  out[1538] = '\\u0602';
  out[1539] = '\\u0603';
  out[1757] = '\\u06dd';
  out[1807] = '\\u070f';
  out[6068] = '\\u17b4';
  out[6069] = '\\u17b5';
  out[8203] = '\\u200b';
  out[8204] = '\\u200c';
  out[8205] = '\\u200d';
  out[8206] = '\\u200e';
  out[8207] = '\\u200f';
  out[8232] = '\\u2028';
  out[8233] = '\\u2029';
  out[8234] = '\\u202a';
  out[8235] = '\\u202b';
  out[8236] = '\\u202c';
  out[8237] = '\\u202d';
  out[8238] = '\\u202e';
  out[8288] = '\\u2060';
  out[8289] = '\\u2061';
  out[8290] = '\\u2062';
  out[8291] = '\\u2063';
  out[8292] = '\\u2064';
  out[8298] = '\\u206a';
  out[8299] = '\\u206b';
  out[8300] = '\\u206c';
  out[8301] = '\\u206d';
  out[8302] = '\\u206e';
  out[8303] = '\\u206f';
  out[65279] = '\\ufeff';
  out[65529] = '\\ufff9';
  out[65530] = '\\ufffa';
  out[65531] = '\\ufffb';
  return out;
}

var com_google_gwt_core_client_JsonUtils_escapeTable;
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(237, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1Scheduler_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_14, 'Scheduler', 237);
function com_google_gwt_core_client_impl_Impl_$clinit__V(){
  com_google_gwt_core_client_impl_Impl_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  !!(com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V() , com_google_gwt_core_client_impl_StackTraceCreator_collector);
}

function com_google_gwt_core_client_impl_Impl_apply__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var _;
}

function com_google_gwt_core_client_impl_Impl_enter__Z(){
  var now_0;
  if (com_google_gwt_core_client_impl_Impl_entryDepth != 0) {
    now_0 = com_google_gwt_core_client_JsDate_now__D();
    if (now_0 - com_google_gwt_core_client_impl_Impl_watchdogEntryDepthLastScheduled > 2000) {
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthLastScheduled = now_0;
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = $wnd.setTimeout(com_google_gwt_core_client_impl_Impl_watchdogEntryDepthRun__V, 10);
    }
  }
  if (com_google_gwt_core_client_impl_Impl_entryDepth++ == 0) {
    com_google_gwt_core_client_impl_SchedulerImpl_$flushEntryCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE));
    return true;
  }
  return false;
}

function com_google_gwt_core_client_impl_Impl_entry__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(jsFunction){
  com_google_gwt_core_client_impl_Impl_$clinit__V();
  return function(){
    return com_google_gwt_core_client_impl_Impl_entry0__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, this, arguments);
    var _;
  }
  ;
}

function com_google_gwt_core_client_impl_Impl_entry0__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = com_google_gwt_core_client_impl_Impl_enter__Z();
  try {
    return com_google_gwt_core_client_impl_Impl_apply__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, args);
  }
   finally {
    com_google_gwt_core_client_impl_Impl_exit__ZV(initialEntry);
  }
}

function com_google_gwt_core_client_impl_Impl_exit__ZV(initialEntry){
  initialEntry && com_google_gwt_core_client_impl_SchedulerImpl_$flushFinallyCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE));
  --com_google_gwt_core_client_impl_Impl_entryDepth;
  if (initialEntry) {
    if (com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId != -1) {
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthCancel__IV(com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId);
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = -1;
    }
  }
}

function com_google_gwt_core_client_impl_Impl_reportToBrowser__Ljava_lang_Object_2V(e){
  com_google_gwt_core_client_impl_Impl_$clinit__V();
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function com_google_gwt_core_client_impl_Impl_watchdogEntryDepthCancel__IV(timerId){
  $wnd.clearTimeout(timerId);
}

function com_google_gwt_core_client_impl_Impl_watchdogEntryDepthRun__V(){
  com_google_gwt_core_client_impl_Impl_entryDepth != 0 && (com_google_gwt_core_client_impl_Impl_entryDepth = 0);
  com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = -1;
}

var com_google_gwt_core_client_impl_Impl_entryDepth = 0, com_google_gwt_core_client_impl_Impl_watchdogEntryDepthLastScheduled = 0, com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = -1;
function com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V(){
  com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE = new com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V;
}

function com_google_gwt_core_client_impl_SchedulerImpl_$flushEntryCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldQueue, rescheduled;
  if (this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands;
      this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands = null;
      rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(oldQueue, rescheduled);
    }
     while (this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands);
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands = rescheduled;
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_$flushFinallyCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldQueue, rescheduled;
  if (this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands;
      this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands = null;
      rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(oldQueue, rescheduled);
    }
     while (this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands);
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands = rescheduled;
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V(){
}

function com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].$_nullMethod() && (rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(rescheduled, t)):t[0].execute__V();
    }
     catch ($e0) {
      $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 4)) {
        e = $e0;
        com_google_gwt_core_client_impl_Impl_$clinit__V();
        com_google_gwt_core_client_impl_Impl_reportToBrowser__Ljava_lang_Object_2V(com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(e, 23)?com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(e, 23).getThrown__Ljava_lang_Object_2():e);
      }
       else 
        throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    }
  }
  return rescheduled;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(187, 237, {}, com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V);
var com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1SchedulerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'SchedulerImpl', 187);
function com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V(){
  com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  var c, enforceLegacy;
  enforceLegacy = !com_google_gwt_core_client_impl_StackTraceCreator_supportsErrorStack__Z();
  c = new com_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_StackTraceCreator$CollectorModernNoSourceMap__V;
  com_google_gwt_core_client_impl_StackTraceCreator_collector = enforceLegacy?new com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_StackTraceCreator$CollectorLegacy__V:c;
}

function com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Object_2V(error){
  com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V();
  com_google_gwt_core_client_impl_StackTraceCreator_collector.collect__Ljava_lang_Object_2V(error);
}

function com_google_gwt_core_client_impl_StackTraceCreator_extractFunctionName__Ljava_lang_String_2Ljava_lang_String_2(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function com_google_gwt_core_client_impl_StackTraceCreator_supportsErrorStack__Z(){
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}

var com_google_gwt_core_client_impl_StackTraceCreator_collector;
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(250, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$Collector_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'StackTraceCreator/Collector', 250);
function com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_StackTraceCreator$CollectorLegacy__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(106, 250, {}, com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_StackTraceCreator$CollectorLegacy__V);
_.collect__Ljava_lang_Object_2V = function com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_collect__Ljava_lang_Object_2V(error){
  var seen = {}, com_google_gwt_core_client_impl_StackTraceCreator_getFunctionName__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2_name_0;
  var fnStack = [];
  error['fnStack'] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = (com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V() , callee.name || (callee.name = com_google_gwt_core_client_impl_StackTraceCreator_extractFunctionName__Ljava_lang_String_2Ljava_lang_String_2(callee.toString())));
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$CollectorLegacy_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'StackTraceCreator/CollectorLegacy', 106);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(251, 250, {});
_.collect__Ljava_lang_Object_2V = function com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_collect__Ljava_lang_Object_2V(error){
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$CollectorModern_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'StackTraceCreator/CollectorModern', 251);
function com_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_StackTraceCreator$CollectorModernNoSourceMap__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(107, 251, {}, com_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_StackTraceCreator$CollectorModernNoSourceMap__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$CollectorModernNoSourceMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'StackTraceCreator/CollectorModernNoSourceMap', 107);
function com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static, newChild){
  return this$static.appendChild(newChild);
}

function com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function com_google_gwt_dom_client_Node_is__Lcom_google_gwt_core_client_JavaScriptObject_2Z(o){
  try {
    return !!o && !!o.nodeType;
  }
   catch (e) {
    return false;
  }
}

function com_google_gwt_dom_client_Element_$addClassName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(this$static, className){
  var idx, oldClassName;
  className = com_google_gwt_dom_client_Element_trimClassName__Ljava_lang_String_2Ljava_lang_String_2(className);
  oldClassName = this$static.className || '';
  idx = com_google_gwt_dom_client_Element_indexOfName__Ljava_lang_String_2Ljava_lang_String_2I(oldClassName, className);
  if (idx == -1) {
    oldClassName.length > 0?(this$static.className = oldClassName + ' ' + className || '' , undefined):(this$static.className = className || '' , undefined);
    return true;
  }
  return false;
}

function com_google_gwt_dom_client_Element_$getPropertyInt__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2I(this$static, name_0){
  return parseInt(this$static[name_0]) | 0;
}

function com_google_gwt_dom_client_Element_$getPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function com_google_gwt_dom_client_Element_$removeClassName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(this$static, className){
  var begin, end, idx, newClassName, oldStyle;
  className = com_google_gwt_dom_client_Element_trimClassName__Ljava_lang_String_2Ljava_lang_String_2(className);
  oldStyle = this$static.className || '';
  idx = com_google_gwt_dom_client_Element_indexOfName__Ljava_lang_String_2Ljava_lang_String_2I(oldStyle, className);
  if (idx != -1) {
    begin = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(oldStyle.substr(0, idx));
    end = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(java_lang_String_$substring__Ljava_lang_String_2ILjava_lang_String_2(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    this$static.className = newClassName || '';
    return true;
  }
  return false;
}

function com_google_gwt_dom_client_Element_$setInnerHTML__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this$static, html){
  this$static.innerHTML = html || '';
}

function com_google_gwt_dom_client_Element_indexOfName__Ljava_lang_String_2Ljava_lang_String_2I(nameList, name_0){
  var idx, last, lastPos;
  idx = nameList.indexOf(name_0);
  while (idx != -1) {
    if (idx == 0 || (javaemul_internal_InternalPreconditions_checkCriticalStringElementIndex__IIV(idx - 1, nameList.length) , nameList.charCodeAt(idx - 1) == 32)) {
      last = idx + name_0.length;
      lastPos = nameList.length;
      if (last == lastPos || last < lastPos && (javaemul_internal_InternalPreconditions_checkCriticalStringElementIndex__IIV(last, nameList.length) , nameList.charCodeAt(last) == 32)) {
        break;
      }
    }
    idx = nameList.indexOf(name_0, idx + 1);
  }
  return idx;
}

function com_google_gwt_dom_client_Element_is__Lcom_google_gwt_core_client_JavaScriptObject_2Z(o){
  if (com_google_gwt_dom_client_Node_is__Lcom_google_gwt_core_client_JavaScriptObject_2Z(o)) {
    return !!o && o.nodeType == 1;
  }
  return false;
}

function com_google_gwt_dom_client_Element_trimClassName__Ljava_lang_String_2Ljava_lang_String_2(className){
  className = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(className);
  return className;
}

function com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function com_google_gwt_dom_client_DOMImplStandard_$setInnerText__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, text_0){
  elem.textContent = text_0 || '';
}

function com_google_gwt_dom_client_DOMImplStandardBase_$createScriptElement__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ScriptElement_2(doc, source){
  var elem;
  elem = doc.createElement('script');
  elem.textContent = source || '';
  return elem;
}

function com_google_gwt_dom_client_DOMImplStandardBase_$isRTL__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Element_2Z(elem){
  return elem.ownerDocument.defaultView.getComputedStyle(elem, '').direction == 'rtl';
}

function com_google_gwt_dom_client_DOMImplIE9_$getAbsoluteLeft__Lcom_google_gwt_dom_client_DOMImplIE9_2Lcom_google_gwt_dom_client_Element_2I(elem){
  var left;
  left = com_google_gwt_dom_client_DOMImplIE9_$getBoundingClientRectLeft__Lcom_google_gwt_dom_client_DOMImplIE9_2Lcom_google_gwt_dom_client_Element_2D(elem) + $wnd.pageXOffset;
  com_google_gwt_dom_client_DOMImplStandardBase_$isRTL__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Element_2Z(elem) && (left += com_google_gwt_dom_client_DOMImplIE9_$getParentOffsetDelta__Lcom_google_gwt_dom_client_DOMImplIE9_2Lcom_google_gwt_dom_client_Element_2D(elem));
  return left | 0;
}

function com_google_gwt_dom_client_DOMImplIE9_$getBoundingClientRectLeft__Lcom_google_gwt_dom_client_DOMImplIE9_2Lcom_google_gwt_dom_client_Element_2D(elem){
  try {
    return elem.getBoundingClientRect().left;
  }
   catch (e) {
    return 0;
  }
}

function com_google_gwt_dom_client_DOMImplIE9_$getBoundingClientRectTop__Lcom_google_gwt_dom_client_DOMImplIE9_2Lcom_google_gwt_dom_client_Element_2D(elem){
  try {
    return elem.getBoundingClientRect().top;
  }
   catch (e) {
    return 0;
  }
}

function com_google_gwt_dom_client_DOMImplIE9_$getParentOffsetDelta__Lcom_google_gwt_dom_client_DOMImplIE9_2Lcom_google_gwt_dom_client_Element_2D(elem){
  var offsetParent = elem.offsetParent;
  if (offsetParent) {
    return offsetParent.offsetWidth - offsetParent.clientWidth;
  }
  return 0;
}

function com_google_gwt_dom_client_DOMImplIE9_$getTabIndex__Lcom_google_gwt_dom_client_DOMImplIE9_2Lcom_google_gwt_dom_client_Element_2I(elem){
  return elem.tabIndex < 65535?elem.tabIndex:-(elem.tabIndex % 65535) - 1;
}

function com_google_gwt_dom_client_DOMImplTrident_isOrHasChildImpl__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Z(parent_0, child){
  if (parent_0.nodeType != 1 && parent_0.nodeType != 9) {
    return parent_0 == child;
  }
  if (child.nodeType != 1) {
    child = child.parentNode;
    if (!child) {
      return false;
    }
  }
  if (parent_0.nodeType == 9) {
    return parent_0 === child || parent_0.body && parent_0.body.contains(child);
  }
   else {
    return parent_0 === child || parent_0.contains(child);
  }
}

function com_google_gwt_dom_client_Document_$getClientHeight__Lcom_google_gwt_dom_client_Document_2I(this$static){
  return (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static.compatMode, $intern_20)?this$static.documentElement:this$static.body).clientHeight | 0;
}

function com_google_gwt_dom_client_Document_$getClientWidth__Lcom_google_gwt_dom_client_Document_2I(this$static){
  return (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static.compatMode, $intern_20)?this$static.documentElement:this$static.body).clientWidth | 0;
}

function com_google_gwt_dom_client_Document_$getElementById__Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2(this$static, elementId){
  return this$static.getElementById(elementId);
}

function com_google_gwt_dom_client_Document_$getScrollHeight__Lcom_google_gwt_dom_client_Document_2I(this$static){
  return ((java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static.compatMode, $intern_20)?this$static.documentElement:this$static.body).scrollHeight || 0) | 0;
}

function com_google_gwt_dom_client_Document_$getScrollWidth__Lcom_google_gwt_dom_client_Document_2I(this$static){
  return ((java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static.compatMode, $intern_20)?this$static.documentElement:this$static.body).scrollWidth || 0) | 0;
}

function java_lang_Enum_Enum__Ljava_lang_String_2IV(name_0, ordinal){
  this.java_lang_Enum_name = name_0;
  this.java_lang_Enum_ordinal = ordinal;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(5, 1, {3:1, 6:1, 5:1});
_.equals__Ljava_lang_Object_2Z = function java_lang_Enum_equals__Ljava_lang_Object_2Z(other){
  return this === other;
}
;
_.hashCode__I = function java_lang_Enum_hashCode__I(){
  return javaemul_internal_ObjectHashing_getHashCode__Ljava_lang_Object_2I(this);
}
;
_.toString__Ljava_lang_String_2 = function java_lang_Enum_toString__Ljava_lang_String_2(){
  return this.java_lang_Enum_name != null?this.java_lang_Enum_name:'' + this.java_lang_Enum_ordinal;
}
;
_.java_lang_Enum_ordinal = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Enum_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Enum', 5);
function com_google_gwt_dom_client_Style$Display_$clinit__V(){
  com_google_gwt_dom_client_Style$Display_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_dom_client_Style$Display_NONE = new com_google_gwt_dom_client_Style$Display$1_Style$Display$1__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_BLOCK = new com_google_gwt_dom_client_Style$Display$2_Style$Display$2__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_INLINE = new com_google_gwt_dom_client_Style$Display$3_Style$Display$3__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_INLINE_1BLOCK = new com_google_gwt_dom_client_Style$Display$4_Style$Display$4__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_INLINE_1TABLE = new com_google_gwt_dom_client_Style$Display$5_Style$Display$5__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_LIST_1ITEM = new com_google_gwt_dom_client_Style$Display$6_Style$Display$6__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_RUN_1IN = new com_google_gwt_dom_client_Style$Display$7_Style$Display$7__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_TABLE = new com_google_gwt_dom_client_Style$Display$8_Style$Display$8__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_TABLE_1CAPTION = new com_google_gwt_dom_client_Style$Display$9_Style$Display$9__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_TABLE_1COLUMN_1GROUP = new com_google_gwt_dom_client_Style$Display$10_Style$Display$10__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_TABLE_1HEADER_1GROUP = new com_google_gwt_dom_client_Style$Display$11_Style$Display$11__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_TABLE_1FOOTER_1GROUP = new com_google_gwt_dom_client_Style$Display$12_Style$Display$12__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_TABLE_1ROW_1GROUP = new com_google_gwt_dom_client_Style$Display$13_Style$Display$13__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_TABLE_1CELL = new com_google_gwt_dom_client_Style$Display$14_Style$Display$14__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_TABLE_1COLUMN = new com_google_gwt_dom_client_Style$Display$15_Style$Display$15__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_TABLE_1ROW = new com_google_gwt_dom_client_Style$Display$16_Style$Display$16__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_INITIAL = new com_google_gwt_dom_client_Style$Display$17_Style$Display$17__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_FLEX = new com_google_gwt_dom_client_Style$Display$18_Style$Display$18__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Display_INLINE_1FLEX = new com_google_gwt_dom_client_Style$Display$19_Style$Display$19__Ljava_lang_String_2IV;
}

function com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_dom_client_Style$Display_values___3Lcom_google_gwt_dom_client_Style$Display_2(){
  com_google_gwt_dom_client_Style$Display_$clinit__V();
  return com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display_12_1classLit, 1), $intern_9, 7, 0, [com_google_gwt_dom_client_Style$Display_NONE, com_google_gwt_dom_client_Style$Display_BLOCK, com_google_gwt_dom_client_Style$Display_INLINE, com_google_gwt_dom_client_Style$Display_INLINE_1BLOCK, com_google_gwt_dom_client_Style$Display_INLINE_1TABLE, com_google_gwt_dom_client_Style$Display_LIST_1ITEM, com_google_gwt_dom_client_Style$Display_RUN_1IN, com_google_gwt_dom_client_Style$Display_TABLE, com_google_gwt_dom_client_Style$Display_TABLE_1CAPTION, com_google_gwt_dom_client_Style$Display_TABLE_1COLUMN_1GROUP, com_google_gwt_dom_client_Style$Display_TABLE_1HEADER_1GROUP, com_google_gwt_dom_client_Style$Display_TABLE_1FOOTER_1GROUP, com_google_gwt_dom_client_Style$Display_TABLE_1ROW_1GROUP, com_google_gwt_dom_client_Style$Display_TABLE_1CELL, com_google_gwt_dom_client_Style$Display_TABLE_1COLUMN, com_google_gwt_dom_client_Style$Display_TABLE_1ROW, com_google_gwt_dom_client_Style$Display_INITIAL, com_google_gwt_dom_client_Style$Display_FLEX, com_google_gwt_dom_client_Style$Display_INLINE_1FLEX]);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(7, 5, $intern_21);
var com_google_gwt_dom_client_Style$Display_BLOCK, com_google_gwt_dom_client_Style$Display_FLEX, com_google_gwt_dom_client_Style$Display_INITIAL, com_google_gwt_dom_client_Style$Display_INLINE, com_google_gwt_dom_client_Style$Display_INLINE_1BLOCK, com_google_gwt_dom_client_Style$Display_INLINE_1FLEX, com_google_gwt_dom_client_Style$Display_INLINE_1TABLE, com_google_gwt_dom_client_Style$Display_LIST_1ITEM, com_google_gwt_dom_client_Style$Display_NONE, com_google_gwt_dom_client_Style$Display_RUN_1IN, com_google_gwt_dom_client_Style$Display_TABLE, com_google_gwt_dom_client_Style$Display_TABLE_1CAPTION, com_google_gwt_dom_client_Style$Display_TABLE_1CELL, com_google_gwt_dom_client_Style$Display_TABLE_1COLUMN, com_google_gwt_dom_client_Style$Display_TABLE_1COLUMN_1GROUP, com_google_gwt_dom_client_Style$Display_TABLE_1FOOTER_1GROUP, com_google_gwt_dom_client_Style$Display_TABLE_1HEADER_1GROUP, com_google_gwt_dom_client_Style$Display_TABLE_1ROW, com_google_gwt_dom_client_Style$Display_TABLE_1ROW_1GROUP;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Display', 7, com_google_gwt_dom_client_Style$Display_values___3Lcom_google_gwt_dom_client_Style$Display_2);
function com_google_gwt_dom_client_Style$Display$1_Style$Display$1__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'NONE', 0);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(161, 7, $intern_21, com_google_gwt_dom_client_Style$Display$1_Style$Display$1__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$1_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Display/1', 161, null);
function com_google_gwt_dom_client_Style$Display$10_Style$Display$10__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'TABLE_COLUMN_GROUP', 9);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(170, 7, $intern_21, com_google_gwt_dom_client_Style$Display$10_Style$Display$10__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$10_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Display/10', 170, null);
function com_google_gwt_dom_client_Style$Display$11_Style$Display$11__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'TABLE_HEADER_GROUP', 10);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(171, 7, $intern_21, com_google_gwt_dom_client_Style$Display$11_Style$Display$11__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$11_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Display/11', 171, null);
function com_google_gwt_dom_client_Style$Display$12_Style$Display$12__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'TABLE_FOOTER_GROUP', 11);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(172, 7, $intern_21, com_google_gwt_dom_client_Style$Display$12_Style$Display$12__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$12_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Display/12', 172, null);
function com_google_gwt_dom_client_Style$Display$13_Style$Display$13__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'TABLE_ROW_GROUP', 12);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(173, 7, $intern_21, com_google_gwt_dom_client_Style$Display$13_Style$Display$13__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$13_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Display/13', 173, null);
function com_google_gwt_dom_client_Style$Display$14_Style$Display$14__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'TABLE_CELL', 13);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(174, 7, $intern_21, com_google_gwt_dom_client_Style$Display$14_Style$Display$14__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$14_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Display/14', 174, null);
function com_google_gwt_dom_client_Style$Display$15_Style$Display$15__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'TABLE_COLUMN', 14);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(175, 7, $intern_21, com_google_gwt_dom_client_Style$Display$15_Style$Display$15__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$15_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Display/15', 175, null);
function com_google_gwt_dom_client_Style$Display$16_Style$Display$16__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'TABLE_ROW', 15);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(176, 7, $intern_21, com_google_gwt_dom_client_Style$Display$16_Style$Display$16__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$16_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Display/16', 176, null);
function com_google_gwt_dom_client_Style$Display$17_Style$Display$17__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'INITIAL', 16);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(177, 7, $intern_21, com_google_gwt_dom_client_Style$Display$17_Style$Display$17__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$17_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Display/17', 177, null);
function com_google_gwt_dom_client_Style$Display$18_Style$Display$18__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'FLEX', 17);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(178, 7, $intern_21, com_google_gwt_dom_client_Style$Display$18_Style$Display$18__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$18_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Display/18', 178, null);
function com_google_gwt_dom_client_Style$Display$19_Style$Display$19__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'INLINE_FLEX', 18);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(179, 7, $intern_21, com_google_gwt_dom_client_Style$Display$19_Style$Display$19__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$19_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Display/19', 179, null);
function com_google_gwt_dom_client_Style$Display$2_Style$Display$2__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'BLOCK', 1);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(162, 7, $intern_21, com_google_gwt_dom_client_Style$Display$2_Style$Display$2__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$2_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Display/2', 162, null);
function com_google_gwt_dom_client_Style$Display$3_Style$Display$3__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'INLINE', 2);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(163, 7, $intern_21, com_google_gwt_dom_client_Style$Display$3_Style$Display$3__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$3_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Display/3', 163, null);
function com_google_gwt_dom_client_Style$Display$4_Style$Display$4__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'INLINE_BLOCK', 3);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(164, 7, $intern_21, com_google_gwt_dom_client_Style$Display$4_Style$Display$4__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$4_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Display/4', 164, null);
function com_google_gwt_dom_client_Style$Display$5_Style$Display$5__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'INLINE_TABLE', 4);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(165, 7, $intern_21, com_google_gwt_dom_client_Style$Display$5_Style$Display$5__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$5_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Display/5', 165, null);
function com_google_gwt_dom_client_Style$Display$6_Style$Display$6__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'LIST_ITEM', 5);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(166, 7, $intern_21, com_google_gwt_dom_client_Style$Display$6_Style$Display$6__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$6_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Display/6', 166, null);
function com_google_gwt_dom_client_Style$Display$7_Style$Display$7__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'RUN_IN', 6);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(167, 7, $intern_21, com_google_gwt_dom_client_Style$Display$7_Style$Display$7__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$7_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Display/7', 167, null);
function com_google_gwt_dom_client_Style$Display$8_Style$Display$8__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'TABLE', 7);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(168, 7, $intern_21, com_google_gwt_dom_client_Style$Display$8_Style$Display$8__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$8_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Display/8', 168, null);
function com_google_gwt_dom_client_Style$Display$9_Style$Display$9__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Display_Style$Display__Ljava_lang_String_2IV.call(this, 'TABLE_CAPTION', 8);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(169, 7, $intern_21, com_google_gwt_dom_client_Style$Display$9_Style$Display$9__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Display$9_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Display/9', 169, null);
function com_google_gwt_dom_client_Style$TextAlign_$clinit__V(){
  com_google_gwt_dom_client_Style$TextAlign_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_dom_client_Style$TextAlign_CENTER = new com_google_gwt_dom_client_Style$TextAlign$1_Style$TextAlign$1__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$TextAlign_JUSTIFY = new com_google_gwt_dom_client_Style$TextAlign$2_Style$TextAlign$2__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$TextAlign_LEFT = new com_google_gwt_dom_client_Style$TextAlign$3_Style$TextAlign$3__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$TextAlign_RIGHT = new com_google_gwt_dom_client_Style$TextAlign$4_Style$TextAlign$4__Ljava_lang_String_2IV;
}

function com_google_gwt_dom_client_Style$TextAlign_Style$TextAlign__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_dom_client_Style$TextAlign_values___3Lcom_google_gwt_dom_client_Style$TextAlign_2(){
  com_google_gwt_dom_client_Style$TextAlign_$clinit__V();
  return com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign_12_1classLit, 1), $intern_9, 21, 0, [com_google_gwt_dom_client_Style$TextAlign_CENTER, com_google_gwt_dom_client_Style$TextAlign_JUSTIFY, com_google_gwt_dom_client_Style$TextAlign_LEFT, com_google_gwt_dom_client_Style$TextAlign_RIGHT]);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(21, 5, $intern_23);
var com_google_gwt_dom_client_Style$TextAlign_CENTER, com_google_gwt_dom_client_Style$TextAlign_JUSTIFY, com_google_gwt_dom_client_Style$TextAlign_LEFT, com_google_gwt_dom_client_Style$TextAlign_RIGHT;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/TextAlign', 21, com_google_gwt_dom_client_Style$TextAlign_values___3Lcom_google_gwt_dom_client_Style$TextAlign_2);
function com_google_gwt_dom_client_Style$TextAlign$1_Style$TextAlign$1__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$TextAlign_Style$TextAlign__Ljava_lang_String_2IV.call(this, 'CENTER', 0);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(180, 21, $intern_23, com_google_gwt_dom_client_Style$TextAlign$1_Style$TextAlign$1__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign$1_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/TextAlign/1', 180, null);
function com_google_gwt_dom_client_Style$TextAlign$2_Style$TextAlign$2__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$TextAlign_Style$TextAlign__Ljava_lang_String_2IV.call(this, 'JUSTIFY', 1);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(181, 21, $intern_23, com_google_gwt_dom_client_Style$TextAlign$2_Style$TextAlign$2__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign$2_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/TextAlign/2', 181, null);
function com_google_gwt_dom_client_Style$TextAlign$3_Style$TextAlign$3__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$TextAlign_Style$TextAlign__Ljava_lang_String_2IV.call(this, 'LEFT', 2);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(182, 21, $intern_23, com_google_gwt_dom_client_Style$TextAlign$3_Style$TextAlign$3__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign$3_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/TextAlign/3', 182, null);
function com_google_gwt_dom_client_Style$TextAlign$4_Style$TextAlign$4__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$TextAlign_Style$TextAlign__Ljava_lang_String_2IV.call(this, 'RIGHT', 3);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(183, 21, $intern_23, com_google_gwt_dom_client_Style$TextAlign$4_Style$TextAlign$4__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign$4_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/TextAlign/4', 183, null);
function com_google_gwt_dom_client_Style$Unit_$clinit__V(){
  com_google_gwt_dom_client_Style$Unit_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_dom_client_Style$Unit_PX = new com_google_gwt_dom_client_Style$Unit$1_Style$Unit$1__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Unit_PCT = new com_google_gwt_dom_client_Style$Unit$2_Style$Unit$2__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Unit_EM = new com_google_gwt_dom_client_Style$Unit$3_Style$Unit$3__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Unit_EX = new com_google_gwt_dom_client_Style$Unit$4_Style$Unit$4__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Unit_PT = new com_google_gwt_dom_client_Style$Unit$5_Style$Unit$5__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Unit_PC = new com_google_gwt_dom_client_Style$Unit$6_Style$Unit$6__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Unit_IN = new com_google_gwt_dom_client_Style$Unit$7_Style$Unit$7__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Unit_CM = new com_google_gwt_dom_client_Style$Unit$8_Style$Unit$8__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Unit_MM = new com_google_gwt_dom_client_Style$Unit$9_Style$Unit$9__Ljava_lang_String_2IV;
}

function com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_dom_client_Style$Unit_values___3Lcom_google_gwt_dom_client_Style$Unit_2(){
  com_google_gwt_dom_client_Style$Unit_$clinit__V();
  return com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit_12_1classLit, 1), $intern_9, 17, 0, [com_google_gwt_dom_client_Style$Unit_PX, com_google_gwt_dom_client_Style$Unit_PCT, com_google_gwt_dom_client_Style$Unit_EM, com_google_gwt_dom_client_Style$Unit_EX, com_google_gwt_dom_client_Style$Unit_PT, com_google_gwt_dom_client_Style$Unit_PC, com_google_gwt_dom_client_Style$Unit_IN, com_google_gwt_dom_client_Style$Unit_CM, com_google_gwt_dom_client_Style$Unit_MM]);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(17, 5, $intern_24);
var com_google_gwt_dom_client_Style$Unit_CM, com_google_gwt_dom_client_Style$Unit_EM, com_google_gwt_dom_client_Style$Unit_EX, com_google_gwt_dom_client_Style$Unit_IN, com_google_gwt_dom_client_Style$Unit_MM, com_google_gwt_dom_client_Style$Unit_PC, com_google_gwt_dom_client_Style$Unit_PCT, com_google_gwt_dom_client_Style$Unit_PT, com_google_gwt_dom_client_Style$Unit_PX;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Unit', 17, com_google_gwt_dom_client_Style$Unit_values___3Lcom_google_gwt_dom_client_Style$Unit_2);
function com_google_gwt_dom_client_Style$Unit$1_Style$Unit$1__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV.call(this, 'PX', 0);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(152, 17, $intern_24, com_google_gwt_dom_client_Style$Unit$1_Style$Unit$1__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit$1_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Unit/1', 152, null);
function com_google_gwt_dom_client_Style$Unit$2_Style$Unit$2__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV.call(this, 'PCT', 1);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(153, 17, $intern_24, com_google_gwt_dom_client_Style$Unit$2_Style$Unit$2__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit$2_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Unit/2', 153, null);
function com_google_gwt_dom_client_Style$Unit$3_Style$Unit$3__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV.call(this, 'EM', 2);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(154, 17, $intern_24, com_google_gwt_dom_client_Style$Unit$3_Style$Unit$3__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit$3_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Unit/3', 154, null);
function com_google_gwt_dom_client_Style$Unit$4_Style$Unit$4__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV.call(this, 'EX', 3);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(155, 17, $intern_24, com_google_gwt_dom_client_Style$Unit$4_Style$Unit$4__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit$4_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Unit/4', 155, null);
function com_google_gwt_dom_client_Style$Unit$5_Style$Unit$5__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV.call(this, 'PT', 4);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(156, 17, $intern_24, com_google_gwt_dom_client_Style$Unit$5_Style$Unit$5__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit$5_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Unit/5', 156, null);
function com_google_gwt_dom_client_Style$Unit$6_Style$Unit$6__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV.call(this, 'PC', 5);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(157, 17, $intern_24, com_google_gwt_dom_client_Style$Unit$6_Style$Unit$6__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit$6_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Unit/6', 157, null);
function com_google_gwt_dom_client_Style$Unit$7_Style$Unit$7__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV.call(this, 'IN', 6);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(158, 17, $intern_24, com_google_gwt_dom_client_Style$Unit$7_Style$Unit$7__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit$7_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Unit/7', 158, null);
function com_google_gwt_dom_client_Style$Unit$8_Style$Unit$8__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV.call(this, 'CM', 7);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(159, 17, $intern_24, com_google_gwt_dom_client_Style$Unit$8_Style$Unit$8__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit$8_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Unit/8', 159, null);
function com_google_gwt_dom_client_Style$Unit$9_Style$Unit$9__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Unit_Style$Unit__Ljava_lang_String_2IV.call(this, 'MM', 8);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(160, 17, $intern_24, com_google_gwt_dom_client_Style$Unit$9_Style$Unit$9__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Unit$9_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_22, 'Style/Unit/9', 160, null);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(254, 1, {});
_.toString__Ljava_lang_String_2 = function com_google_web_bindery_event_shared_Event_toString__Ljava_lang_String_2(){
  return 'An event type';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1Event_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_25, 'Event', 254);
function com_google_gwt_event_shared_GwtEvent_$overrideSource__Lcom_google_gwt_event_shared_GwtEvent_2Ljava_lang_Object_2V(this$static, source){
  this$static.com_google_web_bindery_event_shared_Event_source = source;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(255, 254, {});
_.revive__V = function com_google_gwt_event_shared_GwtEvent_revive__V(){
  this.com_google_gwt_event_shared_GwtEvent_dead = false;
  this.com_google_web_bindery_event_shared_Event_source = null;
}
;
_.com_google_gwt_event_shared_GwtEvent_dead = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1GwtEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_26, 'GwtEvent', 255);
function com_google_gwt_event_dom_client_DomEvent_$setNativeEvent__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(this$static, nativeEvent){
  this$static.com_google_gwt_event_dom_client_DomEvent_nativeEvent = nativeEvent;
}

function com_google_gwt_event_dom_client_DomEvent_$setRelativeElement__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_Element_2V(this$static, relativeElem){
  this$static.com_google_gwt_event_dom_client_DomEvent_relativeElem = relativeElem;
}

function com_google_gwt_event_dom_client_DomEvent_fireNativeEvent__Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_event_shared_HasHandlers_2Lcom_google_gwt_dom_client_Element_2V(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (com_google_gwt_event_dom_client_DomEvent_registered) {
    types = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_event_dom_client_PrivateMap_$unsafeGet__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2(com_google_gwt_event_dom_client_DomEvent_registered, nativeEvent.type), 30);
    if (types) {
      for (type$iterator = types.iterator__Ljava_util_Iterator_2(); type$iterator.hasNext__Z();) {
        type_0 = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(type$iterator.next__Ljava_lang_Object_2(), 25);
        currentNative = type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_nativeEvent;
        currentRelativeElem = type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_relativeElem;
        com_google_gwt_event_dom_client_DomEvent_$setNativeEvent__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, nativeEvent);
        com_google_gwt_event_dom_client_DomEvent_$setRelativeElement__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_Element_2V(type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, relativeElem);
        com_google_gwt_user_client_ui_Widget_$fireEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_GwtEvent_2V(handlerSource, type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight);
        com_google_gwt_event_dom_client_DomEvent_$setNativeEvent__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, currentNative);
        com_google_gwt_event_dom_client_DomEvent_$setRelativeElement__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_Element_2V(type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, currentRelativeElem);
      }
    }
  }
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(260, 255, {});
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_event_dom_client_DomEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return this.getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2();
}
;
var com_google_gwt_event_dom_client_DomEvent_registered;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1DomEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_27, 'DomEvent', 260);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(261, 260, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1HumanInputEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_27, 'HumanInputEvent', 261);
function com_google_gwt_event_dom_client_MouseEvent_$getX__Lcom_google_gwt_event_dom_client_MouseEvent_2I(this$static){
  var e, relativeElem, com_google_gwt_dom_client_DOMImplIE9_$getScrollLeft__Lcom_google_gwt_dom_client_DOMImplIE9_2Lcom_google_gwt_dom_client_Element_2I_left_0;
  relativeElem = this$static.com_google_gwt_event_dom_client_DomEvent_relativeElem;
  if (relativeElem) {
    return e = this$static.com_google_gwt_event_dom_client_DomEvent_nativeEvent , ((e.clientX || 0) | 0) - com_google_gwt_dom_client_DOMImplIE9_$getAbsoluteLeft__Lcom_google_gwt_dom_client_DOMImplIE9_2Lcom_google_gwt_dom_client_Element_2I(relativeElem) + (com_google_gwt_dom_client_DOMImplIE9_$getScrollLeft__Lcom_google_gwt_dom_client_DOMImplIE9_2Lcom_google_gwt_dom_client_Element_2I_left_0 = (relativeElem.scrollLeft || 0) | 0 , com_google_gwt_dom_client_DOMImplStandardBase_$isRTL__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Element_2Z(relativeElem) && (com_google_gwt_dom_client_DOMImplIE9_$getScrollLeft__Lcom_google_gwt_dom_client_DOMImplIE9_2Lcom_google_gwt_dom_client_Element_2I_left_0 = -com_google_gwt_dom_client_DOMImplIE9_$getScrollLeft__Lcom_google_gwt_dom_client_DOMImplIE9_2Lcom_google_gwt_dom_client_Element_2I_left_0) , com_google_gwt_dom_client_DOMImplIE9_$getScrollLeft__Lcom_google_gwt_dom_client_DOMImplIE9_2Lcom_google_gwt_dom_client_Element_2I_left_0) + ($wnd.pageXOffset | 0);
  }
  return (this$static.com_google_gwt_event_dom_client_DomEvent_nativeEvent.clientX || 0) | 0;
}

function com_google_gwt_event_dom_client_MouseEvent_$getY__Lcom_google_gwt_event_dom_client_MouseEvent_2I(this$static){
  var e, relativeElem;
  relativeElem = this$static.com_google_gwt_event_dom_client_DomEvent_relativeElem;
  if (relativeElem) {
    return e = this$static.com_google_gwt_event_dom_client_DomEvent_nativeEvent , ((e.clientY || 0) | 0) - (com_google_gwt_dom_client_DOMImplIE9_$getBoundingClientRectTop__Lcom_google_gwt_dom_client_DOMImplIE9_2Lcom_google_gwt_dom_client_Element_2D(relativeElem) + $wnd.pageYOffset | 0) + ((relativeElem.scrollTop || 0) | 0) + ($wnd.pageYOffset | 0);
  }
  return (this$static.com_google_gwt_event_dom_client_DomEvent_nativeEvent.clientY || 0) | 0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(262, 261, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1MouseEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_27, 'MouseEvent', 262);
function com_google_gwt_event_dom_client_ClickEvent_$clinit__V(){
  com_google_gwt_event_dom_client_ClickEvent_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_event_dom_client_ClickEvent_TYPE = new com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V('click', new com_google_gwt_event_dom_client_ClickEvent_ClickEvent__V);
}

function com_google_gwt_event_dom_client_ClickEvent_ClickEvent__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(185, 262, {}, com_google_gwt_event_dom_client_ClickEvent_ClickEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_dom_client_ClickEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 102).onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V(this);
}
;
_.getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2 = function com_google_gwt_event_dom_client_ClickEvent_getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2(){
  return com_google_gwt_event_dom_client_ClickEvent_TYPE;
}
;
var com_google_gwt_event_dom_client_ClickEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1ClickEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_27, 'ClickEvent', 185);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(131, 1, {});
_.hashCode__I = function com_google_web_bindery_event_shared_Event$Type_hashCode__I(){
  return this.com_google_web_bindery_event_shared_Event$Type_index;
}
;
_.toString__Ljava_lang_String_2 = function com_google_web_bindery_event_shared_Event$Type_toString__Ljava_lang_String_2(){
  return 'Event type';
}
;
_.com_google_web_bindery_event_shared_Event$Type_index = 0;
var com_google_web_bindery_event_shared_Event$Type_nextHashCode = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1Event$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_25, 'Event/Type', 131);
function com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V(){
  this.com_google_web_bindery_event_shared_Event$Type_index = ++com_google_web_bindery_event_shared_Event$Type_nextHashCode;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(36, 131, {}, com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1GwtEvent$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_26, 'GwtEvent/Type', 36);
function com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V(eventName, flyweight){
  var types;
  com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V.call(this);
  this.com_google_gwt_event_dom_client_DomEvent$Type_flyweight = flyweight;
  !com_google_gwt_event_dom_client_DomEvent_registered && (com_google_gwt_event_dom_client_DomEvent_registered = new com_google_gwt_event_dom_client_PrivateMap_PrivateMap__V);
  types = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_event_dom_client_PrivateMap_$unsafeGet__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2(com_google_gwt_event_dom_client_DomEvent_registered, eventName), 30);
  if (!types) {
    types = new java_util_ArrayList_ArrayList__V;
    com_google_gwt_event_dom_client_PrivateMap_$unsafePut__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2V(com_google_gwt_event_dom_client_DomEvent_registered, eventName, types);
  }
  types.add__Ljava_lang_Object_2Z(this);
  this.com_google_gwt_event_dom_client_DomEvent$Type_name = eventName;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(25, 36, {25:1}, com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1DomEvent$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_27, 'DomEvent/Type', 25);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(263, 260, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1KeyEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_27, 'KeyEvent', 263);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(264, 263, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1KeyCodeEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_27, 'KeyCodeEvent', 264);
function com_google_gwt_event_dom_client_KeyUpEvent_$clinit__V(){
  com_google_gwt_event_dom_client_KeyUpEvent_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_event_dom_client_KeyUpEvent_TYPE = new com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V('keyup', new com_google_gwt_event_dom_client_KeyUpEvent_KeyUpEvent__V);
}

function com_google_gwt_event_dom_client_KeyUpEvent_KeyUpEvent__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(186, 264, {}, com_google_gwt_event_dom_client_KeyUpEvent_KeyUpEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_dom_client_KeyUpEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 238).onKeyUp__Lcom_google_gwt_event_dom_client_KeyUpEvent_2V(this);
}
;
_.getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2 = function com_google_gwt_event_dom_client_KeyUpEvent_getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2(){
  return com_google_gwt_event_dom_client_KeyUpEvent_TYPE;
}
;
var com_google_gwt_event_dom_client_KeyUpEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1KeyUpEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_27, 'KeyUpEvent', 186);
function com_google_gwt_event_dom_client_MouseDownEvent_$clinit__V(){
  com_google_gwt_event_dom_client_MouseDownEvent_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_event_dom_client_MouseDownEvent_TYPE = new com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V('mousedown', new com_google_gwt_event_dom_client_MouseDownEvent_MouseDownEvent__V);
}

function com_google_gwt_event_dom_client_MouseDownEvent_$dispatch__Lcom_google_gwt_event_dom_client_MouseDownEvent_2Lcom_google_gwt_event_dom_client_MouseDownHandler_2V(this$static, handler){
  com_google_gwt_user_client_ui_DialogBox_$beginDragging__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_event_dom_client_MouseDownEvent_2V(handler.com_google_gwt_user_client_ui_DialogBox$MouseHandler_this$01, this$static);
}

function com_google_gwt_event_dom_client_MouseDownEvent_MouseDownEvent__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(205, 262, {}, com_google_gwt_event_dom_client_MouseDownEvent_MouseDownEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_dom_client_MouseDownEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_event_dom_client_MouseDownEvent_$dispatch__Lcom_google_gwt_event_dom_client_MouseDownEvent_2Lcom_google_gwt_event_dom_client_MouseDownHandler_2V(this, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 275));
}
;
_.getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2 = function com_google_gwt_event_dom_client_MouseDownEvent_getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2(){
  return com_google_gwt_event_dom_client_MouseDownEvent_TYPE;
}
;
var com_google_gwt_event_dom_client_MouseDownEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1MouseDownEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_27, 'MouseDownEvent', 205);
function com_google_gwt_event_dom_client_MouseMoveEvent_$clinit__V(){
  com_google_gwt_event_dom_client_MouseMoveEvent_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_event_dom_client_MouseMoveEvent_TYPE = new com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V('mousemove', new com_google_gwt_event_dom_client_MouseMoveEvent_MouseMoveEvent__V);
}

function com_google_gwt_event_dom_client_MouseMoveEvent_$dispatch__Lcom_google_gwt_event_dom_client_MouseMoveEvent_2Lcom_google_gwt_event_dom_client_MouseMoveHandler_2V(this$static, handler){
  com_google_gwt_user_client_ui_DialogBox_$continueDragging__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_event_dom_client_MouseMoveEvent_2V(handler.com_google_gwt_user_client_ui_DialogBox$MouseHandler_this$01, this$static);
}

function com_google_gwt_event_dom_client_MouseMoveEvent_MouseMoveEvent__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(207, 262, {}, com_google_gwt_event_dom_client_MouseMoveEvent_MouseMoveEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_dom_client_MouseMoveEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_event_dom_client_MouseMoveEvent_$dispatch__Lcom_google_gwt_event_dom_client_MouseMoveEvent_2Lcom_google_gwt_event_dom_client_MouseMoveHandler_2V(this, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 279));
}
;
_.getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2 = function com_google_gwt_event_dom_client_MouseMoveEvent_getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2(){
  return com_google_gwt_event_dom_client_MouseMoveEvent_TYPE;
}
;
var com_google_gwt_event_dom_client_MouseMoveEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1MouseMoveEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_27, 'MouseMoveEvent', 207);
function com_google_gwt_event_dom_client_MouseOutEvent_$clinit__V(){
  com_google_gwt_event_dom_client_MouseOutEvent_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_event_dom_client_MouseOutEvent_TYPE = new com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V('mouseout', new com_google_gwt_event_dom_client_MouseOutEvent_MouseOutEvent__V);
}

function com_google_gwt_event_dom_client_MouseOutEvent_MouseOutEvent__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(209, 262, {}, com_google_gwt_event_dom_client_MouseOutEvent_MouseOutEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_dom_client_MouseOutEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 277);
}
;
_.getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2 = function com_google_gwt_event_dom_client_MouseOutEvent_getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2(){
  return com_google_gwt_event_dom_client_MouseOutEvent_TYPE;
}
;
var com_google_gwt_event_dom_client_MouseOutEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1MouseOutEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_27, 'MouseOutEvent', 209);
function com_google_gwt_event_dom_client_MouseOverEvent_$clinit__V(){
  com_google_gwt_event_dom_client_MouseOverEvent_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_event_dom_client_MouseOverEvent_TYPE = new com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V('mouseover', new com_google_gwt_event_dom_client_MouseOverEvent_MouseOverEvent__V);
}

function com_google_gwt_event_dom_client_MouseOverEvent_MouseOverEvent__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(208, 262, {}, com_google_gwt_event_dom_client_MouseOverEvent_MouseOverEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_dom_client_MouseOverEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 278);
}
;
_.getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2 = function com_google_gwt_event_dom_client_MouseOverEvent_getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2(){
  return com_google_gwt_event_dom_client_MouseOverEvent_TYPE;
}
;
var com_google_gwt_event_dom_client_MouseOverEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1MouseOverEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_27, 'MouseOverEvent', 208);
function com_google_gwt_event_dom_client_MouseUpEvent_$clinit__V(){
  com_google_gwt_event_dom_client_MouseUpEvent_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_event_dom_client_MouseUpEvent_TYPE = new com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V('mouseup', new com_google_gwt_event_dom_client_MouseUpEvent_MouseUpEvent__V);
}

function com_google_gwt_event_dom_client_MouseUpEvent_$dispatch__Lcom_google_gwt_event_dom_client_MouseUpEvent_2Lcom_google_gwt_event_dom_client_MouseUpHandler_2V(this$static, handler){
  com_google_gwt_user_client_ui_DialogBox_$endDragging__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_event_dom_client_MouseUpEvent_2V(handler.com_google_gwt_user_client_ui_DialogBox$MouseHandler_this$01, this$static);
}

function com_google_gwt_event_dom_client_MouseUpEvent_MouseUpEvent__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(206, 262, {}, com_google_gwt_event_dom_client_MouseUpEvent_MouseUpEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_dom_client_MouseUpEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_event_dom_client_MouseUpEvent_$dispatch__Lcom_google_gwt_event_dom_client_MouseUpEvent_2Lcom_google_gwt_event_dom_client_MouseUpHandler_2V(this, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 276));
}
;
_.getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2 = function com_google_gwt_event_dom_client_MouseUpEvent_getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2(){
  return com_google_gwt_event_dom_client_MouseUpEvent_TYPE;
}
;
var com_google_gwt_event_dom_client_MouseUpEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1MouseUpEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_27, 'MouseUpEvent', 206);
function com_google_gwt_event_dom_client_PrivateMap_$unsafeGet__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  return this$static.com_google_gwt_event_dom_client_PrivateMap_map[key];
}

function com_google_gwt_event_dom_client_PrivateMap_$unsafePut__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2V(this$static, key, value_0){
  this$static.com_google_gwt_event_dom_client_PrivateMap_map[key] = value_0;
}

function com_google_gwt_event_dom_client_PrivateMap_PrivateMap__V(){
  this.com_google_gwt_event_dom_client_PrivateMap_map = {};
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(203, 1, {}, com_google_gwt_event_dom_client_PrivateMap_PrivateMap__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1PrivateMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_27, 'PrivateMap', 203);
function com_google_gwt_event_logical_shared_CloseEvent_CloseEvent__Ljava_lang_Object_2ZV(){
}

function com_google_gwt_event_logical_shared_CloseEvent_fire__Lcom_google_gwt_event_logical_shared_HasCloseHandlers_2Ljava_lang_Object_2ZV(source){
  var event_0;
  if (com_google_gwt_event_logical_shared_CloseEvent_TYPE) {
    event_0 = new com_google_gwt_event_logical_shared_CloseEvent_CloseEvent__Ljava_lang_Object_2ZV;
    source.fireEvent__Lcom_google_gwt_event_shared_GwtEvent_2V(event_0);
  }
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(202, 255, {}, com_google_gwt_event_logical_shared_CloseEvent_CloseEvent__Ljava_lang_Object_2ZV);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_logical_shared_CloseEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 280);
  com_google_gwt_user_client_ui_RootPanel_detachWidgets__V();
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_event_logical_shared_CloseEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_event_logical_shared_CloseEvent_TYPE;
}
;
var com_google_gwt_event_logical_shared_CloseEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1logical_1shared_1CloseEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_28, 'CloseEvent', 202);
function com_google_gwt_event_logical_shared_ResizeEvent_ResizeEvent__IIV(width_0){
  this.com_google_gwt_event_logical_shared_ResizeEvent_width = width_0;
}

function com_google_gwt_event_logical_shared_ResizeEvent_fire__Lcom_google_gwt_event_logical_shared_HasResizeHandlers_2IIV(source, width_0){
  var event_0;
  if (com_google_gwt_event_logical_shared_ResizeEvent_TYPE) {
    event_0 = new com_google_gwt_event_logical_shared_ResizeEvent_ResizeEvent__IIV(width_0);
    com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(source, event_0);
  }
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(213, 255, {}, com_google_gwt_event_logical_shared_ResizeEvent_ResizeEvent__IIV);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_logical_shared_ResizeEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 235).onResize__Lcom_google_gwt_event_logical_shared_ResizeEvent_2V(this);
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_event_logical_shared_ResizeEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_event_logical_shared_ResizeEvent_TYPE;
}
;
_.com_google_gwt_event_logical_shared_ResizeEvent_width = 0;
var com_google_gwt_event_logical_shared_ResizeEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1logical_1shared_1ResizeEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_28, 'ResizeEvent', 213);
function com_google_gwt_event_logical_shared_ValueChangeEvent_$dispatch__Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2Lcom_google_gwt_event_logical_shared_ValueChangeHandler_2V(handler){
  handler.com_google_gwt_user_client_ui_PopupPanel$4_this$01.com_google_gwt_user_client_ui_PopupPanel_autoHideOnHistoryEvents && handler.com_google_gwt_user_client_ui_PopupPanel$4_this$01.hide__ZV(false);
}

function com_google_gwt_event_logical_shared_ValueChangeEvent_ValueChangeEvent__Ljava_lang_Object_2V(){
}

function com_google_gwt_event_logical_shared_ValueChangeEvent_fire__Lcom_google_gwt_event_logical_shared_HasValueChangeHandlers_2Ljava_lang_Object_2V(source){
  var event_0;
  if (com_google_gwt_event_logical_shared_ValueChangeEvent_TYPE) {
    event_0 = new com_google_gwt_event_logical_shared_ValueChangeEvent_ValueChangeEvent__Ljava_lang_Object_2V;
    com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(source.com_google_gwt_user_client_History$HistoryEventSource_handlers, event_0);
  }
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(215, 255, {}, com_google_gwt_event_logical_shared_ValueChangeEvent_ValueChangeEvent__Ljava_lang_Object_2V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_logical_shared_ValueChangeEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_event_logical_shared_ValueChangeEvent_$dispatch__Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2Lcom_google_gwt_event_logical_shared_ValueChangeHandler_2V(com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 274));
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_event_logical_shared_ValueChangeEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_event_logical_shared_ValueChangeEvent_TYPE;
}
;
var com_google_gwt_event_logical_shared_ValueChangeEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1logical_1shared_1ValueChangeEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_28, 'ValueChangeEvent', 215);
function com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static, type_0, handler){
  return new com_google_gwt_event_shared_LegacyHandlerWrapper_LegacyHandlerWrapper__Lcom_google_web_bindery_event_shared_HandlerRegistration_2V(com_google_web_bindery_event_shared_SimpleEventBus_$doAdd__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2Lcom_google_web_bindery_event_shared_HandlerRegistration_2(this$static.com_google_gwt_event_shared_HandlerManager_eventBus, type_0, handler));
}

function com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, event_0){
  var e, oldSource;
  !event_0.com_google_gwt_event_shared_GwtEvent_dead || event_0.revive__V();
  oldSource = event_0.com_google_web_bindery_event_shared_Event_source;
  com_google_gwt_event_shared_GwtEvent_$overrideSource__Lcom_google_gwt_event_shared_GwtEvent_2Ljava_lang_Object_2V(event_0, this$static.com_google_gwt_event_shared_HandlerManager_source);
  try {
    com_google_web_bindery_event_shared_SimpleEventBus_$doFire__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event_2Ljava_lang_Object_2V(this$static.com_google_gwt_event_shared_HandlerManager_eventBus, event_0);
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 35)) {
      e = $e0;
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V(e.com_google_web_bindery_event_shared_UmbrellaException_causes));
    }
     else 
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
   finally {
    oldSource == null?(event_0.com_google_gwt_event_shared_GwtEvent_dead = true , event_0.com_google_web_bindery_event_shared_Event_source = null):(event_0.com_google_web_bindery_event_shared_Event_source = oldSource);
  }
}

function com_google_gwt_event_shared_HandlerManager_$isEventHandled__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Z(this$static, e){
  return com_google_web_bindery_event_shared_SimpleEventBus_$isEventHandled__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Z(this$static.com_google_gwt_event_shared_HandlerManager_eventBus, e);
}

function com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V(source){
  com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2ZV.call(this, source, false);
}

function com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2ZV(source, fireInReverseOrder){
  this.com_google_gwt_event_shared_HandlerManager_eventBus = new com_google_gwt_event_shared_HandlerManager$Bus_HandlerManager$Bus__ZV(fireInReverseOrder);
  this.com_google_gwt_event_shared_HandlerManager_source = source;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(44, 1, {11:1}, com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V, com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2ZV);
_.fireEvent__Lcom_google_gwt_event_shared_GwtEvent_2V = function com_google_gwt_event_shared_HandlerManager_fireEvent__Lcom_google_gwt_event_shared_GwtEvent_2V(event_0){
  com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(this, event_0);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1HandlerManager_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_26, 'HandlerManager', 44);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(259, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1EventBus_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_25, 'EventBus', 259);
function com_google_web_bindery_event_shared_SimpleEventBus_$defer__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_SimpleEventBus$Command_2V(this$static, command){
  !this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas && (this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas = new java_util_ArrayList_ArrayList__V);
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas, command);
}

function com_google_web_bindery_event_shared_SimpleEventBus_$doAdd__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2Lcom_google_web_bindery_event_shared_HandlerRegistration_2(this$static, type_0, handler){
  var l;
  if (!type_0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V('Cannot add a handler with a null type'));
  }
  if (!handler) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V('Cannot add a null handler'));
  }
  this$static.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth > 0?com_google_web_bindery_event_shared_SimpleEventBus_$defer__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_SimpleEventBus$Command_2V(this$static, new com_google_web_bindery_event_shared_SimpleEventBus$2_SimpleEventBus$2__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$static, type_0, handler)):(l = com_google_web_bindery_event_shared_SimpleEventBus_$ensureHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0, null) , l.add__Ljava_lang_Object_2Z(handler));
  return new com_google_web_bindery_event_shared_SimpleEventBus$1_SimpleEventBus$1__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$static, type_0, handler);
}

function com_google_web_bindery_event_shared_SimpleEventBus_$doAddNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static, type_0, source, handler){
  var l;
  l = com_google_web_bindery_event_shared_SimpleEventBus_$ensureHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0, source);
  l.add__Ljava_lang_Object_2Z(handler);
}

function com_google_web_bindery_event_shared_SimpleEventBus_$doFire__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event_2Ljava_lang_Object_2V(this$static, event_0){
  var causes, directHandlers, e, handler, handlers, it;
  if (!event_0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V('Cannot fire null event'));
  }
  try {
    ++this$static.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth;
    handlers = (directHandlers = com_google_web_bindery_event_shared_SimpleEventBus_$getHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, event_0.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(), null) , directHandlers);
    causes = null;
    it = this$static.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder?handlers.listIterator__ILjava_util_ListIterator_2(handlers.size__I()):handlers.listIterator__Ljava_util_ListIterator_2();
    while (this$static.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder?it.hasPrevious__Z():it.hasNext__Z()) {
      handler = this$static.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder?it.previous__Ljava_lang_Object_2():it.next__Ljava_lang_Object_2();
      try {
        event_0.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 27));
      }
       catch ($e0) {
        $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
        if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 4)) {
          e = $e0;
          !causes && (causes = new java_util_HashSet_HashSet__V);
          java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(causes.java_util_HashSet_map, e, causes);
        }
         else 
          throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      }
    }
    if (causes) {
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_web_bindery_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V(causes));
    }
  }
   finally {
    --this$static.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth;
    this$static.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth == 0 && com_google_web_bindery_event_shared_SimpleEventBus_$handleQueuedAddsAndRemoves__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$static);
  }
}

function com_google_web_bindery_event_shared_SimpleEventBus_$doRemoveNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static, type_0, source, handler){
  var l, removed, com_google_web_bindery_event_shared_SimpleEventBus_$prune__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2V_sourceMap_0;
  l = com_google_web_bindery_event_shared_SimpleEventBus_$getHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0, source);
  removed = l.remove__Ljava_lang_Object_2Z(handler);
  removed && l.isEmpty__Z() && (com_google_web_bindery_event_shared_SimpleEventBus_$prune__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2V_sourceMap_0 = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map, type_0), 49) , com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_InternalHashCodeMap_$remove__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(com_google_web_bindery_event_shared_SimpleEventBus_$prune__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2V_sourceMap_0.java_util_AbstractHashMap_hashCodeMap, source), 30) , com_google_web_bindery_event_shared_SimpleEventBus_$prune__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2V_sourceMap_0.java_util_AbstractHashMap_hashCodeMap.java_util_InternalHashCodeMap_size + com_google_web_bindery_event_shared_SimpleEventBus_$prune__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2V_sourceMap_0.java_util_AbstractHashMap_stringMap.java_util_InternalStringMap_size == 0 && java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map, type_0) , undefined);
}

function com_google_web_bindery_event_shared_SimpleEventBus_$ensureHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map, type_0), 49);
  if (!sourceMap) {
    sourceMap = new java_util_HashMap_HashMap__V;
    java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map, type_0, sourceMap);
  }
  handlers = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(sourceMap.java_util_AbstractHashMap_hashCodeMap, source)), 30);
  if (!handlers) {
    handlers = new java_util_ArrayList_ArrayList__V;
    java_util_InternalHashCodeMap_$put__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(sourceMap.java_util_AbstractHashMap_hashCodeMap, source, handlers);
  }
  return handlers;
}

function com_google_web_bindery_event_shared_SimpleEventBus_$getHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map, type_0), 49);
  if (!sourceMap) {
    return java_util_Collections_$clinit__V() , java_util_Collections_$clinit__V() , java_util_Collections_EMPTY_1LIST;
  }
  handlers = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(sourceMap.java_util_AbstractHashMap_hashCodeMap, source)), 30);
  if (!handlers) {
    return java_util_Collections_$clinit__V() , java_util_Collections_$clinit__V() , java_util_Collections_EMPTY_1LIST;
  }
  return handlers;
}

function com_google_web_bindery_event_shared_SimpleEventBus_$handleQueuedAddsAndRemoves__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$static){
  var c, c$iterator;
  if (this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas) {
    try {
      for (c$iterator = new java_util_ArrayList$1_ArrayList$1__Ljava_util_ArrayList_2V(this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas); c$iterator.java_util_ArrayList$1_i < c$iterator.java_util_ArrayList$1_this$01.java_util_ArrayList_array.length;) {
        c = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList$1_$next__Ljava_util_ArrayList$1_2Ljava_lang_Object_2(c$iterator), 236);
        c.execute__V();
      }
    }
     finally {
      this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas = null;
    }
  }
}

function com_google_web_bindery_event_shared_SimpleEventBus_$isEventHandled__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Z(this$static, eventKey){
  return java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map, eventKey);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(147, 259, {});
_.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth = 0;
_.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1SimpleEventBus_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_25, 'SimpleEventBus', 147);
function com_google_gwt_event_shared_HandlerManager$Bus_$doRemove__Lcom_google_gwt_event_shared_HandlerManager$Bus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static, type_0, source, handler){
  this$static.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth > 0?com_google_web_bindery_event_shared_SimpleEventBus_$defer__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_SimpleEventBus$Command_2V(this$static, new com_google_web_bindery_event_shared_SimpleEventBus$3_SimpleEventBus$3__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$static, type_0, source, handler)):com_google_web_bindery_event_shared_SimpleEventBus_$doRemoveNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static, type_0, source, handler);
}

function com_google_gwt_event_shared_HandlerManager$Bus_HandlerManager$Bus__ZV(fireInReverseOrder){
  this.com_google_web_bindery_event_shared_SimpleEventBus_map = new java_util_HashMap_HashMap__V;
  this.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder = fireInReverseOrder;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(148, 147, {}, com_google_gwt_event_shared_HandlerManager$Bus_HandlerManager$Bus__ZV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1HandlerManager$Bus_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_26, 'HandlerManager/Bus', 148);
function com_google_gwt_event_shared_LegacyHandlerWrapper_LegacyHandlerWrapper__Lcom_google_web_bindery_event_shared_HandlerRegistration_2V(real){
  this.com_google_gwt_event_shared_LegacyHandlerWrapper_real = real;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(204, 1, {}, com_google_gwt_event_shared_LegacyHandlerWrapper_LegacyHandlerWrapper__Lcom_google_web_bindery_event_shared_HandlerRegistration_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1LegacyHandlerWrapper_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_26, 'LegacyHandlerWrapper', 204);
function com_google_web_bindery_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V(causes){
  var cause, cause$iterator, i;
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, com_google_web_bindery_event_shared_UmbrellaException_makeMessage__Ljava_util_Set_2Ljava_lang_String_2(causes), causes.isEmpty__Z()?null:com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(causes.iterator__Ljava_util_Iterator_2().next__Ljava_lang_Object_2(), 4));
  this.com_google_web_bindery_event_shared_UmbrellaException_causes = causes;
  i = 0;
  for (cause$iterator = causes.iterator__Ljava_util_Iterator_2(); cause$iterator.hasNext__Z();) {
    cause = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(cause$iterator.next__Ljava_lang_Object_2(), 4);
    if (i++ == 0) {
      continue;
    }
    java_lang_Throwable_$addSuppressed__Ljava_lang_Throwable_2Ljava_lang_Throwable_2V(this, cause);
  }
}

function com_google_web_bindery_event_shared_UmbrellaException_makeMessage__Ljava_util_Set_2Ljava_lang_String_2(causes){
  var b, count, first, t, t$iterator;
  count = causes.size__I();
  if (count == 0) {
    return null;
  }
  b = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator__Ljava_util_Iterator_2(); t$iterator.hasNext__Z();) {
    t = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(t$iterator.next__Ljava_lang_Object_2(), 4);
    first?(first = false):(b.java_lang_AbstractStringBuilder_string += '; ' , b);
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(b, t.getMessage__Ljava_lang_String_2());
  }
  return b.java_lang_AbstractStringBuilder_string;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(35, 9, $intern_29, com_google_web_bindery_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1UmbrellaException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_25, $intern_30, 35);
function com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V(causes){
  com_google_web_bindery_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V.call(this, causes);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(79, 35, $intern_29, com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1UmbrellaException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_26, $intern_30, 79);
function com_google_gwt_http_client_Request_$cancel__Lcom_google_gwt_http_client_Request_2V(this$static){
  var xhr;
  if (!this$static.com_google_gwt_http_client_Request_xmlHttpRequest) {
    return;
  }
  com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static.com_google_gwt_http_client_Request_timer);
  xhr = this$static.com_google_gwt_http_client_Request_xmlHttpRequest;
  this$static.com_google_gwt_http_client_Request_xmlHttpRequest = null;
  com_google_gwt_xhr_client_XMLHttpRequest_$clearOnReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(xhr);
  xhr.abort();
}

function com_google_gwt_http_client_Request_$fireOnResponseReceived__Lcom_google_gwt_http_client_Request_2Lcom_google_gwt_http_client_RequestCallback_2V(this$static, callback){
  var response, xhr;
  if (!this$static.com_google_gwt_http_client_Request_xmlHttpRequest) {
    return;
  }
  com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static.com_google_gwt_http_client_Request_timer);
  xhr = this$static.com_google_gwt_http_client_Request_xmlHttpRequest;
  this$static.com_google_gwt_http_client_Request_xmlHttpRequest = null;
  response = new com_google_gwt_http_client_Request$RequestImplIE8And9$1_Request$RequestImplIE8And9$1__Lcom_google_gwt_http_client_Request$RequestImplIE8And9_2Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(xhr);
  org_fusesource_restygwt_client_AbstractRequestCallback_$onResponseReceived__Lorg_fusesource_restygwt_client_AbstractRequestCallback_2Lcom_google_gwt_http_client_Request_2Lcom_google_gwt_http_client_Response_2V(callback, response);
}

function com_google_gwt_http_client_Request_$fireOnTimeout__Lcom_google_gwt_http_client_Request_2V(this$static){
  var lastArg;
  if (!this$static.com_google_gwt_http_client_Request_xmlHttpRequest) {
    return;
  }
  com_google_gwt_http_client_Request_$cancel__Lcom_google_gwt_http_client_Request_2V(this$static);
  org_fusesource_restygwt_client_AbstractRequestCallback_$onError__Lorg_fusesource_restygwt_client_AbstractRequestCallback_2Lcom_google_gwt_http_client_Request_2Ljava_lang_Throwable_2V((lastArg = this$static.com_google_gwt_http_client_Request_callback , new com_google_gwt_http_client_RequestTimeoutException_RequestTimeoutException__Lcom_google_gwt_http_client_Request_2IV(this$static.com_google_gwt_http_client_Request_timeoutMillis) , lastArg));
}

function com_google_gwt_http_client_Request_Request__Lcom_google_gwt_xhr_client_XMLHttpRequest_2ILcom_google_gwt_http_client_RequestCallback_2V(xmlHttpRequest, timeoutMillis, callback){
  this.com_google_gwt_http_client_Request_timer = new com_google_gwt_http_client_Request$1_Request$1__Lcom_google_gwt_http_client_Request_2V(this);
  if (!xmlHttpRequest) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__V);
  }
  if (!callback) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__V);
  }
  if (timeoutMillis < 0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalArgumentException_IllegalArgumentException__V);
  }
  this.com_google_gwt_http_client_Request_callback = callback;
  this.com_google_gwt_http_client_Request_timeoutMillis = timeoutMillis;
  this.com_google_gwt_http_client_Request_xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && com_google_gwt_user_client_Timer_$schedule__Lcom_google_gwt_user_client_Timer_2IV(this.com_google_gwt_http_client_Request_timer, timeoutMillis);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(224, 1, {}, com_google_gwt_http_client_Request_Request__Lcom_google_gwt_xhr_client_XMLHttpRequest_2ILcom_google_gwt_http_client_RequestCallback_2V);
_.com_google_gwt_http_client_Request_timeoutMillis = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1Request_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_31, 'Request', 224);
function com_google_gwt_http_client_Request$1_Request$1__Lcom_google_gwt_http_client_Request_2V(this$0){
  this.com_google_gwt_http_client_Request$1_this$01 = this$0;
  com_google_gwt_user_client_Timer_Timer__V.call(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(227, 67, {}, com_google_gwt_http_client_Request$1_Request$1__Lcom_google_gwt_http_client_Request_2V);
_.run__V = function com_google_gwt_http_client_Request$1_run__V(){
  com_google_gwt_http_client_Request_$fireOnTimeout__Lcom_google_gwt_http_client_Request_2V(this.com_google_gwt_http_client_Request$1_this$01);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1Request$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_31, 'Request/1', 227);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(272, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1Response_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_31, 'Response', 272);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(225, 272, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1ResponseImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_31, 'ResponseImpl', 225);
function com_google_gwt_http_client_Request$RequestImplIE8And9$1_Request$RequestImplIE8And9$1__Lcom_google_gwt_http_client_Request$RequestImplIE8And9_2Lcom_google_gwt_xhr_client_XMLHttpRequest_2V($anonymous0){
  this.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest = $anonymous0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(226, 225, {}, com_google_gwt_http_client_Request$RequestImplIE8And9$1_Request$RequestImplIE8And9$1__Lcom_google_gwt_http_client_Request$RequestImplIE8And9_2Lcom_google_gwt_xhr_client_XMLHttpRequest_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1Request$RequestImplIE8And9$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_31, 'Request/RequestImplIE8And9/1', 226);
function com_google_gwt_http_client_RequestBuilder_$clinit__V(){
  com_google_gwt_http_client_RequestBuilder_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  new com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V('DELETE');
  new com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V('GET');
  new com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V('HEAD');
  new com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V('POST');
  new com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V('PUT');
}

function com_google_gwt_http_client_RequestBuilder_$doSend__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Lcom_google_gwt_http_client_RequestCallback_2Lcom_google_gwt_http_client_Request_2(this$static, requestData, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = new $wnd.XMLHttpRequest;
  try {
    com_google_gwt_xhr_client_XMLHttpRequest_$open__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Ljava_lang_String_2Ljava_lang_String_2V(xmlHttpRequest, this$static.com_google_gwt_http_client_RequestBuilder_httpMethod, this$static.com_google_gwt_http_client_RequestBuilder_url);
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 23)) {
      e = $e0;
      requestPermissionException = new com_google_gwt_http_client_RequestPermissionException_RequestPermissionException__Ljava_lang_String_2V(this$static.com_google_gwt_http_client_RequestBuilder_url);
      java_lang_Throwable_$initCause__Ljava_lang_Throwable_2Ljava_lang_Throwable_2Ljava_lang_Throwable_2(requestPermissionException, new com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V(e.getMessage__Ljava_lang_String_2()));
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(requestPermissionException);
    }
     else 
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
  com_google_gwt_http_client_RequestBuilder_$setHeaders__Lcom_google_gwt_http_client_RequestBuilder_2Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(this$static, xmlHttpRequest);
  this$static.com_google_gwt_http_client_RequestBuilder_includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new com_google_gwt_http_client_Request_Request__Lcom_google_gwt_xhr_client_XMLHttpRequest_2ILcom_google_gwt_http_client_RequestCallback_2V(xmlHttpRequest, this$static.com_google_gwt_http_client_RequestBuilder_timeoutMillis, callback);
  com_google_gwt_xhr_client_XMLHttpRequest_$setOnReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Lcom_google_gwt_xhr_client_ReadyStateChangeHandler_2V(xmlHttpRequest, new com_google_gwt_http_client_RequestBuilder$1_RequestBuilder$1__Lcom_google_gwt_http_client_RequestBuilder_2V(request, callback));
  try {
    xmlHttpRequest.send(requestData);
  }
   catch ($e1) {
    $e1 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e1);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e1, 23)) {
      e = $e1;
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V(e.getMessage__Ljava_lang_String_2()));
    }
     else 
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e1);
  }
  return request;
}

function com_google_gwt_http_client_RequestBuilder_$getHeader__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Ljava_lang_String_2(this$static){
  if (!this$static.com_google_gwt_http_client_RequestBuilder_headers) {
    return null;
  }
  return com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.com_google_gwt_http_client_RequestBuilder_headers, $intern_32));
}

function com_google_gwt_http_client_RequestBuilder_$setCallback__Lcom_google_gwt_http_client_RequestBuilder_2Lcom_google_gwt_http_client_RequestCallback_2V(this$static, callback){
  com_google_gwt_http_client_StringValidator_throwIfNull__Ljava_lang_String_2Ljava_lang_Object_2V('callback', callback);
  this$static.com_google_gwt_http_client_RequestBuilder_callback = callback;
}

function com_google_gwt_http_client_RequestBuilder_$setHeader__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, header, value_0){
  com_google_gwt_http_client_StringValidator_throwIfEmptyOrNull__Ljava_lang_String_2Ljava_lang_String_2V('header', header);
  com_google_gwt_http_client_StringValidator_throwIfEmptyOrNull__Ljava_lang_String_2Ljava_lang_String_2V('value', value_0);
  !this$static.com_google_gwt_http_client_RequestBuilder_headers && (this$static.com_google_gwt_http_client_RequestBuilder_headers = new java_util_HashMap_HashMap__V);
  java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_http_client_RequestBuilder_headers, header, value_0);
}

function com_google_gwt_http_client_RequestBuilder_$setHeaders__Lcom_google_gwt_http_client_RequestBuilder_2Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(this$static, xmlHttpRequest){
  var e, header, header$iterator;
  if (!!this$static.com_google_gwt_http_client_RequestBuilder_headers && java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I(this$static.com_google_gwt_http_client_RequestBuilder_headers) > 0) {
    for (header$iterator = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this$static.com_google_gwt_http_client_RequestBuilder_headers)).java_util_AbstractHashMap$EntrySet_this$01); header$iterator.java_util_AbstractHashMap$EntrySetIterator_hasNext;) {
      header = java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(header$iterator);
      try {
        com_google_gwt_xhr_client_XMLHttpRequest_$setRequestHeader__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Ljava_lang_String_2Ljava_lang_String_2V(xmlHttpRequest, com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(header.getKey__Ljava_lang_Object_2()), com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(header.getValue__Ljava_lang_Object_2()));
      }
       catch ($e0) {
        $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
        if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 23)) {
          e = $e0;
          throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V(e.getMessage__Ljava_lang_String_2()));
        }
         else 
          throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      }
    }
  }
   else {
    xmlHttpRequest.setRequestHeader($intern_32, 'text/plain; charset=utf-8');
  }
}

function com_google_gwt_http_client_RequestBuilder_$setRequestData__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2V(this$static, requestData){
  this$static.com_google_gwt_http_client_RequestBuilder_requestData = requestData;
}

function com_google_gwt_http_client_RequestBuilder_$setTimeoutMillis__Lcom_google_gwt_http_client_RequestBuilder_2IV(this$static, timeoutMillis){
  if (timeoutMillis < 0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('Timeouts cannot be negative'));
  }
  this$static.com_google_gwt_http_client_RequestBuilder_timeoutMillis = timeoutMillis;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(221, 1, {});
_.com_google_gwt_http_client_RequestBuilder_includeCredentials = false;
_.com_google_gwt_http_client_RequestBuilder_timeoutMillis = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_31, 'RequestBuilder', 221);
function com_google_gwt_http_client_RequestBuilder$1_RequestBuilder$1__Lcom_google_gwt_http_client_RequestBuilder_2V(val$request, val$callback){
  this.com_google_gwt_http_client_RequestBuilder$1_val$request2 = val$request;
  this.com_google_gwt_http_client_RequestBuilder$1_val$callback3 = val$callback;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(223, 1, {}, com_google_gwt_http_client_RequestBuilder$1_RequestBuilder$1__Lcom_google_gwt_http_client_RequestBuilder_2V);
_.onReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V = function com_google_gwt_http_client_RequestBuilder$1_onReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(xhr){
  if (xhr.readyState == 4) {
    com_google_gwt_xhr_client_XMLHttpRequest_$clearOnReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(xhr);
    com_google_gwt_http_client_Request_$fireOnResponseReceived__Lcom_google_gwt_http_client_Request_2Lcom_google_gwt_http_client_RequestCallback_2V(this.com_google_gwt_http_client_RequestBuilder$1_val$request2, this.com_google_gwt_http_client_RequestBuilder$1_val$callback3);
  }
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestBuilder$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_31, 'RequestBuilder/1', 223);
function com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V(name_0){
  this.com_google_gwt_http_client_RequestBuilder$Method_name = name_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(46, 1, {}, com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V);
_.toString__Ljava_lang_String_2 = function com_google_gwt_http_client_RequestBuilder$Method_toString__Ljava_lang_String_2(){
  return this.com_google_gwt_http_client_RequestBuilder$Method_name;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestBuilder$Method_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_31, 'RequestBuilder/Method', 46);
function com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V(message){
  java_lang_Exception_Exception__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(26, 33, $intern_33, com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_31, 'RequestException', 26);
function com_google_gwt_http_client_RequestPermissionException_RequestPermissionException__Ljava_lang_String_2V(url_0){
  com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(228, 26, $intern_33, com_google_gwt_http_client_RequestPermissionException_RequestPermissionException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestPermissionException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_31, 'RequestPermissionException', 228);
function com_google_gwt_http_client_RequestTimeoutException_RequestTimeoutException__Lcom_google_gwt_http_client_Request_2IV(timeoutMillis){
  com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(229, 26, $intern_33, com_google_gwt_http_client_RequestTimeoutException_RequestTimeoutException__Lcom_google_gwt_http_client_Request_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestTimeoutException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_31, 'RequestTimeoutException', 229);
function com_google_gwt_http_client_StringValidator_throwIfEmptyOrNull__Ljava_lang_String_2Ljava_lang_String_2V(name_0, value_0){
  com_google_gwt_http_client_StringValidator_throwIfNull__Ljava_lang_String_2Ljava_lang_Object_2V(name_0, value_0);
  if (0 == java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(value_0).length) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V(name_0 + ' cannot be empty'));
  }
}

function com_google_gwt_http_client_StringValidator_throwIfNull__Ljava_lang_String_2Ljava_lang_Object_2V(name_0, value_0){
  if (null == value_0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V(name_0 + ' cannot be null'));
  }
}

function com_google_gwt_i18n_client_BidiUtils_getDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2(elem){
  var dirPropertyValue;
  dirPropertyValue = com_google_gwt_dom_client_Element_$getPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(elem, 'dir');
  if (java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z('rtl', dirPropertyValue)) {
    return com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_RTL;
  }
   else if (java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z('ltr', dirPropertyValue)) {
    return com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_LTR;
  }
  return com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT;
}

function com_google_gwt_i18n_client_BidiUtils_setDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2V(elem, direction){
  switch (direction.java_lang_Enum_ordinal) {
    case 0:
      {
        elem['dir'] = 'rtl';
        break;
      }

    case 1:
      {
        elem['dir'] = 'ltr';
        break;
      }

    case 2:
      {
        com_google_gwt_i18n_client_BidiUtils_getDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2(elem) != (com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT) && (elem['dir'] = '' , undefined);
        break;
      }

  }
}

function com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V(){
  com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_i18n_client_HasDirection$Direction_RTL = new com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV('RTL', 0);
  com_google_gwt_i18n_client_HasDirection$Direction_LTR = new com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV('LTR', 1);
  com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT = new com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV('DEFAULT', 2);
}

function com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_i18n_client_HasDirection$Direction_values___3Lcom_google_gwt_i18n_client_HasDirection$Direction_2(){
  com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V();
  return com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1i18n_1client_1HasDirection$Direction_12_1classLit, 1), $intern_9, 42, 0, [com_google_gwt_i18n_client_HasDirection$Direction_RTL, com_google_gwt_i18n_client_HasDirection$Direction_LTR, com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT]);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(42, 5, {42:1, 3:1, 6:1, 5:1}, com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV);
var com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT, com_google_gwt_i18n_client_HasDirection$Direction_LTR, com_google_gwt_i18n_client_HasDirection$Direction_RTL;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1i18n_1client_1HasDirection$Direction_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2('com.google.gwt.i18n.client', 'HasDirection/Direction', 42, com_google_gwt_i18n_client_HasDirection$Direction_values___3Lcom_google_gwt_i18n_client_HasDirection$Direction_2);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(271, 1, {});
_.isArray__Lcom_google_gwt_json_client_JSONArray_2 = function com_google_gwt_json_client_JSONValue_isArray__Lcom_google_gwt_json_client_JSONArray_2(){
  return null;
}
;
_.isBoolean__Lcom_google_gwt_json_client_JSONBoolean_2 = function com_google_gwt_json_client_JSONValue_isBoolean__Lcom_google_gwt_json_client_JSONBoolean_2(){
  return null;
}
;
_.isNull__Lcom_google_gwt_json_client_JSONNull_2 = function com_google_gwt_json_client_JSONValue_isNull__Lcom_google_gwt_json_client_JSONNull_2(){
  return null;
}
;
_.isNumber__Lcom_google_gwt_json_client_JSONNumber_2 = function com_google_gwt_json_client_JSONValue_isNumber__Lcom_google_gwt_json_client_JSONNumber_2(){
  return null;
}
;
_.isObject__Lcom_google_gwt_json_client_JSONObject_2 = function com_google_gwt_json_client_JSONValue_isObject__Lcom_google_gwt_json_client_JSONObject_2(){
  return null;
}
;
_.isString__Lcom_google_gwt_json_client_JSONString_2 = function com_google_gwt_json_client_JSONValue_isString__Lcom_google_gwt_json_client_JSONString_2(){
  return null;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONValue_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'JSONValue', 271);
function com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2(this$static, index_0){
  var v = this$static.com_google_gwt_json_client_JSONArray_jsArray[index_0];
  var func = (com_google_gwt_json_client_JSONParser_$clinit__V() , com_google_gwt_json_client_JSONParser_typeMap)[typeof v];
  return func?func(v):com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2V(typeof v);
}

function com_google_gwt_json_client_JSONArray_$set0__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2V(this$static, index_0, value_0){
  if (value_0) {
    var func = value_0.package_private$com_google_gwt_json_client$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2();
    value_0 = func(value_0);
  }
   else {
    value_0 = undefined;
  }
  this$static.com_google_gwt_json_client_JSONArray_jsArray[index_0] = value_0;
}

function com_google_gwt_json_client_JSONArray_JSONArray__V(){
  this.com_google_gwt_json_client_JSONArray_jsArray = [];
}

function com_google_gwt_json_client_JSONArray_JSONArray__Lcom_google_gwt_core_client_JavaScriptObject_2V(arr){
  this.com_google_gwt_json_client_JSONArray_jsArray = arr;
}

function com_google_gwt_json_client_JSONArray_unwrap__Lcom_google_gwt_json_client_JSONArray_2Lcom_google_gwt_core_client_JavaScriptObject_2(value_0){
  return value_0.com_google_gwt_json_client_JSONArray_jsArray;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(58, 271, {58:1}, com_google_gwt_json_client_JSONArray_JSONArray__V, com_google_gwt_json_client_JSONArray_JSONArray__Lcom_google_gwt_core_client_JavaScriptObject_2V);
_.equals__Ljava_lang_Object_2Z = function com_google_gwt_json_client_JSONArray_equals__Ljava_lang_Object_2Z(other){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 58)) {
    return false;
  }
  return com_google_gwt_core_client_JavaScriptObject_$equals__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2Z(this.com_google_gwt_json_client_JSONArray_jsArray, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 58).com_google_gwt_json_client_JSONArray_jsArray);
}
;
_.package_private$com_google_gwt_json_client$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2 = function com_google_gwt_json_client_JSONArray_getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_json_client_JSONArray_unwrap__Lcom_google_gwt_json_client_JSONArray_2Lcom_google_gwt_core_client_JavaScriptObject_2;
}
;
_.hashCode__I = function com_google_gwt_json_client_JSONArray_hashCode__I(){
  return com_google_gwt_core_client_JavaScriptObject_$hashCode__Lcom_google_gwt_core_client_JavaScriptObject_2I(this.com_google_gwt_json_client_JSONArray_jsArray);
}
;
_.isArray__Lcom_google_gwt_json_client_JSONArray_2 = function com_google_gwt_json_client_JSONArray_isArray__Lcom_google_gwt_json_client_JSONArray_2(){
  return this;
}
;
_.toString__Ljava_lang_String_2 = function com_google_gwt_json_client_JSONArray_toString__Ljava_lang_String_2(){
  var c, i, sb;
  sb = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V('[');
  for (i = 0 , c = this.com_google_gwt_json_client_JSONArray_jsArray.length; i < c; i++) {
    i > 0 && (sb.java_lang_AbstractStringBuilder_string += ',' , sb);
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2Ljava_lang_StringBuilder_2(sb, com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2(this, i));
  }
  sb.java_lang_AbstractStringBuilder_string += ']';
  return sb.java_lang_AbstractStringBuilder_string;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONArray_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'JSONArray', 58);
function com_google_gwt_json_client_JSONBoolean_$clinit__V(){
  com_google_gwt_json_client_JSONBoolean_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_json_client_JSONBoolean_FALSE = new com_google_gwt_json_client_JSONBoolean_JSONBoolean__ZV(false);
  com_google_gwt_json_client_JSONBoolean_TRUE = new com_google_gwt_json_client_JSONBoolean_JSONBoolean__ZV(true);
}

function com_google_gwt_json_client_JSONBoolean_JSONBoolean__ZV(value_0){
  this.com_google_gwt_json_client_JSONBoolean_value = value_0;
}

function com_google_gwt_json_client_JSONBoolean_unwrap__Lcom_google_gwt_json_client_JSONBoolean_2Z(value_0){
  return value_0.com_google_gwt_json_client_JSONBoolean_value;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(90, 271, {}, com_google_gwt_json_client_JSONBoolean_JSONBoolean__ZV);
_.package_private$com_google_gwt_json_client$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2 = function com_google_gwt_json_client_JSONBoolean_getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_json_client_JSONBoolean_unwrap__Lcom_google_gwt_json_client_JSONBoolean_2Z;
}
;
_.isBoolean__Lcom_google_gwt_json_client_JSONBoolean_2 = function com_google_gwt_json_client_JSONBoolean_isBoolean__Lcom_google_gwt_json_client_JSONBoolean_2(){
  return this;
}
;
_.toString__Ljava_lang_String_2 = function com_google_gwt_json_client_JSONBoolean_toString__Ljava_lang_String_2(){
  return java_lang_Boolean_$clinit__V() , '' + this.com_google_gwt_json_client_JSONBoolean_value;
}
;
_.com_google_gwt_json_client_JSONBoolean_value = false;
var com_google_gwt_json_client_JSONBoolean_FALSE, com_google_gwt_json_client_JSONBoolean_TRUE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONBoolean_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'JSONBoolean', 90);
function com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

function com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_Throwable_2V(cause){
  this.java_lang_Throwable_detailMessage = !cause?null:java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2Ljava_lang_String_2(cause, cause.getMessage__Ljava_lang_String_2());
  this.java_lang_Throwable_cause = cause;
  java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this);
  this.private$java_lang_Throwable$initializeBackingError__V();
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(72, 9, $intern_17, com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_String_2V, com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_Throwable_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'JSONException', 72);
function com_google_gwt_json_client_JSONNull_$clinit__V(){
  com_google_gwt_json_client_JSONNull_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_json_client_JSONNull_instance = new com_google_gwt_json_client_JSONNull_JSONNull__V;
}

function com_google_gwt_json_client_JSONNull_JSONNull__V(){
}

function com_google_gwt_json_client_JSONNull_unwrap__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return null;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(89, 271, {}, com_google_gwt_json_client_JSONNull_JSONNull__V);
_.package_private$com_google_gwt_json_client$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2 = function com_google_gwt_json_client_JSONNull_getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_json_client_JSONNull_unwrap__Lcom_google_gwt_core_client_JavaScriptObject_2;
}
;
_.isNull__Lcom_google_gwt_json_client_JSONNull_2 = function com_google_gwt_json_client_JSONNull_isNull__Lcom_google_gwt_json_client_JSONNull_2(){
  if (this != com_google_gwt_json_client_JSONNull_instance) {
    return null;
  }
  return this;
}
;
_.toString__Ljava_lang_String_2 = function com_google_gwt_json_client_JSONNull_toString__Ljava_lang_String_2(){
  return $intern_19;
}
;
var com_google_gwt_json_client_JSONNull_instance;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONNull_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'JSONNull', 89);
function com_google_gwt_json_client_JSONNumber_JSONNumber__DV(value_0){
  this.com_google_gwt_json_client_JSONNumber_value = value_0;
}

function com_google_gwt_json_client_JSONNumber_unwrap__Lcom_google_gwt_json_client_JSONNumber_2D(value_0){
  return value_0.com_google_gwt_json_client_JSONNumber_value;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(57, 271, {57:1}, com_google_gwt_json_client_JSONNumber_JSONNumber__DV);
_.equals__Ljava_lang_Object_2Z = function com_google_gwt_json_client_JSONNumber_equals__Ljava_lang_Object_2Z(other){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 57)) {
    return false;
  }
  return this.com_google_gwt_json_client_JSONNumber_value == com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 57).com_google_gwt_json_client_JSONNumber_value;
}
;
_.package_private$com_google_gwt_json_client$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2 = function com_google_gwt_json_client_JSONNumber_getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_json_client_JSONNumber_unwrap__Lcom_google_gwt_json_client_JSONNumber_2D;
}
;
_.hashCode__I = function com_google_gwt_json_client_JSONNumber_hashCode__I(){
  return java_lang_Double_$hashCode__Ljava_lang_Double_2I(this.com_google_gwt_json_client_JSONNumber_value);
}
;
_.isNumber__Lcom_google_gwt_json_client_JSONNumber_2 = function com_google_gwt_json_client_JSONNumber_isNumber__Lcom_google_gwt_json_client_JSONNumber_2(){
  return this;
}
;
_.toString__Ljava_lang_String_2 = function com_google_gwt_json_client_JSONNumber_toString__Ljava_lang_String_2(){
  return this.com_google_gwt_json_client_JSONNumber_value + '';
}
;
_.com_google_gwt_json_client_JSONNumber_value = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONNumber_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'JSONNumber', 57);
function com_google_gwt_json_client_JSONObject_$computeKeys0__Lcom_google_gwt_json_client_JSONObject_2_3Ljava_lang_String_2_3Ljava_lang_String_2(this$static, result){
  var jsObject = this$static.com_google_gwt_json_client_JSONObject_jsObject;
  var i = 0;
  for (var key in jsObject) {
    jsObject.hasOwnProperty(key) && (result[i++] = key);
  }
  return result;
}

function com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(this$static, key){
  if (key == null) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__V);
  }
  return com_google_gwt_json_client_JSONObject_$get0__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(this$static, key);
}

function com_google_gwt_json_client_JSONObject_$get0__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(this$static, key){
  var jsObject = this$static.com_google_gwt_json_client_JSONObject_jsObject;
  var v;
  key = String(key);
  jsObject.hasOwnProperty(key) && (v = jsObject[key]);
  var func = (com_google_gwt_json_client_JSONParser_$clinit__V() , com_google_gwt_json_client_JSONParser_typeMap)[typeof v];
  var ret = func?func(v):com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2V(typeof v);
  return ret;
}

function com_google_gwt_json_client_JSONObject_$put0__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2V(this$static, key, value_0){
  if (value_0) {
    var func = value_0.package_private$com_google_gwt_json_client$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2();
    this$static.com_google_gwt_json_client_JSONObject_jsObject[key] = func(value_0);
  }
   else {
    delete this$static.com_google_gwt_json_client_JSONObject_jsObject[key];
  }
}

function com_google_gwt_json_client_JSONObject_$toString__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2(this$static){
  var first, key, key$index, key$max, keys_0, sb;
  sb = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V('{');
  first = true;
  keys_0 = com_google_gwt_json_client_JSONObject_$computeKeys0__Lcom_google_gwt_json_client_JSONObject_2_3Ljava_lang_String_2_3Ljava_lang_String_2(this$static, com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, $intern_9, 2, 0, 6, 1));
  for (key$index = 0 , key$max = keys_0.length; key$index < key$max; ++key$index) {
    key = keys_0[key$index];
    first?(first = false):(sb.java_lang_AbstractStringBuilder_string += ', ' , sb);
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, com_google_gwt_core_client_JsonUtils_escapeValue__Ljava_lang_String_2Ljava_lang_String_2(key));
    sb.java_lang_AbstractStringBuilder_string += ':';
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2Ljava_lang_StringBuilder_2(sb, com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(this$static, key));
  }
  sb.java_lang_AbstractStringBuilder_string += '}';
  return sb.java_lang_AbstractStringBuilder_string;
}

function com_google_gwt_json_client_JSONObject_JSONObject__V(){
  com_google_gwt_json_client_JSONObject_JSONObject__Lcom_google_gwt_core_client_JavaScriptObject_2V.call(this, {});
}

function com_google_gwt_json_client_JSONObject_JSONObject__Lcom_google_gwt_core_client_JavaScriptObject_2V(jsValue){
  this.com_google_gwt_json_client_JSONObject_jsObject = jsValue;
}

function com_google_gwt_json_client_JSONObject_unwrap__Lcom_google_gwt_json_client_JSONObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(value_0){
  return value_0.com_google_gwt_json_client_JSONObject_jsObject;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(47, 271, {47:1}, com_google_gwt_json_client_JSONObject_JSONObject__V, com_google_gwt_json_client_JSONObject_JSONObject__Lcom_google_gwt_core_client_JavaScriptObject_2V);
_.equals__Ljava_lang_Object_2Z = function com_google_gwt_json_client_JSONObject_equals__Ljava_lang_Object_2Z(other){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 47)) {
    return false;
  }
  return com_google_gwt_core_client_JavaScriptObject_$equals__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2Z(this.com_google_gwt_json_client_JSONObject_jsObject, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 47).com_google_gwt_json_client_JSONObject_jsObject);
}
;
_.package_private$com_google_gwt_json_client$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2 = function com_google_gwt_json_client_JSONObject_getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_json_client_JSONObject_unwrap__Lcom_google_gwt_json_client_JSONObject_2Lcom_google_gwt_core_client_JavaScriptObject_2;
}
;
_.hashCode__I = function com_google_gwt_json_client_JSONObject_hashCode__I(){
  return com_google_gwt_core_client_JavaScriptObject_$hashCode__Lcom_google_gwt_core_client_JavaScriptObject_2I(this.com_google_gwt_json_client_JSONObject_jsObject);
}
;
_.isObject__Lcom_google_gwt_json_client_JSONObject_2 = function com_google_gwt_json_client_JSONObject_isObject__Lcom_google_gwt_json_client_JSONObject_2(){
  return this;
}
;
_.toString__Ljava_lang_String_2 = function com_google_gwt_json_client_JSONObject_toString__Ljava_lang_String_2(){
  return com_google_gwt_json_client_JSONObject_$toString__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'JSONObject', 47);
function com_google_gwt_json_client_JSONParser_$clinit__V(){
  com_google_gwt_json_client_JSONParser_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_json_client_JSONParser_typeMap = {'boolean':com_google_gwt_json_client_JSONParser_createBoolean__ZLcom_google_gwt_json_client_JSONValue_2, 'number':com_google_gwt_json_client_JSONParser_createNumber__DLcom_google_gwt_json_client_JSONValue_2, 'string':com_google_gwt_json_client_JSONParser_createString__Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2, 'object':com_google_gwt_json_client_JSONParser_createObject__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2, 'function':com_google_gwt_json_client_JSONParser_createObject__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2, 'undefined':com_google_gwt_json_client_JSONParser_createUndefined__Lcom_google_gwt_json_client_JSONValue_2};
}

function com_google_gwt_json_client_JSONParser_createBoolean__ZLcom_google_gwt_json_client_JSONValue_2(v){
  return com_google_gwt_json_client_JSONBoolean_$clinit__V() , v?com_google_gwt_json_client_JSONBoolean_TRUE:com_google_gwt_json_client_JSONBoolean_FALSE;
}

function com_google_gwt_json_client_JSONParser_createNumber__DLcom_google_gwt_json_client_JSONValue_2(v){
  return new com_google_gwt_json_client_JSONNumber_JSONNumber__DV(v);
}

function com_google_gwt_json_client_JSONParser_createObject__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2(o){
  if (!o) {
    return com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_instance;
  }
  var v = o.valueOf?o.valueOf():o;
  if (v !== o) {
    var func = com_google_gwt_json_client_JSONParser_typeMap[typeof v];
    return func?func(v):com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2V(typeof v);
  }
   else if (o instanceof Array || o instanceof $wnd.Array) {
    return new com_google_gwt_json_client_JSONArray_JSONArray__Lcom_google_gwt_core_client_JavaScriptObject_2V(o);
  }
   else {
    return new com_google_gwt_json_client_JSONObject_JSONObject__Lcom_google_gwt_core_client_JavaScriptObject_2V(o);
  }
}

function com_google_gwt_json_client_JSONParser_createString__Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(v){
  return new com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V(v);
}

function com_google_gwt_json_client_JSONParser_createUndefined__Lcom_google_gwt_json_client_JSONValue_2(){
  return null;
}

function com_google_gwt_json_client_JSONParser_evaluate__Ljava_lang_String_2ZLcom_google_gwt_json_client_JSONValue_2(json, strict){
  var v;
  if (strict) {
    try {
      v = JSON.parse(json);
    }
     catch (e) {
      return com_google_gwt_json_client_JSONParser_throwJSONException__Ljava_lang_String_2V($intern_35 + e);
    }
  }
   else {
    json = com_google_gwt_core_client_JsonUtils_escapeJsonForEval__Ljava_lang_String_2Ljava_lang_String_2(json);
    try {
      v = eval('(' + json + ')');
    }
     catch (e) {
      return com_google_gwt_json_client_JSONParser_throwJSONException__Ljava_lang_String_2V($intern_35 + e);
    }
  }
  var func = com_google_gwt_json_client_JSONParser_typeMap[typeof v];
  return func?func(v):com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2V(typeof v);
}

function com_google_gwt_json_client_JSONParser_parse__Ljava_lang_String_2ZLcom_google_gwt_json_client_JSONValue_2(jsonString){
  com_google_gwt_json_client_JSONParser_$clinit__V();
  var ex;
  if (jsonString == null) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__V);
  }
  if (jsonString.length == 0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('empty argument'));
  }
  try {
    return com_google_gwt_json_client_JSONParser_evaluate__Ljava_lang_String_2ZLcom_google_gwt_json_client_JSONValue_2(jsonString, false);
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 23)) {
      ex = $e0;
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_Throwable_2V(ex));
    }
     else 
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}

function com_google_gwt_json_client_JSONParser_throwJSONException__Ljava_lang_String_2V(message){
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_String_2V(message));
}

function com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2V(typeString){
  com_google_gwt_json_client_JSONParser_$clinit__V();
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_String_2V("Unexpected typeof result '" + typeString + "'; please report this bug to the GWT team"));
}

var com_google_gwt_json_client_JSONParser_typeMap;
function com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V(value_0){
  if (value_0 == null) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__V);
  }
  this.com_google_gwt_json_client_JSONString_value = value_0;
}

function com_google_gwt_json_client_JSONString_unwrap__Lcom_google_gwt_json_client_JSONString_2Ljava_lang_String_2(value_0){
  return value_0.com_google_gwt_json_client_JSONString_value;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(48, 271, {48:1}, com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V);
_.equals__Ljava_lang_Object_2Z = function com_google_gwt_json_client_JSONString_equals__Ljava_lang_Object_2Z(other){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 48)) {
    return false;
  }
  return java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this.com_google_gwt_json_client_JSONString_value, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 48).com_google_gwt_json_client_JSONString_value);
}
;
_.package_private$com_google_gwt_json_client$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2 = function com_google_gwt_json_client_JSONString_getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_json_client_JSONString_unwrap__Lcom_google_gwt_json_client_JSONString_2Ljava_lang_String_2;
}
;
_.hashCode__I = function com_google_gwt_json_client_JSONString_hashCode__I(){
  return javaemul_internal_StringHashCache_getHashCode__Ljava_lang_String_2I(this.com_google_gwt_json_client_JSONString_value);
}
;
_.isString__Lcom_google_gwt_json_client_JSONString_2 = function com_google_gwt_json_client_JSONString_isString__Lcom_google_gwt_json_client_JSONString_2(){
  return this;
}
;
_.toString__Ljava_lang_String_2 = function com_google_gwt_json_client_JSONString_toString__Ljava_lang_String_2(){
  return com_google_gwt_core_client_JsonUtils_escapeValue__Ljava_lang_String_2Ljava_lang_String_2(this.com_google_gwt_json_client_JSONString_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONString_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'JSONString', 48);
function com_google_gwt_lang_Array_canSet__Ljava_lang_Object_2Ljava_lang_Object_2Z(array, value_0){
  var elementTypeCategory;
  switch (com_google_gwt_lang_Array_getElementTypeCategory__Ljava_lang_Object_2I(array)) {
    case 6:
      return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(value_0);
    case 7:
      return com_google_gwt_lang_Cast_instanceOfDouble__Ljava_lang_Object_2Z(value_0);
    case 8:
      return com_google_gwt_lang_Cast_instanceOfBoolean__Ljava_lang_Object_2Z(value_0);
    case 3:
      return Array.isArray(value_0) && (elementTypeCategory = com_google_gwt_lang_Array_getElementTypeCategory__Ljava_lang_Object_2I(value_0) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16));
    case 11:
      return value_0 != null && typeof value_0 === $intern_1;
    case 12:
      return value_0 != null && (typeof value_0 === $intern_0 || typeof value_0 == $intern_1);
    case 0:
      return com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(value_0, array.__elementTypeId$);
    case 2:
      return com_google_gwt_lang_Cast_isJsObjectOrFunction__Ljava_lang_Object_2Z(value_0) && !(value_0.java_lang_Object_typeMarker === com_google_gwt_lang_Runtime_typeMarkerFn__V);
    case 1:
      return com_google_gwt_lang_Cast_isJsObjectOrFunction__Ljava_lang_Object_2Z(value_0) && !(value_0.java_lang_Object_typeMarker === com_google_gwt_lang_Runtime_typeMarkerFn__V) || com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(value_0, array.__elementTypeId$);
    default:return true;
  }
}

function com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(clazz, dimensions){
  return java_lang_Class_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(clazz, dimensions);
}

function com_google_gwt_lang_Array_getElementTypeCategory__Ljava_lang_Object_2I(array){
  return array.__elementTypeCategory$ == null?10:array.__elementTypeCategory$;
}

function com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = com_google_gwt_lang_Array_initializeArrayElementsWithDefaults__IILjava_lang_Object_2(elementTypeCategory, length_0);
  elementTypeCategory != 10 && com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function com_google_gwt_lang_Array_initializeArrayElementsWithDefaults__IILjava_lang_Object_2(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function com_google_gwt_lang_Array_isJavaArray__Ljava_lang_Object_2Z(src_0){
  return Array.isArray(src_0) && src_0.java_lang_Object_typeMarker === com_google_gwt_lang_Runtime_typeMarkerFn__V;
}

function com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(array, index_0, value_0){
  javaemul_internal_InternalPreconditions_checkCriticalArrayType__ZV(value_0 == null || com_google_gwt_lang_Array_canSet__Ljava_lang_Object_2Ljava_lang_Object_2Z(array, value_0));
  return array[index_0] = value_0;
}

function com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.java_lang_Object__1_1_1clazz = arrayClass;
  array.java_lang_Object_castableTypeMap = castableTypeMap;
  array.java_lang_Object_typeMarker = com_google_gwt_lang_Runtime_typeMarkerFn__V;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function com_google_gwt_lang_BigLongLibBase_create__ILcom_google_gwt_lang_BigLongLibBase$BigLong_2(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_36;
  a1 = value_0 >> 22 & $intern_36;
  a2 = value_0 < 0?1048575:0;
  return com_google_gwt_lang_BigLongLibBase_create0__IIILcom_google_gwt_lang_BigLongLibBase$BigLong_2(a0, a1, a2);
}

function com_google_gwt_lang_BigLongLibBase_create0__IIILcom_google_gwt_lang_BigLongLibBase$BigLong_2(l, m, h){
  return {l:l, m:m, h:h};
}

function com_google_gwt_lang_BigLongLib_fromDouble__DLcom_google_gwt_lang_BigLongLibBase$BigLong_2(value_0){
  var a0, a1, a2, negative, result, com_google_gwt_lang_BigLongLibBase_negate__Lcom_google_gwt_lang_BigLongLibBase$BigLong_2V_neg0_0, com_google_gwt_lang_BigLongLibBase_negate__Lcom_google_gwt_lang_BigLongLibBase$BigLong_2V_neg1_0, com_google_gwt_lang_BigLongLibBase_negate__Lcom_google_gwt_lang_BigLongLibBase$BigLong_2V_neg2_0;
  if (isNaN(value_0)) {
    return com_google_gwt_lang_BigLongLib$Const_$clinit__V() , com_google_gwt_lang_BigLongLib$Const_ZERO;
  }
  if (value_0 < -9223372036854775808) {
    return com_google_gwt_lang_BigLongLib$Const_$clinit__V() , com_google_gwt_lang_BigLongLib$Const_MIN_1VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return com_google_gwt_lang_BigLongLib$Const_$clinit__V() , com_google_gwt_lang_BigLongLib$Const_MAX_1VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_37) {
    a2 = com_google_gwt_lang_Cast_round_1int__DI(value_0 / $intern_37);
    value_0 -= a2 * $intern_37;
  }
  a1 = 0;
  if (value_0 >= $intern_38) {
    a1 = com_google_gwt_lang_Cast_round_1int__DI(value_0 / $intern_38);
    value_0 -= a1 * $intern_38;
  }
  a0 = com_google_gwt_lang_Cast_round_1int__DI(value_0);
  result = com_google_gwt_lang_BigLongLibBase_create0__IIILcom_google_gwt_lang_BigLongLibBase$BigLong_2(a0, a1, a2);
  negative && (com_google_gwt_lang_BigLongLibBase_negate__Lcom_google_gwt_lang_BigLongLibBase$BigLong_2V_neg0_0 = ~result.l + 1 & $intern_36 , com_google_gwt_lang_BigLongLibBase_negate__Lcom_google_gwt_lang_BigLongLibBase$BigLong_2V_neg1_0 = ~result.m + (com_google_gwt_lang_BigLongLibBase_negate__Lcom_google_gwt_lang_BigLongLibBase$BigLong_2V_neg0_0 == 0?1:0) & $intern_36 , com_google_gwt_lang_BigLongLibBase_negate__Lcom_google_gwt_lang_BigLongLibBase$BigLong_2V_neg2_0 = ~result.h + (com_google_gwt_lang_BigLongLibBase_negate__Lcom_google_gwt_lang_BigLongLibBase$BigLong_2V_neg0_0 == 0 && com_google_gwt_lang_BigLongLibBase_negate__Lcom_google_gwt_lang_BigLongLibBase$BigLong_2V_neg1_0 == 0?1:0) & 1048575 , result.l = com_google_gwt_lang_BigLongLibBase_negate__Lcom_google_gwt_lang_BigLongLibBase$BigLong_2V_neg0_0 , result.m = com_google_gwt_lang_BigLongLibBase_negate__Lcom_google_gwt_lang_BigLongLibBase$BigLong_2V_neg1_0 , result.h = com_google_gwt_lang_BigLongLibBase_negate__Lcom_google_gwt_lang_BigLongLibBase$BigLong_2V_neg2_0 , undefined);
  return result;
}

function com_google_gwt_lang_BigLongLib$Const_$clinit__V(){
  com_google_gwt_lang_BigLongLib$Const_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_lang_BigLongLib$Const_MAX_1VALUE = com_google_gwt_lang_BigLongLibBase_create0__IIILcom_google_gwt_lang_BigLongLibBase$BigLong_2($intern_36, $intern_36, 524287);
  com_google_gwt_lang_BigLongLib$Const_MIN_1VALUE = com_google_gwt_lang_BigLongLibBase_create0__IIILcom_google_gwt_lang_BigLongLibBase$BigLong_2(0, 0, $intern_39);
  com_google_gwt_lang_BigLongLibBase_create__ILcom_google_gwt_lang_BigLongLibBase$BigLong_2(1);
  com_google_gwt_lang_BigLongLibBase_create__ILcom_google_gwt_lang_BigLongLibBase$BigLong_2(2);
  com_google_gwt_lang_BigLongLib$Const_ZERO = com_google_gwt_lang_BigLongLibBase_create__ILcom_google_gwt_lang_BigLongLibBase$BigLong_2(0);
}

var com_google_gwt_lang_BigLongLib$Const_MAX_1VALUE, com_google_gwt_lang_BigLongLib$Const_MIN_1VALUE, com_google_gwt_lang_BigLongLib$Const_ZERO;
function com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2(e){
  var javaException;
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(e, 4)) {
    return e;
  }
  javaException = e && e[$intern_16];
  if (!javaException) {
    javaException = new com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V(e);
    com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Object_2V(javaException);
  }
  return javaException;
}

function com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(t){
  return t.java_lang_Throwable_backingJsObject;
}

function com_google_gwt_lang_LongLib_createLongEmul__Lcom_google_gwt_lang_BigLongLibBase$BigLong_2Lcom_google_gwt_lang_LongLib$LongEmul_2(big_0){
  var a2;
  a2 = big_0.h;
  if (a2 == 0) {
    return big_0.l + big_0.m * $intern_38;
  }
  if (a2 == 1048575) {
    return big_0.l + big_0.m * $intern_38 - $intern_37;
  }
  return big_0;
}

function com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLib$LongEmul_2(value_0){
  if (-17592186044416 < value_0 && value_0 < $intern_37) {
    return value_0 < 0?$wnd.Math.ceil(value_0):$wnd.Math.floor(value_0);
  }
  return com_google_gwt_lang_LongLib_createLongEmul__Lcom_google_gwt_lang_BigLongLibBase$BigLong_2Lcom_google_gwt_lang_LongLib$LongEmul_2(com_google_gwt_lang_BigLongLib_fromDouble__DLcom_google_gwt_lang_BigLongLibBase$BigLong_2(value_0));
}

function com_google_gwt_lang_com_100046cherentsov_100046mapfront_100046mapfront_1_1EntryMethodHolder_init__V(){
  $wnd.setTimeout($entry(com_google_gwt_useragent_client_UserAgentAsserter_assertCompileTimeUserAgent__V));
  com_google_gwt_user_client_DocumentModeAsserter_$onModuleLoad__Lcom_google_gwt_user_client_DocumentModeAsserter_2V();
  com_google_gwt_logging_client_LogConfiguration_$clinit__V();
  com_cherentsov_mapfront_client_GTWClient_$onModuleLoad__Lcom_cherentsov_mapfront_client_GTWClient_2V(new com_cherentsov_mapfront_client_GTWClient_GTWClient__V);
}

function com_google_gwt_logging_client_LogConfiguration_$clinit__V(){
  com_google_gwt_logging_client_LogConfiguration_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_logging_client_LogConfiguration_impl = new com_google_gwt_logging_client_LogConfiguration$LogConfigurationImplNull_LogConfiguration$LogConfigurationImplNull__V;
}

function com_google_gwt_logging_client_LogConfiguration_loggingIsEnabled__Z(){
  com_google_gwt_logging_client_LogConfiguration_$clinit__V();
  if (!com_google_gwt_logging_client_LogConfiguration_impl) {
    return true;
  }
  return false;
}

var com_google_gwt_logging_client_LogConfiguration_impl;
function com_google_gwt_logging_client_LogConfiguration$LogConfigurationImplNull_LogConfiguration$LogConfigurationImplNull__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(94, 1, {}, com_google_gwt_logging_client_LogConfiguration$LogConfigurationImplNull_LogConfiguration$LogConfigurationImplNull__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1logging_1client_1LogConfiguration$LogConfigurationImplNull_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.google.gwt.logging.client', 'LogConfiguration/LogConfigurationImplNull', 94);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(267, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1text_1shared_1AbstractRenderer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.google.gwt.text.shared', 'AbstractRenderer', 267);
function com_google_gwt_text_shared_testing_PassthroughParser_PassthroughParser__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(194, 1, {}, com_google_gwt_text_shared_testing_PassthroughParser_PassthroughParser__V);
var com_google_gwt_text_shared_testing_PassthroughParser_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1text_1shared_1testing_1PassthroughParser_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_40, 'PassthroughParser', 194);
function com_google_gwt_text_shared_testing_PassthroughRenderer_PassthroughRenderer__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(193, 267, {}, com_google_gwt_text_shared_testing_PassthroughRenderer_PassthroughRenderer__V);
var com_google_gwt_text_shared_testing_PassthroughRenderer_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1text_1shared_1testing_1PassthroughRenderer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_40, 'PassthroughRenderer', 193);
function com_google_gwt_user_client_DOM_$clinit__V(){
  com_google_gwt_user_client_DOM_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_user_client_impl_DOMImplStandard_$clinit__V();
}

function com_google_gwt_user_client_DOM_dispatchEvent__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_dom_client_Element_2Z(evt, elem){
  com_google_gwt_user_client_DOM_$clinit__V();
  var eventListener;
  eventListener = com_google_gwt_user_client_impl_DOMImpl_getEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2(elem);
  if (!eventListener) {
    return false;
  }
  com_google_gwt_user_client_DOM_dispatchEvent__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(evt, elem, eventListener);
  return true;
}

function com_google_gwt_user_client_DOM_dispatchEvent__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(evt, elem, listener){
  com_google_gwt_user_client_DOM_$clinit__V();
  var prevCurrentEvent;
  prevCurrentEvent = com_google_gwt_user_client_DOM_currentEvent;
  com_google_gwt_user_client_DOM_currentEvent = evt;
  elem == com_google_gwt_user_client_DOM_sCaptureElem && com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(evt.type) == 8192 && (com_google_gwt_user_client_DOM_sCaptureElem = null);
  listener.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(evt);
  com_google_gwt_user_client_DOM_currentEvent = prevCurrentEvent;
}

function com_google_gwt_user_client_DOM_previewEvent__Lcom_google_gwt_user_client_Event_2Z(evt){
  com_google_gwt_user_client_DOM_$clinit__V();
  var ret;
  ret = com_google_gwt_user_client_Event$NativePreviewEvent_fire__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_dom_client_NativeEvent_2Z(com_google_gwt_user_client_Event_handlers, evt);
  if (!ret && !!evt) {
    evt.stopPropagation();
    evt.preventDefault();
  }
  return ret;
}

function com_google_gwt_user_client_DOM_releaseCapture__Lcom_google_gwt_dom_client_Element_2V(elem){
  com_google_gwt_user_client_DOM_$clinit__V();
  !!com_google_gwt_user_client_DOM_sCaptureElem && elem == com_google_gwt_user_client_DOM_sCaptureElem && (com_google_gwt_user_client_DOM_sCaptureElem = null);
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V();
  (com_google_gwt_user_client_impl_DOMImplStandard_$clinit__V() , com_google_gwt_user_client_impl_DOMImplStandard_captureElem) == elem && (com_google_gwt_user_client_impl_DOMImplStandard_captureElem = null);
}

function com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(maybePotential){
  com_google_gwt_user_client_DOM_$clinit__V();
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function com_google_gwt_user_client_DOM_setCapture__Lcom_google_gwt_dom_client_Element_2V(elem){
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_user_client_DOM_sCaptureElem = elem;
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V();
  com_google_gwt_user_client_impl_DOMImplStandard_$clinit__V() , com_google_gwt_user_client_impl_DOMImplStandard_captureElem = elem;
}

function com_google_gwt_user_client_DOM_sinkEvents__Lcom_google_gwt_dom_client_Element_2IV(elem, eventBits){
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V();
  com_google_gwt_user_client_impl_DOMImplStandard_$sinkEventsImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2IV(elem, eventBits);
}

var com_google_gwt_user_client_DOM_currentEvent = null, com_google_gwt_user_client_DOM_sCaptureElem;
function com_google_gwt_user_client_DocumentModeAsserter_$onModuleLoad__Lcom_google_gwt_user_client_DocumentModeAsserter_2V(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_9, 2, 6, [$intern_20]);
  for (i = 0; i < allowedModes.length; i++) {
    if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z($intern_20, allowedModes[0]) && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function com_google_gwt_user_client_Event_$getTypeInt__Lcom_google_gwt_user_client_Event_2I(this$static){
  return com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(this$static.type);
}

function com_google_gwt_user_client_Event_addNativePreviewHandler__Lcom_google_gwt_user_client_Event$NativePreviewHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(handler){
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V();
  !com_google_gwt_user_client_Event$NativePreviewEvent_TYPE && (com_google_gwt_user_client_Event$NativePreviewEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V);
  if (!com_google_gwt_user_client_Event_handlers) {
    com_google_gwt_user_client_Event_handlers = new com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2ZV(null, true);
    com_google_gwt_user_client_Event$NativePreviewEvent_singleton = new com_google_gwt_user_client_Event$NativePreviewEvent_Event$NativePreviewEvent__V;
  }
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(com_google_gwt_user_client_Event_handlers, com_google_gwt_user_client_Event$NativePreviewEvent_TYPE, handler);
}

function com_google_gwt_user_client_Event_getTypeInt__Ljava_lang_String_2I(typeName){
  return com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I((com_google_gwt_user_client_DOM_$clinit__V() , typeName));
}

var com_google_gwt_user_client_Event_handlers;
function com_google_gwt_user_client_Event$NativePreviewEvent_$dispatch__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2Lcom_google_gwt_user_client_Event$NativePreviewHandler_2V(this$static, handler){
  com_google_gwt_user_client_ui_PopupPanel_$previewNativeEvent__Lcom_google_gwt_user_client_ui_PopupPanel_2Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V(handler.com_google_gwt_user_client_ui_PopupPanel$3_this$01, this$static);
  com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isFirstHandler = false;
}

function com_google_gwt_user_client_Event$NativePreviewEvent_$revive__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V(this$static){
  this$static.com_google_gwt_event_shared_GwtEvent_dead = false;
  this$static.com_google_web_bindery_event_shared_Event_source = null;
  this$static.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = false;
  this$static.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed = false;
  this$static.com_google_gwt_user_client_Event$NativePreviewEvent_isFirstHandler = true;
  this$static.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent = null;
}

function com_google_gwt_user_client_Event$NativePreviewEvent_$setNativeEvent__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(this$static, nativeEvent){
  this$static.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent = nativeEvent;
}

function com_google_gwt_user_client_Event$NativePreviewEvent_Event$NativePreviewEvent__V(){
}

function com_google_gwt_user_client_Event$NativePreviewEvent_fire__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_dom_client_NativeEvent_2Z(handlers, nativeEvent){
  var lastIsCanceled, lastIsConsumed, lastIsFirstHandler, lastNativeEvent, ret;
  if (!!com_google_gwt_user_client_Event$NativePreviewEvent_TYPE && !!handlers && com_google_gwt_event_shared_HandlerManager_$isEventHandled__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Z(handlers, com_google_gwt_user_client_Event$NativePreviewEvent_TYPE)) {
    lastIsCanceled = com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled;
    lastIsConsumed = com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed;
    lastIsFirstHandler = com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isFirstHandler;
    lastNativeEvent = com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent;
    com_google_gwt_user_client_Event$NativePreviewEvent_$revive__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V(com_google_gwt_user_client_Event$NativePreviewEvent_singleton);
    com_google_gwt_user_client_Event$NativePreviewEvent_$setNativeEvent__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(com_google_gwt_user_client_Event$NativePreviewEvent_singleton, nativeEvent);
    com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(handlers, com_google_gwt_user_client_Event$NativePreviewEvent_singleton);
    ret = !(com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled && !com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed);
    com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = lastIsCanceled;
    com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed = lastIsConsumed;
    com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isFirstHandler = lastIsFirstHandler;
    com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent = lastNativeEvent;
    return ret;
  }
  return true;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(130, 255, {}, com_google_gwt_user_client_Event$NativePreviewEvent_Event$NativePreviewEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_user_client_Event$NativePreviewEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_user_client_Event$NativePreviewEvent_$dispatch__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2Lcom_google_gwt_user_client_Event$NativePreviewHandler_2V(this, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 273));
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_user_client_Event$NativePreviewEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_user_client_Event$NativePreviewEvent_TYPE;
}
;
_.revive__V = function com_google_gwt_user_client_Event$NativePreviewEvent_revive__V(){
  com_google_gwt_user_client_Event$NativePreviewEvent_$revive__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V(this);
}
;
_.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = false;
_.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed = false;
_.com_google_gwt_user_client_Event$NativePreviewEvent_isFirstHandler = false;
var com_google_gwt_user_client_Event$NativePreviewEvent_TYPE, com_google_gwt_user_client_Event$NativePreviewEvent_singleton;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Event$NativePreviewEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'Event/NativePreviewEvent', 130);
function com_google_gwt_user_client_History_$clinit__V(){
  com_google_gwt_user_client_History_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  new com_google_gwt_user_client_History$HistoryImpl_History$HistoryImpl__V;
  com_google_gwt_user_client_History_historyEventSource = new com_google_gwt_user_client_History$HistoryEventSource_History$HistoryEventSource__V;
  com_google_gwt_user_client_History_token = com_google_gwt_user_client_History_getDecodedHash__Ljava_lang_String_2();
}

function com_google_gwt_user_client_History_addValueChangeHandler__Lcom_google_gwt_event_logical_shared_ValueChangeHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(handler){
  com_google_gwt_user_client_History_$clinit__V();
  return com_google_gwt_user_client_History$HistoryEventSource_$addValueChangeHandler__Lcom_google_gwt_user_client_History$HistoryEventSource_2Lcom_google_gwt_event_logical_shared_ValueChangeHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(com_google_gwt_user_client_History_historyEventSource, handler);
}

function com_google_gwt_user_client_History_getDecodedHash__Ljava_lang_String_2(){
  var hashToken, com_google_gwt_user_client_impl_WindowImplIE_$getHash__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_href_0, com_google_gwt_user_client_impl_WindowImplIE_$getHash__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_hashLoc_0;
  hashToken = (com_google_gwt_user_client_impl_WindowImplIE_$getHash__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_href_0 = $wnd.location.href , com_google_gwt_user_client_impl_WindowImplIE_$getHash__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_hashLoc_0 = com_google_gwt_user_client_impl_WindowImplIE_$getHash__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_href_0.indexOf('#') , com_google_gwt_user_client_impl_WindowImplIE_$getHash__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_hashLoc_0 > 0?com_google_gwt_user_client_impl_WindowImplIE_$getHash__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_href_0.substring(com_google_gwt_user_client_impl_WindowImplIE_$getHash__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_hashLoc_0):'');
  if (hashToken == null || hashToken.length == 0) {
    return '';
  }
  return com_google_gwt_user_client_History$HistoryTokenEncoder_$decode__Lcom_google_gwt_user_client_History$HistoryTokenEncoder_2Ljava_lang_String_2Ljava_lang_String_2(hashToken.substr(1));
}

function com_google_gwt_user_client_History_onHashChanged__V(){
  com_google_gwt_user_client_History_$clinit__V();
  var hashToken;
  hashToken = com_google_gwt_user_client_History_getDecodedHash__Ljava_lang_String_2();
  if (!java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(hashToken, com_google_gwt_user_client_History_token)) {
    com_google_gwt_user_client_History_token = hashToken;
    com_google_gwt_event_logical_shared_ValueChangeEvent_fire__Lcom_google_gwt_event_logical_shared_HasValueChangeHandlers_2Ljava_lang_Object_2V(com_google_gwt_user_client_History_historyEventSource);
  }
}

var com_google_gwt_user_client_History_historyEventSource, com_google_gwt_user_client_History_token;
function com_google_gwt_user_client_History$HistoryEventSource_$addValueChangeHandler__Lcom_google_gwt_user_client_History$HistoryEventSource_2Lcom_google_gwt_event_logical_shared_ValueChangeHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static, handler){
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static.com_google_gwt_user_client_History$HistoryEventSource_handlers, (!com_google_gwt_event_logical_shared_ValueChangeEvent_TYPE && (com_google_gwt_event_logical_shared_ValueChangeEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V) , com_google_gwt_event_logical_shared_ValueChangeEvent_TYPE), handler);
}

function com_google_gwt_user_client_History$HistoryEventSource_History$HistoryEventSource__V(){
  this.com_google_gwt_user_client_History$HistoryEventSource_handlers = new com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V(null);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(211, 1, {11:1}, com_google_gwt_user_client_History$HistoryEventSource_History$HistoryEventSource__V);
_.fireEvent__Lcom_google_gwt_event_shared_GwtEvent_2V = function com_google_gwt_user_client_History$HistoryEventSource_fireEvent__Lcom_google_gwt_event_shared_GwtEvent_2V(event_0){
  com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(this.com_google_gwt_user_client_History$HistoryEventSource_handlers, event_0);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1History$HistoryEventSource_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'History/HistoryEventSource', 211);
function com_google_gwt_user_client_History$HistoryImpl_History$HistoryImpl__V(){
  var com_google_gwt_user_client_History$HistoryImpl_$attachListener__Lcom_google_gwt_user_client_History$HistoryImpl_2V_handler_0;
  com_google_gwt_user_client_History$HistoryImpl_$attachListener__Lcom_google_gwt_user_client_History$HistoryImpl_2V_handler_0 = $entry(com_google_gwt_user_client_History_onHashChanged__V);
  $wnd.addEventListener('hashchange', com_google_gwt_user_client_History$HistoryImpl_$attachListener__Lcom_google_gwt_user_client_History$HistoryImpl_2V_handler_0, false);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(212, 1, {}, com_google_gwt_user_client_History$HistoryImpl_History$HistoryImpl__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1History$HistoryImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'History/HistoryImpl', 212);
function com_google_gwt_user_client_History$HistoryTokenEncoder_$decode__Lcom_google_gwt_user_client_History$HistoryTokenEncoder_2Ljava_lang_String_2Ljava_lang_String_2(toDecode){
  return $wnd.decodeURI(toDecode.replace('%23', '#'));
}

function com_google_gwt_user_client_Window_addCloseHandler__Lcom_google_gwt_event_logical_shared_CloseHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(handler){
  com_google_gwt_user_client_Window_maybeInitializeCloseHandlers__V();
  return com_google_gwt_user_client_Window_addHandler__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(com_google_gwt_event_logical_shared_CloseEvent_TYPE?com_google_gwt_event_logical_shared_CloseEvent_TYPE:(com_google_gwt_event_logical_shared_CloseEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V), handler);
}

function com_google_gwt_user_client_Window_addHandler__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(type_0, handler){
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2((!com_google_gwt_user_client_Window_handlers && (com_google_gwt_user_client_Window_handlers = new com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V) , com_google_gwt_user_client_Window_handlers), type_0, handler);
}

function com_google_gwt_user_client_Window_addResizeHandler__Lcom_google_gwt_event_logical_shared_ResizeHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(handler){
  com_google_gwt_user_client_Window_maybeInitializeCloseHandlers__V();
  com_google_gwt_user_client_Window_maybeInitializeResizeHandlers__V();
  return com_google_gwt_user_client_Window_addHandler__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2((!com_google_gwt_event_logical_shared_ResizeEvent_TYPE && (com_google_gwt_event_logical_shared_ResizeEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V) , com_google_gwt_event_logical_shared_ResizeEvent_TYPE), handler);
}

function com_google_gwt_user_client_Window_maybeInitializeCloseHandlers__V(){
  if (!com_google_gwt_user_client_Window_closeHandlersInitialized) {
    com_google_gwt_user_client_impl_WindowImplIE_$initHandler__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V('function __gwt_initWindowCloseHandler(beforeunload, unload) {\n  var wnd = window\n  , oldOnBeforeUnload = wnd.onbeforeunload\n  , oldOnUnload = wnd.onunload;\n  \n  wnd.onbeforeunload = function(evt) {\n    var ret, oldRet;\n    try {\n      ret = beforeunload();\n    } finally {\n      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);\n    }\n    // Avoid returning null as IE6 will coerce it into a string.\n    // Ensure that "" gets returned properly.\n    if (ret != null) {\n      return ret;\n    }\n    if (oldRet != null) {\n      return oldRet;\n    }\n    // returns undefined.\n  };\n  \n  wnd.onunload = function(evt) {\n    try {\n      unload();\n    } finally {\n      oldOnUnload && oldOnUnload(evt);\n      wnd.onresize = null;\n      wnd.onscroll = null;\n      wnd.onbeforeunload = null;\n      wnd.onunload = null;\n    }\n  };\n  \n  // Remove the reference once we\'ve initialize the handler\n  wnd.__gwt_initWindowCloseHandler = undefined;\n}\n', new com_google_gwt_user_client_impl_WindowImplIE$1_WindowImplIE$1__Lcom_google_gwt_user_client_impl_WindowImplIE_2V);
    com_google_gwt_user_client_Window_closeHandlersInitialized = true;
  }
}

function com_google_gwt_user_client_Window_maybeInitializeResizeHandlers__V(){
  if (!com_google_gwt_user_client_Window_resizeHandlersInitialized) {
    com_google_gwt_user_client_impl_WindowImplIE_$initHandler__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V("function __gwt_initWindowResizeHandler(resize) {\n  var wnd = window, oldOnResize = wnd.onresize;\n  \n  wnd.onresize = function(evt) {\n    try {\n      resize();\n    } finally {\n      oldOnResize && oldOnResize(evt);\n    }\n  };\n  \n  // Remove the reference once we've initialize the handler\n  wnd.__gwt_initWindowResizeHandler = undefined;\n}\n", new com_google_gwt_user_client_impl_WindowImplIE$2_WindowImplIE$2__Lcom_google_gwt_user_client_impl_WindowImplIE_2V);
    com_google_gwt_user_client_Window_resizeHandlersInitialized = true;
  }
}

function com_google_gwt_user_client_Window_onClosed__V(){
  com_google_gwt_user_client_Window_closeHandlersInitialized && com_google_gwt_event_logical_shared_CloseEvent_fire__Lcom_google_gwt_event_logical_shared_HasCloseHandlers_2Ljava_lang_Object_2ZV((!com_google_gwt_user_client_Window_handlers && (com_google_gwt_user_client_Window_handlers = new com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V) , com_google_gwt_user_client_Window_handlers));
}

function com_google_gwt_user_client_Window_onClosing__Ljava_lang_String_2(){
  var event_0;
  if (com_google_gwt_user_client_Window_closeHandlersInitialized) {
    event_0 = new com_google_gwt_user_client_Window$ClosingEvent_Window$ClosingEvent__V;
    !!com_google_gwt_user_client_Window_handlers && com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(com_google_gwt_user_client_Window_handlers, event_0);
    return null;
  }
  return null;
}

function com_google_gwt_user_client_Window_onResize__V(){
  var height, width_0;
  if (com_google_gwt_user_client_Window_resizeHandlersInitialized) {
    width_0 = com_google_gwt_dom_client_Document_$getClientWidth__Lcom_google_gwt_dom_client_Document_2I($doc);
    height = com_google_gwt_dom_client_Document_$getClientHeight__Lcom_google_gwt_dom_client_Document_2I($doc);
    if (com_google_gwt_user_client_Window_lastResizeWidth != width_0 || com_google_gwt_user_client_Window_lastResizeHeight != height) {
      com_google_gwt_user_client_Window_lastResizeWidth = width_0;
      com_google_gwt_user_client_Window_lastResizeHeight = height;
      com_google_gwt_event_logical_shared_ResizeEvent_fire__Lcom_google_gwt_event_logical_shared_HasResizeHandlers_2IIV((!com_google_gwt_user_client_Window_handlers && (com_google_gwt_user_client_Window_handlers = new com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V) , com_google_gwt_user_client_Window_handlers), width_0);
    }
  }
}

var com_google_gwt_user_client_Window_closeHandlersInitialized = false, com_google_gwt_user_client_Window_handlers, com_google_gwt_user_client_Window_lastResizeHeight = 0, com_google_gwt_user_client_Window_lastResizeWidth = 0, com_google_gwt_user_client_Window_resizeHandlersInitialized = false;
function com_google_gwt_user_client_Window$ClosingEvent_$clinit__V(){
  com_google_gwt_user_client_Window$ClosingEvent_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_user_client_Window$ClosingEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V;
}

function com_google_gwt_user_client_Window$ClosingEvent_Window$ClosingEvent__V(){
  com_google_gwt_user_client_Window$ClosingEvent_$clinit__V();
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(146, 255, {}, com_google_gwt_user_client_Window$ClosingEvent_Window$ClosingEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_user_client_Window$ClosingEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  javaemul_internal_InternalPreconditions_checkCriticalType__ZLjava_lang_String_2V(handler == null);
  null.$_nullMethod();
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_user_client_Window$ClosingEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_user_client_Window$ClosingEvent_TYPE;
}
;
var com_google_gwt_user_client_Window$ClosingEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Window$ClosingEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'Window/ClosingEvent', 146);
function com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V(){
  com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V.call(this, null);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(68, 44, {11:1}, com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Window$WindowHandlers_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'Window/WindowHandlers', 68);
function com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return $intern_41;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_39;
    case 'touchstart':
      return $intern_42;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return $intern_38;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return $intern_43;
    case 'gesturechange':
      return $intern_44;
    case 'gestureend':
      return $intern_45;
    default:return -1;
  }
}

function com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V(){
  if (!com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized) {
    com_google_gwt_user_client_impl_DOMImplStandard_$initEventSystem__Lcom_google_gwt_user_client_impl_DOMImplStandard_2V();
    com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized = true;
  }
}

function com_google_gwt_user_client_impl_DOMImpl_getEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2(elem){
  var maybeListener = elem.__listener;
  return !com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(maybeListener) && com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(maybeListener, 14)?maybeListener:null;
}

function com_google_gwt_user_client_impl_DOMImpl_setEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(elem, listener){
  elem.__listener = listener;
}

var com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized = false;
function com_google_gwt_user_client_impl_DOMImplStandard_$clinit__V(){
  com_google_gwt_user_client_impl_DOMImplStandard_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_user_client_impl_DOMImplStandard_bitlessEventDispatchers = {_default_:com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent__Lcom_google_gwt_user_client_Event_2V, dragenter:com_google_gwt_user_client_impl_DOMImplStandard_dispatchDragEvent__Lcom_google_gwt_user_client_Event_2V, dragover:com_google_gwt_user_client_impl_DOMImplStandard_dispatchDragEvent__Lcom_google_gwt_user_client_Event_2V};
  com_google_gwt_user_client_impl_DOMImplStandard_captureEventDispatchers = {click:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, dblclick:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mousedown:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mouseup:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mousemove:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mouseover:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mouseout:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mousewheel:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, keydown:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent__Lcom_google_gwt_user_client_Event_2V, keyup:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent__Lcom_google_gwt_user_client_Event_2V, keypress:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent__Lcom_google_gwt_user_client_Event_2V, touchstart:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, touchend:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, touchmove:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, touchcancel:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, gesturestart:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, gestureend:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, gesturechange:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V};
}

function com_google_gwt_user_client_impl_DOMImplStandard_$getChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2ILcom_google_gwt_dom_client_Element_2(elem, index_0){
  var count = 0, child = elem.firstChild;
  while (child) {
    if (child.nodeType == 1) {
      if (index_0 == count)
        return child;
      ++count;
    }
    child = child.nextSibling;
  }
  return null;
}

function com_google_gwt_user_client_impl_DOMImplStandard_$initEventSystem__Lcom_google_gwt_user_client_impl_DOMImplStandard_2V(){
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent = $entry(com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent__Lcom_google_gwt_user_client_Event_2V);
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent = $entry(com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent__Lcom_google_gwt_user_client_Event_2V);
  var foreach = com_google_gwt_user_client_impl_EventMap_foreach__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V;
  var bitlessEvents = com_google_gwt_user_client_impl_DOMImplStandard_bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents_0 = com_google_gwt_user_client_impl_DOMImplStandard_captureEventDispatchers;
  foreach(captureEvents_0, function(e, fn){
    captureEvents_0[e] = $entry(fn);
  }
  );
  foreach(captureEvents_0, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}

function com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEvent__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, eventTypeName){
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V();
  com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEventImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, eventTypeName);
  java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z('dragover', eventTypeName) && com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEventImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, 'dragenter');
}

function com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEventImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, eventTypeName){
  var dispatchMap = com_google_gwt_user_client_impl_DOMImplStandard_bitlessEventDispatchers;
  var dispatcher = dispatchMap[eventTypeName] || dispatchMap['_default_'];
  elem.addEventListener(eventTypeName, dispatcher, false);
}

function com_google_gwt_user_client_impl_DOMImplStandard_$sinkEventsImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2IV(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 2 && (elem.ondblclick = bits & 2?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 4 && (elem.onmousedown = bits & 4?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 8 && (elem.onmouseup = bits & 8?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 16 && (elem.onmouseover = bits & 16?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 32 && (elem.onmouseout = bits & 32?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 64 && (elem.onmousemove = bits & 64?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 128 && (elem.onkeydown = bits & 128?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 256 && (elem.onkeypress = bits & 256?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 512 && (elem.onkeyup = bits & 512?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 1024 && (elem.onchange = bits & 1024?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 4096 && (elem.onblur = bits & 4096?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 32768 && (elem.onload = bits & 32768?com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent:null);
  chMask & $intern_41 && (elem.onerror = bits & $intern_41?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & $intern_39 && (elem.onpaste = bits & $intern_39?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & $intern_42 && (elem.ontouchstart = bits & $intern_42?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & $intern_38 && (elem.ontouchend = bits & $intern_38?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & $intern_43 && (elem.ongesturestart = bits & $intern_43?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & $intern_44 && (elem.ongesturechange = bits & $intern_44?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & $intern_45 && (elem.ongestureend = bits & $intern_45?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
}

function com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent__Lcom_google_gwt_user_client_Event_2V(evt){
  com_google_gwt_user_client_DOM_previewEvent__Lcom_google_gwt_user_client_Event_2Z(evt);
}

function com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V(evt){
  var cancelled;
  cancelled = !com_google_gwt_user_client_DOM_previewEvent__Lcom_google_gwt_user_client_Event_2Z(evt);
  if (cancelled || !com_google_gwt_user_client_impl_DOMImplStandard_captureElem) {
    return;
  }
  com_google_gwt_user_client_DOM_dispatchEvent__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_dom_client_Element_2Z(evt, com_google_gwt_user_client_impl_DOMImplStandard_captureElem) && (evt.stopPropagation() , undefined);
}

function com_google_gwt_user_client_impl_DOMImplStandard_dispatchDragEvent__Lcom_google_gwt_user_client_Event_2V(evt){
  evt.preventDefault();
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent__Lcom_google_gwt_user_client_Event_2V(evt);
}

function com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent__Lcom_google_gwt_user_client_Event_2V(evt){
  var element;
  element = com_google_gwt_user_client_impl_DOMImplStandard_getFirstAncestorWithListener__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_dom_client_Element_2(evt);
  if (!element) {
    return;
  }
  com_google_gwt_user_client_DOM_dispatchEvent__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(evt, element.nodeType != 1?null:element, com_google_gwt_user_client_impl_DOMImpl_getEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2(element));
}

function com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent__Lcom_google_gwt_user_client_Event_2V(evt){
  var element;
  element = evt.currentTarget || $wnd;
  element['__gwtLastUnhandledEvent'] = evt.type;
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent__Lcom_google_gwt_user_client_Event_2V(evt);
}

function com_google_gwt_user_client_impl_DOMImplStandard_getFirstAncestorWithListener__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_dom_client_Element_2(evt){
  var curElem;
  curElem = evt.currentTarget || $wnd;
  while (!!curElem && !com_google_gwt_user_client_impl_DOMImpl_getEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

var com_google_gwt_user_client_impl_DOMImplStandard_bitlessEventDispatchers, com_google_gwt_user_client_impl_DOMImplStandard_captureElem, com_google_gwt_user_client_impl_DOMImplStandard_captureEventDispatchers, com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent, com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent;
function com_google_gwt_user_client_impl_EventMap_foreach__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(map_0, fn){
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
}

function com_google_gwt_user_client_impl_WindowImplIE_$initHandler__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V(initFunc, cmd){
  var scriptElem;
  scriptElem = com_google_gwt_dom_client_DOMImplStandardBase_$createScriptElement__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ScriptElement_2($doc, initFunc);
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2($doc.body, scriptElem);
  cmd.execute__V();
  com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2($doc.body, scriptElem);
}

function com_google_gwt_user_client_impl_WindowImplIE$1_WindowImplIE$1__Lcom_google_gwt_user_client_impl_WindowImplIE_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(200, 1, {}, com_google_gwt_user_client_impl_WindowImplIE$1_WindowImplIE$1__Lcom_google_gwt_user_client_impl_WindowImplIE_2V);
_.execute__V = function com_google_gwt_user_client_impl_WindowImplIE$1_execute__V(){
  $wnd.__gwt_initWindowCloseHandler($entry(com_google_gwt_user_client_Window_onClosing__Ljava_lang_String_2), $entry(com_google_gwt_user_client_Window_onClosed__V));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1impl_1WindowImplIE$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'WindowImplIE/1', 200);
function com_google_gwt_user_client_impl_WindowImplIE$2_WindowImplIE$2__Lcom_google_gwt_user_client_impl_WindowImplIE_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(201, 1, {}, com_google_gwt_user_client_impl_WindowImplIE$2_WindowImplIE$2__Lcom_google_gwt_user_client_impl_WindowImplIE_2V);
_.execute__V = function com_google_gwt_user_client_impl_WindowImplIE$2_execute__V(){
  $wnd.__gwt_initWindowResizeHandler($entry(com_google_gwt_user_client_Window_onResize__V));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1impl_1WindowImplIE$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_46, 'WindowImplIE/2', 201);
function com_google_gwt_user_client_ui_UIObject_$addStyleName__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2V(this$static, style){
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2ZV(this$static.getStyleElement__Lcom_google_gwt_user_client_Element_2(), style, true);
}

function com_google_gwt_user_client_ui_UIObject_$getElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2(this$static){
  return com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element;
}

function com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2V(this$static, elem){
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this$static, (com_google_gwt_user_client_DOM_$clinit__V() , elem));
}

function com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this$static, elem){
  this$static.com_google_gwt_user_client_ui_UIObject_element = elem;
}

function com_google_gwt_user_client_ui_UIObject_$setStyleName__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2V(this$static){
  (com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element).className = '';
}

function com_google_gwt_user_client_ui_UIObject_$setStyleName__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2ZV(this$static){
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2ZV((com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element), $intern_5, false);
}

function com_google_gwt_user_client_ui_UIObject_$sinkBitlessEvent__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2V(this$static, eventTypeName){
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEvent__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this$static.com_google_gwt_user_client_ui_UIObject_element, eventTypeName);
}

function com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2ZV(elem, style, add_0){
  if (!elem) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V($intern_47));
  }
  style = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(style);
  if (style.length == 0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V($intern_48));
  }
  add_0?com_google_gwt_dom_client_Element_$addClassName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(elem, style):com_google_gwt_dom_client_Element_$removeClassName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(elem, style);
}

function com_google_gwt_user_client_ui_UIObject_setStylePrimaryName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, style){
  if (!elem) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V($intern_47));
  }
  style = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(style);
  if (style.length == 0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V($intern_48));
  }
  com_google_gwt_user_client_ui_UIObject_updatePrimaryAndDependentStyleNames__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, style);
}

function com_google_gwt_user_client_ui_UIObject_updatePrimaryAndDependentStyleNames__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, newPrimaryStyle){
  var classes = (elem.className || '').split(/\s+/);
  if (!classes) {
    return;
  }
  var oldPrimaryStyle = classes[0];
  var oldPrimaryStyleLen = oldPrimaryStyle.length;
  classes[0] = newPrimaryStyle;
  for (var i = 1, n = classes.length; i < n; i++) {
    var name_0 = classes[i];
    name_0.length > oldPrimaryStyleLen && name_0.charAt(oldPrimaryStyleLen) == '-' && name_0.indexOf(oldPrimaryStyle) == 0 && (classes[i] = newPrimaryStyle + name_0.substring(oldPrimaryStyleLen));
  }
  elem.className = classes.join(' ');
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(10, 1, {13:1, 10:1});
_.getStyleElement__Lcom_google_gwt_user_client_Element_2 = function com_google_gwt_user_client_ui_UIObject_getStyleElement__Lcom_google_gwt_user_client_Element_2(){
  return com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element;
}
;
_.setHeight__Ljava_lang_String_2V = function com_google_gwt_user_client_ui_UIObject_setHeight__Ljava_lang_String_2V(height){
  (com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element).style['height'] = height;
}
;
_.setWidth__Ljava_lang_String_2V = function com_google_gwt_user_client_ui_UIObject_setWidth__Ljava_lang_String_2V(width_0){
  (com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element).style['width'] = width_0;
}
;
_.toString__Ljava_lang_String_2 = function com_google_gwt_user_client_ui_UIObject_toString__Ljava_lang_String_2(){
  if (!this.com_google_gwt_user_client_ui_UIObject_element) {
    return '(null handle)';
  }
  return (com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element).outerHTML;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1UIObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'UIObject', 10);
function com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static, handler, type_0){
  var typeInt;
  typeInt = com_google_gwt_user_client_Event_getTypeInt__Ljava_lang_String_2I(type_0.com_google_gwt_event_dom_client_DomEvent$Type_name);
  typeInt == -1?com_google_gwt_user_client_ui_UIObject_$sinkBitlessEvent__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2V(this$static, type_0.com_google_gwt_event_dom_client_DomEvent$Type_name):this$static.com_google_gwt_user_client_ui_Widget_eventsToSink == -1?com_google_gwt_user_client_DOM_sinkEvents__Lcom_google_gwt_dom_client_Element_2IV((com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element), typeInt | (this$static.com_google_gwt_user_client_ui_UIObject_element.__eventBits || 0)):(this$static.com_google_gwt_user_client_ui_Widget_eventsToSink |= typeInt);
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(!this$static.com_google_gwt_user_client_ui_Widget_handlerManager?(this$static.com_google_gwt_user_client_ui_Widget_handlerManager = new com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V(this$static)):this$static.com_google_gwt_user_client_ui_Widget_handlerManager, type_0, handler);
}

function com_google_gwt_user_client_ui_Widget_$fireEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, event_0){
  !!this$static.com_google_gwt_user_client_ui_Widget_handlerManager && com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static.com_google_gwt_user_client_ui_Widget_handlerManager, event_0);
}

function com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this$static){
  var bitsToAdd;
  if (this$static.com_google_gwt_user_client_ui_Widget_attached) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V("Should only call onAttach when the widget is detached from the browser's document"));
  }
  this$static.com_google_gwt_user_client_ui_Widget_attached = true;
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_user_client_impl_DOMImpl_setEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(this$static.com_google_gwt_user_client_ui_UIObject_element, this$static);
  bitsToAdd = this$static.com_google_gwt_user_client_ui_Widget_eventsToSink;
  this$static.com_google_gwt_user_client_ui_Widget_eventsToSink = -1;
  bitsToAdd > 0 && (this$static.com_google_gwt_user_client_ui_Widget_eventsToSink == -1?com_google_gwt_user_client_DOM_sinkEvents__Lcom_google_gwt_dom_client_Element_2IV(this$static.com_google_gwt_user_client_ui_UIObject_element, bitsToAdd | (this$static.com_google_gwt_user_client_ui_UIObject_element.__eventBits || 0)):(this$static.com_google_gwt_user_client_ui_Widget_eventsToSink |= bitsToAdd));
  this$static.doAttachChildren__V();
  this$static.onLoad__V();
}

function com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this$static, event_0){
  var related;
  switch (com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget;
      if (!!related && com_google_gwt_dom_client_DOMImplTrident_isOrHasChildImpl__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Z(this$static.com_google_gwt_user_client_ui_UIObject_element, related)) {
        return;
      }

  }
  com_google_gwt_event_dom_client_DomEvent_fireNativeEvent__Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_event_shared_HasHandlers_2Lcom_google_gwt_dom_client_Element_2V(event_0, this$static, this$static.com_google_gwt_user_client_ui_UIObject_element);
}

function com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this$static){
  if (!this$static.com_google_gwt_user_client_ui_Widget_attached) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V("Should only call onDetach when the widget is attached to the browser's document"));
  }
  try {
    this$static.onUnload__V();
  }
   finally {
    try {
      this$static.doDetachChildren__V();
    }
     finally {
      com_google_gwt_user_client_DOM_$clinit__V();
      this$static.com_google_gwt_user_client_ui_UIObject_element.__listener = null;
      this$static.com_google_gwt_user_client_ui_Widget_attached = false;
    }
  }
}

function com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(this$static){
  if (!this$static.com_google_gwt_user_client_ui_Widget_parent) {
    com_google_gwt_user_client_ui_RootPanel_$clinit__V();
    java_util_HashSet_$contains__Ljava_util_HashSet_2Ljava_lang_Object_2Z(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, this$static) && com_google_gwt_user_client_ui_RootPanel_detachNow__Lcom_google_gwt_user_client_ui_Widget_2V(this$static);
  }
   else if (this$static.com_google_gwt_user_client_ui_Widget_parent) {
    this$static.com_google_gwt_user_client_ui_Widget_parent.remove__Lcom_google_gwt_user_client_ui_Widget_2Z(this$static);
  }
   else if (this$static.com_google_gwt_user_client_ui_Widget_parent) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V("This widget's parent does not implement HasWidgets"));
  }
}

function com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, parent_0){
  var oldParent;
  oldParent = this$static.com_google_gwt_user_client_ui_Widget_parent;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.com_google_gwt_user_client_ui_Widget_attached && com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this$static);
    }
     finally {
      this$static.com_google_gwt_user_client_ui_Widget_parent = null;
    }
  }
   else {
    if (oldParent) {
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('Cannot set a new parent without first clearing the old parent'));
    }
    this$static.com_google_gwt_user_client_ui_Widget_parent = parent_0;
    parent_0.com_google_gwt_user_client_ui_Widget_attached && this$static.onAttach__V();
  }
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(8, 10, $intern_50);
_.doAttachChildren__V = function com_google_gwt_user_client_ui_Widget_doAttachChildren__V(){
}
;
_.doDetachChildren__V = function com_google_gwt_user_client_ui_Widget_doDetachChildren__V(){
}
;
_.fireEvent__Lcom_google_gwt_event_shared_GwtEvent_2V = function com_google_gwt_user_client_ui_Widget_fireEvent__Lcom_google_gwt_event_shared_GwtEvent_2V(event_0){
  com_google_gwt_user_client_ui_Widget_$fireEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_GwtEvent_2V(this, event_0);
}
;
_.onAttach__V = function com_google_gwt_user_client_ui_Widget_onAttach__V(){
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
}
;
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V = function com_google_gwt_user_client_ui_Widget_onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(event_0){
  com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event_0);
}
;
_.onLoad__V = function com_google_gwt_user_client_ui_Widget_onLoad__V(){
}
;
_.onUnload__V = function com_google_gwt_user_client_ui_Widget_onUnload__V(){
}
;
_.com_google_gwt_user_client_ui_Widget_attached = false;
_.com_google_gwt_user_client_ui_Widget_eventsToSink = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'Widget', 8);
function com_google_gwt_user_client_ui_Panel_$adopt__Lcom_google_gwt_user_client_ui_Panel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, child){
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(child, this$static);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(253, 8, $intern_50);
_.doAttachChildren__V = function com_google_gwt_user_client_ui_Panel_doAttachChildren__V(){
  com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(this, (com_google_gwt_user_client_ui_AttachDetachException_$clinit__V() , com_google_gwt_user_client_ui_AttachDetachException_attachCommand));
}
;
_.doDetachChildren__V = function com_google_gwt_user_client_ui_Panel_doDetachChildren__V(){
  com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(this, (com_google_gwt_user_client_ui_AttachDetachException_$clinit__V() , com_google_gwt_user_client_ui_AttachDetachException_detachCommand));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Panel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'Panel', 253);
function com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, child, container){
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(child);
  com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, child);
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(container, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(child.com_google_gwt_user_client_ui_UIObject_element));
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(child, this$static);
}

function com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, w){
  var elem;
  if (w.com_google_gwt_user_client_ui_Widget_parent != this$static) {
    return false;
  }
  try {
    com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(w, null);
  }
   finally {
    elem = (com_google_gwt_user_client_DOM_$clinit__V() , w.com_google_gwt_user_client_ui_UIObject_element);
    com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2((null , com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(elem)), elem);
    com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, w);
  }
  return true;
}

function com_google_gwt_user_client_ui_ComplexPanel_ComplexPanel__V(){
  this.com_google_gwt_user_client_ui_ComplexPanel_children = new com_google_gwt_user_client_ui_WidgetCollection_WidgetCollection__Lcom_google_gwt_user_client_ui_HasWidgets_2V(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(78, 253, $intern_50);
_.iterator__Ljava_util_Iterator_2 = function com_google_gwt_user_client_ui_ComplexPanel_iterator__Ljava_util_Iterator_2(){
  return new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this.com_google_gwt_user_client_ui_ComplexPanel_children);
}
;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_ComplexPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  return com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ComplexPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'ComplexPanel', 78);
function com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, w, (com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element));
}

function com_google_gwt_user_client_ui_AbsolutePanel_$remove__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, w){
  var removed;
  removed = com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, w);
  removed && com_google_gwt_user_client_ui_AbsolutePanel_changeToStaticPositioning__Lcom_google_gwt_dom_client_Element_2V((com_google_gwt_user_client_DOM_$clinit__V() , w.com_google_gwt_user_client_ui_UIObject_element));
  return removed;
}

function com_google_gwt_user_client_ui_AbsolutePanel_changeToStaticPositioning__Lcom_google_gwt_dom_client_Element_2V(elem){
  elem.style[$intern_51] = '';
  elem.style['top'] = '';
  elem.style[$intern_52] = '';
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(134, 78, $intern_50);
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_AbsolutePanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  return com_google_gwt_user_client_ui_AbsolutePanel_$remove__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1AbsolutePanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'AbsolutePanel', 134);
function com_google_gwt_user_client_ui_AttachDetachException_$clinit__V(){
  com_google_gwt_user_client_ui_AttachDetachException_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_user_client_ui_AttachDetachException_attachCommand = new com_google_gwt_user_client_ui_AttachDetachException$1_AttachDetachException$1__V;
  com_google_gwt_user_client_ui_AttachDetachException_detachCommand = new com_google_gwt_user_client_ui_AttachDetachException$2_AttachDetachException$2__V;
}

function com_google_gwt_user_client_ui_AttachDetachException_AttachDetachException__Ljava_util_Set_2V(causes){
  com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V.call(this, causes);
}

function com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(hasWidgets, c){
  com_google_gwt_user_client_ui_AttachDetachException_$clinit__V();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator__Ljava_util_Iterator_2(); w$iterator.hasNext__Z();) {
    w = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(w$iterator.next__Ljava_lang_Object_2(), 8);
    try {
      c.execute__Lcom_google_gwt_user_client_ui_Widget_2V(w);
    }
     catch ($e0) {
      $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 4)) {
        e = $e0;
        !caught && (caught = new java_util_HashSet_HashSet__V);
        java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(caught.java_util_HashSet_map, e, caught);
      }
       else 
        throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    }
  }
  if (caught) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_gwt_user_client_ui_AttachDetachException_AttachDetachException__Ljava_util_Set_2V(caught));
  }
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(117, 79, $intern_29, com_google_gwt_user_client_ui_AttachDetachException_AttachDetachException__Ljava_util_Set_2V);
var com_google_gwt_user_client_ui_AttachDetachException_attachCommand, com_google_gwt_user_client_ui_AttachDetachException_detachCommand;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1AttachDetachException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'AttachDetachException', 117);
function com_google_gwt_user_client_ui_AttachDetachException$1_AttachDetachException$1__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(118, 1, {}, com_google_gwt_user_client_ui_AttachDetachException$1_AttachDetachException$1__V);
_.execute__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_AttachDetachException$1_execute__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  w.onAttach__V();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1AttachDetachException$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'AttachDetachException/1', 118);
function com_google_gwt_user_client_ui_AttachDetachException$2_AttachDetachException$2__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(119, 1, {}, com_google_gwt_user_client_ui_AttachDetachException$2_AttachDetachException$2__V);
_.execute__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_AttachDetachException$2_execute__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(w);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1AttachDetachException$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'AttachDetachException/2', 119);
function com_google_gwt_user_client_ui_FocusWidget_$setEnabled__Lcom_google_gwt_user_client_ui_FocusWidget_2ZV(this$static, enabled){
  (com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element)['disabled'] = !enabled;
}

function com_google_gwt_user_client_ui_FocusWidget_$setFocus__Lcom_google_gwt_user_client_ui_FocusWidget_2ZV(this$static){
  com_google_gwt_user_client_ui_impl_FocusImplIE6_$focus__Lcom_google_gwt_user_client_ui_impl_FocusImplIE6_2Lcom_google_gwt_dom_client_Element_2V((com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element));
}

function com_google_gwt_user_client_ui_FocusWidget_FocusWidget__Lcom_google_gwt_dom_client_Element_2V(elem){
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this, (com_google_gwt_user_client_DOM_$clinit__V() , elem));
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(77, 8, $intern_50);
_.onAttach__V = function com_google_gwt_user_client_ui_FocusWidget_onAttach__V(){
  var tabIndex;
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
  tabIndex = com_google_gwt_dom_client_DOMImplIE9_$getTabIndex__Lcom_google_gwt_dom_client_DOMImplIE9_2Lcom_google_gwt_dom_client_Element_2I((com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element));
  -1 == tabIndex && (this.com_google_gwt_user_client_ui_UIObject_element.tabIndex = 0 , undefined);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1FocusWidget_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'FocusWidget', 77);
function com_google_gwt_user_client_ui_ButtonBase_ButtonBase__Lcom_google_gwt_dom_client_Element_2V(elem){
  com_google_gwt_user_client_ui_FocusWidget_FocusWidget__Lcom_google_gwt_dom_client_Element_2V.call(this, elem);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(109, 77, $intern_50);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ButtonBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'ButtonBase', 109);
function com_google_gwt_user_client_ui_Button_Button__Ljava_lang_String_2V(html){
  var com_google_gwt_user_client_ui_Button_Button__V_com_google_gwt_dom_client_DOMImplStandardBase_$createButtonElement__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ButtonElement_2_e_0_0;
  com_google_gwt_user_client_ui_ButtonBase_ButtonBase__Lcom_google_gwt_dom_client_Element_2V.call(this, (com_google_gwt_user_client_ui_Button_Button__V_com_google_gwt_dom_client_DOMImplStandardBase_$createButtonElement__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ButtonElement_2_e_0_0 = $doc.createElement('BUTTON') , com_google_gwt_user_client_ui_Button_Button__V_com_google_gwt_dom_client_DOMImplStandardBase_$createButtonElement__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ButtonElement_2_e_0_0.setAttribute('type', 'button') , com_google_gwt_user_client_ui_Button_Button__V_com_google_gwt_dom_client_DOMImplStandardBase_$createButtonElement__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ButtonElement_2_e_0_0));
  (com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element).className = 'gwt-Button';
  com_google_gwt_dom_client_Element_$setInnerHTML__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this.com_google_gwt_user_client_ui_UIObject_element, html);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(61, 109, $intern_50, com_google_gwt_user_client_ui_Button_Button__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Button_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'Button', 61);
function com_google_gwt_user_client_ui_CellPanel_$setCellHorizontalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2V(td, align_0){
  (com_google_gwt_user_client_DOM_$clinit__V() , td)['align'] = align_0.com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_textAlignString;
}

function com_google_gwt_user_client_ui_CellPanel_$setCellVerticalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2V(td, align_0){
  com_google_gwt_user_client_ui_CellPanel_$setCellVerticalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2V((com_google_gwt_user_client_DOM_$clinit__V() , td), align_0);
}

function com_google_gwt_user_client_ui_CellPanel_$setCellVerticalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2V(td, align_0){
  td.style['verticalAlign'] = align_0.com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_verticalAlignString;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(116, 78, $intern_50);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1CellPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'CellPanel', 116);
function com_google_gwt_user_client_ui_SimplePanel_$remove__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, w){
  if (this$static.com_google_gwt_user_client_ui_SimplePanel_widget != w) {
    return false;
  }
  try {
    com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(w, null);
  }
   finally {
    com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static.getContainerElement__Lcom_google_gwt_user_client_Element_2(), (com_google_gwt_user_client_DOM_$clinit__V() , w.com_google_gwt_user_client_ui_UIObject_element));
    this$static.com_google_gwt_user_client_ui_SimplePanel_widget = null;
  }
  return true;
}

function com_google_gwt_user_client_ui_SimplePanel_$setWidget__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  if (w == this$static.com_google_gwt_user_client_ui_SimplePanel_widget) {
    return;
  }
  !!w && com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(w);
  !!this$static.com_google_gwt_user_client_ui_SimplePanel_widget && this$static.remove__Lcom_google_gwt_user_client_ui_Widget_2Z(this$static.com_google_gwt_user_client_ui_SimplePanel_widget);
  this$static.com_google_gwt_user_client_ui_SimplePanel_widget = w;
  if (w) {
    com_google_gwt_user_client_DOM_$clinit__V();
    com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static.getContainerElement__Lcom_google_gwt_user_client_Element_2(), com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(com_google_gwt_user_client_ui_UIObject_$getElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2(this$static.com_google_gwt_user_client_ui_SimplePanel_widget)));
    com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(w, this$static);
  }
}

function com_google_gwt_user_client_ui_SimplePanel_SimplePanel__Lcom_google_gwt_dom_client_Element_2V(elem){
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this, (com_google_gwt_user_client_DOM_$clinit__V() , elem));
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(65, 253, $intern_50);
_.getContainerElement__Lcom_google_gwt_user_client_Element_2 = function com_google_gwt_user_client_ui_SimplePanel_getContainerElement__Lcom_google_gwt_user_client_Element_2(){
  return com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element;
}
;
_.iterator__Ljava_util_Iterator_2 = function com_google_gwt_user_client_ui_SimplePanel_iterator__Ljava_util_Iterator_2(){
  return new com_google_gwt_user_client_ui_SimplePanel$1_SimplePanel$1__Lcom_google_gwt_user_client_ui_SimplePanel_2V(this);
}
;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_SimplePanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  return com_google_gwt_user_client_ui_SimplePanel_$remove__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1SimplePanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'SimplePanel', 65);
function com_google_gwt_user_client_ui_PopupPanel_$center__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this$static){
  var elem, initiallyAnimated, initiallyShowing, left, top_0;
  initiallyShowing = this$static.com_google_gwt_user_client_ui_PopupPanel_showing;
  initiallyAnimated = this$static.com_google_gwt_user_client_ui_PopupPanel_isAnimationEnabled;
  if (!initiallyShowing) {
    (com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element).style[$intern_53] = 'hidden';
    this$static.com_google_gwt_user_client_ui_PopupPanel_isAnimationEnabled = false;
    !this$static.com_google_gwt_user_client_ui_DialogBox_resizeHandlerRegistration && (this$static.com_google_gwt_user_client_ui_DialogBox_resizeHandlerRegistration = com_google_gwt_user_client_Window_addResizeHandler__Lcom_google_gwt_event_logical_shared_ResizeHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(new com_google_gwt_user_client_ui_DialogBox$1_DialogBox$1__Lcom_google_gwt_user_client_ui_DialogBox_2V(this$static)));
    com_google_gwt_user_client_ui_PopupPanel_$show__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this$static);
  }
  elem = (com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element);
  elem.style[$intern_51] = (com_google_gwt_dom_client_Style$Unit_$clinit__V() , $intern_54);
  elem.style['top'] = $intern_54;
  left = com_google_gwt_dom_client_Document_$getClientWidth__Lcom_google_gwt_dom_client_Document_2I($doc) - com_google_gwt_dom_client_Element_$getPropertyInt__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2I(this$static.com_google_gwt_user_client_ui_UIObject_element, $intern_55) >> 1;
  top_0 = com_google_gwt_dom_client_Document_$getClientHeight__Lcom_google_gwt_dom_client_Document_2I($doc) - com_google_gwt_dom_client_Element_$getPropertyInt__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2I(this$static.com_google_gwt_user_client_ui_UIObject_element, $intern_56) >> 1;
  com_google_gwt_user_client_ui_PopupPanel_$setPopupPosition__Lcom_google_gwt_user_client_ui_PopupPanel_2IIV(this$static, $wnd.Math.max(($wnd.pageXOffset | 0) + left, 0), $wnd.Math.max(($wnd.pageYOffset | 0) + top_0, 0));
  if (!initiallyShowing) {
    this$static.com_google_gwt_user_client_ui_PopupPanel_isAnimationEnabled = initiallyAnimated;
    if (initiallyAnimated) {
      this$static.com_google_gwt_user_client_ui_UIObject_element.style[$intern_57] = $intern_58;
      this$static.com_google_gwt_user_client_ui_UIObject_element.style[$intern_53] = $intern_59;
      com_google_gwt_animation_client_Animation_$run__Lcom_google_gwt_animation_client_Animation_2IDLcom_google_gwt_dom_client_Element_2V(this$static.com_google_gwt_user_client_ui_PopupPanel_resizeAnimation, com_google_gwt_core_client_JsDate_now__D());
    }
     else {
      this$static.com_google_gwt_user_client_ui_UIObject_element.style[$intern_53] = $intern_59;
    }
  }
}

function com_google_gwt_user_client_ui_PopupPanel_$eventTargetsPopup__Lcom_google_gwt_user_client_ui_PopupPanel_2Lcom_google_gwt_dom_client_NativeEvent_2Z(this$static, event_0){
  var target;
  target = event_0.target;
  if (com_google_gwt_dom_client_Element_is__Lcom_google_gwt_core_client_JavaScriptObject_2Z(target)) {
    return com_google_gwt_dom_client_DOMImplTrident_isOrHasChildImpl__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Z((com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element), target);
  }
  return false;
}

function com_google_gwt_user_client_ui_PopupPanel_$getOffsetHeight__Lcom_google_gwt_user_client_ui_PopupPanel_2I(this$static){
  return com_google_gwt_dom_client_Element_$getPropertyInt__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2I((com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element), $intern_56);
}

function com_google_gwt_user_client_ui_PopupPanel_$getOffsetWidth__Lcom_google_gwt_user_client_ui_PopupPanel_2I(this$static){
  return com_google_gwt_dom_client_Element_$getPropertyInt__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2I((com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element), $intern_55);
}

function com_google_gwt_user_client_ui_PopupPanel_$hide__Lcom_google_gwt_user_client_ui_PopupPanel_2ZV(this$static){
  if (!this$static.com_google_gwt_user_client_ui_PopupPanel_showing) {
    return;
  }
  com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$setState__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2ZZV(this$static.com_google_gwt_user_client_ui_PopupPanel_resizeAnimation, false, false);
  com_google_gwt_event_logical_shared_CloseEvent_fire__Lcom_google_gwt_event_logical_shared_HasCloseHandlers_2Ljava_lang_Object_2ZV(this$static);
}

function com_google_gwt_user_client_ui_PopupPanel_$maybeUpdateSize__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this$static){
  var w;
  w = this$static.com_google_gwt_user_client_ui_SimplePanel_widget;
  if (w) {
    this$static.com_google_gwt_user_client_ui_PopupPanel_desiredHeight != null && w.setHeight__Ljava_lang_String_2V(this$static.com_google_gwt_user_client_ui_PopupPanel_desiredHeight);
    this$static.com_google_gwt_user_client_ui_PopupPanel_desiredWidth != null && w.setWidth__Ljava_lang_String_2V(this$static.com_google_gwt_user_client_ui_PopupPanel_desiredWidth);
  }
}

function com_google_gwt_user_client_ui_PopupPanel_$previewNativeEvent__Lcom_google_gwt_user_client_ui_PopupPanel_2Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V(this$static, event_0){
  var eventTargetsPopupOrPartner, nativeEvent, target, type_0;
  if (event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled || !this$static.com_google_gwt_user_client_ui_PopupPanel_previewAllNativeEvents && event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed) {
    this$static.com_google_gwt_user_client_ui_PopupPanel_modal && (event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = true);
    return;
  }
  this$static.onPreviewNativeEvent__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V(event_0);
  if (event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled) {
    return;
  }
  nativeEvent = event_0.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent;
  eventTargetsPopupOrPartner = com_google_gwt_user_client_ui_PopupPanel_$eventTargetsPopup__Lcom_google_gwt_user_client_ui_PopupPanel_2Lcom_google_gwt_dom_client_NativeEvent_2Z(this$static, nativeEvent);
  eventTargetsPopupOrPartner && (event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed = true);
  this$static.com_google_gwt_user_client_ui_PopupPanel_modal && (event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = true);
  type_0 = (com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(nativeEvent.type));
  switch (type_0) {
    case 512:
    case 256:
    case 128:
      {
        return;
      }

    case 4:
    case $intern_42:
      {
        if (com_google_gwt_user_client_DOM_sCaptureElem) {
          event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed = true;
          return;
        }
      }

      if (!eventTargetsPopupOrPartner && this$static.com_google_gwt_user_client_ui_PopupPanel_autoHide) {
        this$static.hide__ZV(true);
        return;
      }

      break;
    case 8:
    case 64:
    case 1:
    case 2:
    case $intern_38:
      {
        if (com_google_gwt_user_client_DOM_sCaptureElem) {
          event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed = true;
          return;
        }
        break;
      }

    case 2048:
      {
        target = nativeEvent.target;
        if (this$static.com_google_gwt_user_client_ui_PopupPanel_modal && !eventTargetsPopupOrPartner && !!target) {
          target.blur && target != $doc.body && target.blur();
          event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = true;
          return;
        }
        break;
      }

  }
}

function com_google_gwt_user_client_ui_PopupPanel_$setPopupPosition__Lcom_google_gwt_user_client_ui_PopupPanel_2IIV(this$static, left, top_0){
  var elem;
  this$static.com_google_gwt_user_client_ui_PopupPanel_leftPosition = left;
  this$static.com_google_gwt_user_client_ui_PopupPanel_topPosition = top_0;
  left -= 0;
  top_0 -= 0;
  elem = (com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element);
  elem.style[$intern_51] = left + (com_google_gwt_dom_client_Style$Unit_$clinit__V() , 'px');
  elem.style['top'] = top_0 + 'px';
}

function com_google_gwt_user_client_ui_PopupPanel_$setWidget__Lcom_google_gwt_user_client_ui_PopupPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  com_google_gwt_user_client_ui_SimplePanel_$setWidget__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w);
  com_google_gwt_user_client_ui_PopupPanel_$maybeUpdateSize__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this$static);
}

function com_google_gwt_user_client_ui_PopupPanel_$show__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this$static){
  if (this$static.com_google_gwt_user_client_ui_PopupPanel_showing) {
    return;
  }
   else 
    this$static.com_google_gwt_user_client_ui_Widget_attached && com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(this$static);
  com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$setState__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2ZZV(this$static.com_google_gwt_user_client_ui_PopupPanel_resizeAnimation, true, false);
}

function com_google_gwt_user_client_ui_PopupPanel_$updateHandlers__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this$static){
  if (this$static.com_google_gwt_user_client_ui_PopupPanel_nativePreviewHandlerRegistration) {
    com_google_web_bindery_event_shared_SimpleEventBus$1_$removeHandler__Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2V(this$static.com_google_gwt_user_client_ui_PopupPanel_nativePreviewHandlerRegistration.com_google_gwt_event_shared_LegacyHandlerWrapper_real);
    this$static.com_google_gwt_user_client_ui_PopupPanel_nativePreviewHandlerRegistration = null;
  }
  if (this$static.com_google_gwt_user_client_ui_PopupPanel_historyHandlerRegistration) {
    com_google_web_bindery_event_shared_SimpleEventBus$1_$removeHandler__Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2V(this$static.com_google_gwt_user_client_ui_PopupPanel_historyHandlerRegistration.com_google_gwt_event_shared_LegacyHandlerWrapper_real);
    this$static.com_google_gwt_user_client_ui_PopupPanel_historyHandlerRegistration = null;
  }
  if (this$static.com_google_gwt_user_client_ui_PopupPanel_showing) {
    this$static.com_google_gwt_user_client_ui_PopupPanel_nativePreviewHandlerRegistration = com_google_gwt_user_client_Event_addNativePreviewHandler__Lcom_google_gwt_user_client_Event$NativePreviewHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(new com_google_gwt_user_client_ui_PopupPanel$3_PopupPanel$3__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this$static));
    this$static.com_google_gwt_user_client_ui_PopupPanel_historyHandlerRegistration = com_google_gwt_user_client_History_addValueChangeHandler__Lcom_google_gwt_event_logical_shared_ValueChangeHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(new com_google_gwt_user_client_ui_PopupPanel$4_PopupPanel$4__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this$static));
  }
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(66, 65, $intern_50);
_.getContainerElement__Lcom_google_gwt_user_client_Element_2 = function com_google_gwt_user_client_ui_PopupPanel_getContainerElement__Lcom_google_gwt_user_client_Element_2(){
  return com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_client_ui_UIObject_element);
}
;
_.getStyleElement__Lcom_google_gwt_user_client_Element_2 = function com_google_gwt_user_client_ui_PopupPanel_getStyleElement__Lcom_google_gwt_user_client_Element_2(){
  return com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2((com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_client_ui_UIObject_element)));
}
;
_.hide__ZV = function com_google_gwt_user_client_ui_PopupPanel_hide__ZV(autoClosed){
  com_google_gwt_user_client_ui_PopupPanel_$hide__Lcom_google_gwt_user_client_ui_PopupPanel_2ZV(this);
}
;
_.onPreviewNativeEvent__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V = function com_google_gwt_user_client_ui_PopupPanel_onPreviewNativeEvent__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V(event_0){
  event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isFirstHandler && false && (event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = true);
}
;
_.onUnload__V = function com_google_gwt_user_client_ui_PopupPanel_onUnload__V(){
  this.com_google_gwt_user_client_ui_PopupPanel_showing && com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$setState__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2ZZV(this.com_google_gwt_user_client_ui_PopupPanel_resizeAnimation, false, true);
}
;
_.setHeight__Ljava_lang_String_2V = function com_google_gwt_user_client_ui_PopupPanel_setHeight__Ljava_lang_String_2V(height){
  this.com_google_gwt_user_client_ui_PopupPanel_desiredHeight = height;
  com_google_gwt_user_client_ui_PopupPanel_$maybeUpdateSize__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this);
  height.length == 0 && (this.com_google_gwt_user_client_ui_PopupPanel_desiredHeight = null);
}
;
_.setWidth__Ljava_lang_String_2V = function com_google_gwt_user_client_ui_PopupPanel_setWidth__Ljava_lang_String_2V(width_0){
  this.com_google_gwt_user_client_ui_PopupPanel_desiredWidth = width_0;
  com_google_gwt_user_client_ui_PopupPanel_$maybeUpdateSize__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this);
  width_0.length == 0 && (this.com_google_gwt_user_client_ui_PopupPanel_desiredWidth = null);
}
;
_.com_google_gwt_user_client_ui_PopupPanel_autoHide = false;
_.com_google_gwt_user_client_ui_PopupPanel_autoHideOnHistoryEvents = false;
_.com_google_gwt_user_client_ui_PopupPanel_isAnimationEnabled = false;
_.com_google_gwt_user_client_ui_PopupPanel_isGlassEnabled = false;
_.com_google_gwt_user_client_ui_PopupPanel_leftPosition = 0;
_.com_google_gwt_user_client_ui_PopupPanel_modal = false;
_.com_google_gwt_user_client_ui_PopupPanel_previewAllNativeEvents = false;
_.com_google_gwt_user_client_ui_PopupPanel_showing = false;
_.com_google_gwt_user_client_ui_PopupPanel_topPosition = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1PopupPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'PopupPanel', 66);
function com_google_gwt_user_client_ui_DecoratedPopupPanel_$setWidget__Lcom_google_gwt_user_client_ui_DecoratedPopupPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  com_google_gwt_user_client_ui_SimplePanel_$setWidget__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_google_gwt_user_client_ui_DecoratedPopupPanel_decPanel, w);
  com_google_gwt_user_client_ui_PopupPanel_$maybeUpdateSize__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this$static);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(120, 66, $intern_50);
_.doAttachChildren__V = function com_google_gwt_user_client_ui_DecoratedPopupPanel_doAttachChildren__V(){
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this.com_google_gwt_user_client_ui_DecoratedPopupPanel_decPanel);
}
;
_.doDetachChildren__V = function com_google_gwt_user_client_ui_DecoratedPopupPanel_doDetachChildren__V(){
  com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this.com_google_gwt_user_client_ui_DecoratedPopupPanel_decPanel);
}
;
_.iterator__Ljava_util_Iterator_2 = function com_google_gwt_user_client_ui_DecoratedPopupPanel_iterator__Ljava_util_Iterator_2(){
  return new com_google_gwt_user_client_ui_SimplePanel$1_SimplePanel$1__Lcom_google_gwt_user_client_ui_SimplePanel_2V(this.com_google_gwt_user_client_ui_DecoratedPopupPanel_decPanel);
}
;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_DecoratedPopupPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  return com_google_gwt_user_client_ui_SimplePanel_$remove__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this.com_google_gwt_user_client_ui_DecoratedPopupPanel_decPanel, w);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1DecoratedPopupPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'DecoratedPopupPanel', 120);
function com_google_gwt_user_client_ui_DecoratorPanel_$getCellElement__Lcom_google_gwt_user_client_ui_DecoratorPanel_2IILcom_google_gwt_user_client_Element_2(this$static){
  var td, tr;
  tr = (com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_user_client_impl_DOMImplStandard_$getChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2ILcom_google_gwt_dom_client_Element_2(this$static.com_google_gwt_user_client_ui_DecoratorPanel_tbody, 0));
  td = (null , com_google_gwt_user_client_impl_DOMImplStandard_$getChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2ILcom_google_gwt_dom_client_Element_2(tr, 1));
  return null , com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(td);
}

function com_google_gwt_user_client_ui_DecoratorPanel_$getContainerElement__Lcom_google_gwt_user_client_ui_DecoratorPanel_2Lcom_google_gwt_user_client_Element_2(this$static){
  return com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_DecoratorPanel_containerElem;
}

function com_google_gwt_user_client_ui_DecoratorPanel_DecoratorPanel___3Ljava_lang_String_2IV(rowStyles){
  var i, row, table, com_google_gwt_user_client_ui_DecoratorPanel_createTR__Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2_trElem_0;
  com_google_gwt_user_client_ui_SimplePanel_SimplePanel__Lcom_google_gwt_dom_client_Element_2V.call(this, (com_google_gwt_user_client_DOM_$clinit__V() , $doc.createElement('table')));
  table = this.com_google_gwt_user_client_ui_UIObject_element;
  this.com_google_gwt_user_client_ui_DecoratorPanel_tbody = $doc.createElement('tbody');
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(table, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_client_ui_DecoratorPanel_tbody));
  table[$intern_60] = 0;
  table[$intern_61] = 0;
  for (i = 0; i < rowStyles.length; i++) {
    row = (com_google_gwt_user_client_ui_DecoratorPanel_createTR__Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2_trElem_0 = $doc.createElement('tr') , com_google_gwt_user_client_ui_DecoratorPanel_createTR__Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2_trElem_0.className = rowStyles[i] || '' , undefined , com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(com_google_gwt_user_client_ui_DecoratorPanel_createTR__Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2_trElem_0, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(com_google_gwt_user_client_ui_DecoratorPanel_createTD__Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2(rowStyles[i] + 'Left'))) , com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(com_google_gwt_user_client_ui_DecoratorPanel_createTR__Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2_trElem_0, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(com_google_gwt_user_client_ui_DecoratorPanel_createTD__Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2(rowStyles[i] + 'Center'))) , com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(com_google_gwt_user_client_ui_DecoratorPanel_createTR__Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2_trElem_0, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(com_google_gwt_user_client_ui_DecoratorPanel_createTD__Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2(rowStyles[i] + 'Right'))) , com_google_gwt_user_client_ui_DecoratorPanel_createTR__Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2_trElem_0);
    com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_DecoratorPanel_tbody, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(row));
    i == 1 && (this.com_google_gwt_user_client_ui_DecoratorPanel_containerElem = com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(com_google_gwt_user_client_impl_DOMImplStandard_$getChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2ILcom_google_gwt_dom_client_Element_2(row, 1)));
  }
  this.com_google_gwt_user_client_ui_UIObject_element.className = 'gwt-DecoratorPanel';
}

function com_google_gwt_user_client_ui_DecoratorPanel_createTD__Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2(styleName){
  var inner, tdElem;
  tdElem = (com_google_gwt_user_client_DOM_$clinit__V() , $doc.createElement('td'));
  inner = $doc.createElement('div');
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(tdElem, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(inner));
  tdElem.className = styleName || '';
  inner.className = styleName + 'Inner' || '';
  return tdElem;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(184, 65, $intern_50, com_google_gwt_user_client_ui_DecoratorPanel_DecoratorPanel___3Ljava_lang_String_2IV);
_.getContainerElement__Lcom_google_gwt_user_client_Element_2 = function com_google_gwt_user_client_ui_DecoratorPanel_getContainerElement__Lcom_google_gwt_user_client_Element_2(){
  return com_google_gwt_user_client_ui_DecoratorPanel_$getContainerElement__Lcom_google_gwt_user_client_ui_DecoratorPanel_2Lcom_google_gwt_user_client_Element_2(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1DecoratorPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'DecoratorPanel', 184);
function com_google_gwt_user_client_ui_DialogBox_$beginDragging__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_event_dom_client_MouseDownEvent_2V(this$static, event_0){
  com_google_gwt_user_client_ui_DialogBox_$onMouseDown__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_user_client_ui_Widget_2IIV(this$static, com_google_gwt_event_dom_client_MouseEvent_$getX__Lcom_google_gwt_event_dom_client_MouseEvent_2I(event_0), com_google_gwt_event_dom_client_MouseEvent_$getY__Lcom_google_gwt_event_dom_client_MouseEvent_2I(event_0));
}

function com_google_gwt_user_client_ui_DialogBox_$continueDragging__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_event_dom_client_MouseMoveEvent_2V(this$static, event_0){
  com_google_gwt_user_client_ui_DialogBox_$onMouseMove__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_user_client_ui_Widget_2IIV(this$static, com_google_gwt_event_dom_client_MouseEvent_$getX__Lcom_google_gwt_event_dom_client_MouseEvent_2I(event_0), com_google_gwt_event_dom_client_MouseEvent_$getY__Lcom_google_gwt_event_dom_client_MouseEvent_2I(event_0));
}

function com_google_gwt_user_client_ui_DialogBox_$endDragging__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_event_dom_client_MouseUpEvent_2V(this$static, event_0){
  com_google_gwt_user_client_ui_DialogBox_$onMouseUp__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_user_client_ui_Widget_2IIV((com_google_gwt_event_dom_client_MouseEvent_$getX__Lcom_google_gwt_event_dom_client_MouseEvent_2I(event_0) , com_google_gwt_event_dom_client_MouseEvent_$getY__Lcom_google_gwt_event_dom_client_MouseEvent_2I(event_0) , this$static));
}

function com_google_gwt_user_client_ui_DialogBox_$hide__Lcom_google_gwt_user_client_ui_DialogBox_2ZV(this$static, autoClosed){
  if (this$static.com_google_gwt_user_client_ui_DialogBox_resizeHandlerRegistration) {
    com_google_web_bindery_event_shared_SimpleEventBus$1_$removeHandler__Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2V(this$static.com_google_gwt_user_client_ui_DialogBox_resizeHandlerRegistration.com_google_gwt_event_shared_LegacyHandlerWrapper_real);
    this$static.com_google_gwt_user_client_ui_DialogBox_resizeHandlerRegistration = null;
  }
  com_google_gwt_user_client_ui_PopupPanel_$hide__Lcom_google_gwt_user_client_ui_PopupPanel_2ZV(this$static);
}

function com_google_gwt_user_client_ui_DialogBox_$isCaptionEvent__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_dom_client_NativeEvent_2Z(this$static, event_0){
  var target;
  target = event_0.target;
  if (com_google_gwt_dom_client_Element_is__Lcom_google_gwt_core_client_JavaScriptObject_2Z(target)) {
    return com_google_gwt_dom_client_DOMImplTrident_isOrHasChildImpl__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Z(com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2((com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_user_client_ui_DecoratorPanel_$getCellElement__Lcom_google_gwt_user_client_ui_DecoratorPanel_2IILcom_google_gwt_user_client_Element_2(this$static.com_google_gwt_user_client_ui_DecoratedPopupPanel_decPanel))), target);
  }
  return false;
}

function com_google_gwt_user_client_ui_DialogBox_$onMouseDown__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_user_client_ui_Widget_2IIV(this$static, x_0, y_0){
  com_google_gwt_user_client_DOM_$clinit__V();
  if (!com_google_gwt_user_client_DOM_sCaptureElem) {
    this$static.com_google_gwt_user_client_ui_DialogBox_dragging = true;
    com_google_gwt_user_client_DOM_setCapture__Lcom_google_gwt_dom_client_Element_2V(this$static.com_google_gwt_user_client_ui_UIObject_element);
    this$static.com_google_gwt_user_client_ui_DialogBox_dragStartX = x_0;
    this$static.com_google_gwt_user_client_ui_DialogBox_dragStartY = y_0;
  }
}

function com_google_gwt_user_client_ui_DialogBox_$onMouseMove__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_user_client_ui_Widget_2IIV(this$static, x_0, y_0){
  var absX, absY;
  if (this$static.com_google_gwt_user_client_ui_DialogBox_dragging) {
    absX = x_0 + com_google_gwt_dom_client_DOMImplIE9_$getAbsoluteLeft__Lcom_google_gwt_dom_client_DOMImplIE9_2Lcom_google_gwt_dom_client_Element_2I((com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element));
    absY = y_0 + (com_google_gwt_dom_client_DOMImplIE9_$getBoundingClientRectTop__Lcom_google_gwt_dom_client_DOMImplIE9_2Lcom_google_gwt_dom_client_Element_2D(this$static.com_google_gwt_user_client_ui_UIObject_element) + $wnd.pageYOffset | 0);
    if (absX < this$static.com_google_gwt_user_client_ui_DialogBox_clientLeft || absX >= this$static.com_google_gwt_user_client_ui_DialogBox_windowWidth || absY < this$static.com_google_gwt_user_client_ui_DialogBox_clientTop) {
      return;
    }
    com_google_gwt_user_client_ui_PopupPanel_$setPopupPosition__Lcom_google_gwt_user_client_ui_PopupPanel_2IIV(this$static, absX - this$static.com_google_gwt_user_client_ui_DialogBox_dragStartX, absY - this$static.com_google_gwt_user_client_ui_DialogBox_dragStartY);
  }
}

function com_google_gwt_user_client_ui_DialogBox_$onMouseUp__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_user_client_ui_Widget_2IIV(this$static){
  this$static.com_google_gwt_user_client_ui_DialogBox_dragging = false;
  com_google_gwt_user_client_DOM_releaseCapture__Lcom_google_gwt_dom_client_Element_2V((com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element));
}

function com_google_gwt_user_client_ui_DialogBox_$setText__Lcom_google_gwt_user_client_ui_DialogBox_2Ljava_lang_String_2V(this$static, text_0){
  com_google_gwt_user_client_ui_Label_$setText__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2V(this$static.com_google_gwt_user_client_ui_DialogBox_caption, text_0);
}

function com_google_gwt_user_client_ui_DialogBox_DialogBox__V(){
  com_google_gwt_user_client_ui_DialogBox_DialogBox__ZZLcom_google_gwt_user_client_ui_DialogBox$Caption_2V.call(this, new com_google_gwt_user_client_ui_DialogBox$CaptionImpl_DialogBox$CaptionImpl__V);
}

function com_google_gwt_user_client_ui_DialogBox_DialogBox__ZZLcom_google_gwt_user_client_ui_DialogBox$Caption_2V(captionWidget){
  var mouseHandler, td, com_google_gwt_user_client_ui_DecoratedPopupPanel_DecoratedPopupPanel__ZZLjava_lang_String_2V_rowStyles_0;
  com_google_gwt_user_client_ui_SimplePanel_SimplePanel__Lcom_google_gwt_dom_client_Element_2V.call(this, (com_google_gwt_user_client_DOM_$clinit__V() , $doc.createElement('div')));
  this.com_google_gwt_user_client_ui_PopupPanel_glassResizer = new com_google_gwt_user_client_ui_PopupPanel$1_PopupPanel$1__Lcom_google_gwt_user_client_ui_PopupPanel_2V;
  this.com_google_gwt_user_client_ui_PopupPanel_isAnimationEnabled = false;
  this.com_google_gwt_user_client_ui_PopupPanel_leftPosition = -1;
  this.com_google_gwt_user_client_ui_PopupPanel_resizeAnimation = new com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_PopupPanel$ResizeAnimation__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this);
  this.com_google_gwt_user_client_ui_PopupPanel_topPosition = -1;
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_UIObject_element, $doc.createElement('div'));
  com_google_gwt_user_client_ui_PopupPanel_$setPopupPosition__Lcom_google_gwt_user_client_ui_PopupPanel_2IIV(this, 0, 0);
  com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_client_ui_UIObject_element)).className = 'gwt-PopupPanel';
  (null , com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_client_ui_UIObject_element)).className = $intern_62;
  this.com_google_gwt_user_client_ui_PopupPanel_autoHide = false;
  this.com_google_gwt_user_client_ui_PopupPanel_autoHideOnHistoryEvents = false;
  this.com_google_gwt_user_client_ui_PopupPanel_modal = true;
  com_google_gwt_user_client_ui_DecoratedPopupPanel_DecoratedPopupPanel__ZZLjava_lang_String_2V_rowStyles_0 = com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_9, 2, 6, ['dialogTop', 'dialogMiddle', 'dialogBottom']);
  this.com_google_gwt_user_client_ui_DecoratedPopupPanel_decPanel = new com_google_gwt_user_client_ui_DecoratorPanel_DecoratorPanel___3Ljava_lang_String_2IV(com_google_gwt_user_client_ui_DecoratedPopupPanel_DecoratedPopupPanel__ZZLjava_lang_String_2V_rowStyles_0);
  com_google_gwt_user_client_ui_UIObject_$setStyleName__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2V(this.com_google_gwt_user_client_ui_DecoratedPopupPanel_decPanel);
  com_google_gwt_user_client_ui_UIObject_setStylePrimaryName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_client_ui_UIObject_element)), 'gwt-DecoratedPopupPanel');
  com_google_gwt_user_client_ui_PopupPanel_$setWidget__Lcom_google_gwt_user_client_ui_PopupPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this, this.com_google_gwt_user_client_ui_DecoratedPopupPanel_decPanel);
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2ZV(com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_client_ui_UIObject_element), $intern_62, false);
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2ZV(com_google_gwt_user_client_ui_DecoratorPanel_$getContainerElement__Lcom_google_gwt_user_client_ui_DecoratorPanel_2Lcom_google_gwt_user_client_Element_2(this.com_google_gwt_user_client_ui_DecoratedPopupPanel_decPanel), 'dialogContent', true);
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(captionWidget);
  this.com_google_gwt_user_client_ui_DialogBox_caption = captionWidget;
  td = com_google_gwt_user_client_ui_DecoratorPanel_$getCellElement__Lcom_google_gwt_user_client_ui_DecoratorPanel_2IILcom_google_gwt_user_client_Element_2(this.com_google_gwt_user_client_ui_DecoratedPopupPanel_decPanel);
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(td, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(com_google_gwt_user_client_ui_UIObject_$getElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2(this.com_google_gwt_user_client_ui_DialogBox_caption)));
  com_google_gwt_user_client_ui_Panel_$adopt__Lcom_google_gwt_user_client_ui_Panel_2Lcom_google_gwt_user_client_ui_Widget_2V(this, this.com_google_gwt_user_client_ui_DialogBox_caption);
  com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_client_ui_UIObject_element)).className = 'gwt-DialogBox';
  this.com_google_gwt_user_client_ui_DialogBox_windowWidth = com_google_gwt_dom_client_Document_$getClientWidth__Lcom_google_gwt_dom_client_Document_2I($doc);
  this.com_google_gwt_user_client_ui_DialogBox_clientLeft = 0;
  this.com_google_gwt_user_client_ui_DialogBox_clientTop = 0;
  mouseHandler = new com_google_gwt_user_client_ui_DialogBox$MouseHandler_DialogBox$MouseHandler__Lcom_google_gwt_user_client_ui_DialogBox_2V(this);
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this, mouseHandler, (com_google_gwt_event_dom_client_MouseDownEvent_$clinit__V() , com_google_gwt_event_dom_client_MouseDownEvent_$clinit__V() , com_google_gwt_event_dom_client_MouseDownEvent_TYPE));
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this, mouseHandler, (com_google_gwt_event_dom_client_MouseUpEvent_$clinit__V() , com_google_gwt_event_dom_client_MouseUpEvent_$clinit__V() , com_google_gwt_event_dom_client_MouseUpEvent_TYPE));
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this, mouseHandler, (com_google_gwt_event_dom_client_MouseMoveEvent_$clinit__V() , com_google_gwt_event_dom_client_MouseMoveEvent_$clinit__V() , com_google_gwt_event_dom_client_MouseMoveEvent_TYPE));
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this, mouseHandler, (com_google_gwt_event_dom_client_MouseOverEvent_$clinit__V() , com_google_gwt_event_dom_client_MouseOverEvent_$clinit__V() , com_google_gwt_event_dom_client_MouseOverEvent_TYPE));
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this, mouseHandler, (com_google_gwt_event_dom_client_MouseOutEvent_$clinit__V() , com_google_gwt_event_dom_client_MouseOutEvent_$clinit__V() , com_google_gwt_event_dom_client_MouseOutEvent_TYPE));
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(51, 120, $intern_50, com_google_gwt_user_client_ui_DialogBox_DialogBox__V);
_.doAttachChildren__V = function com_google_gwt_user_client_ui_DialogBox_doAttachChildren__V(){
  try {
    com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this.com_google_gwt_user_client_ui_DecoratedPopupPanel_decPanel);
  }
   finally {
    com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this.com_google_gwt_user_client_ui_DialogBox_caption);
  }
}
;
_.doDetachChildren__V = function com_google_gwt_user_client_ui_DialogBox_doDetachChildren__V(){
  try {
    com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this.com_google_gwt_user_client_ui_DecoratedPopupPanel_decPanel);
  }
   finally {
    com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this.com_google_gwt_user_client_ui_DialogBox_caption);
  }
}
;
_.hide__ZV = function com_google_gwt_user_client_ui_DialogBox_hide__ZV(autoClosed){
  com_google_gwt_user_client_ui_DialogBox_$hide__Lcom_google_gwt_user_client_ui_DialogBox_2ZV(this, autoClosed);
}
;
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V = function com_google_gwt_user_client_ui_DialogBox_onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(event_0){
  switch (com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(event_0.type)) {
    case 4:
    case 8:
    case 64:
    case 16:
    case 32:
      if (!this.com_google_gwt_user_client_ui_DialogBox_dragging && !com_google_gwt_user_client_ui_DialogBox_$isCaptionEvent__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_dom_client_NativeEvent_2Z(this, event_0)) {
        return;
      }

  }
  com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event_0);
}
;
_.onPreviewNativeEvent__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V = function com_google_gwt_user_client_ui_DialogBox_onPreviewNativeEvent__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V(event_0){
  var nativeEvent;
  nativeEvent = event_0.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent;
  !event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled && com_google_gwt_user_client_Event_$getTypeInt__Lcom_google_gwt_user_client_Event_2I(event_0.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent) == 4 && com_google_gwt_user_client_ui_DialogBox_$isCaptionEvent__Lcom_google_gwt_user_client_ui_DialogBox_2Lcom_google_gwt_dom_client_NativeEvent_2Z(this, nativeEvent) && (nativeEvent.preventDefault() , undefined);
  event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isFirstHandler && false && (event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = true);
}
;
_.com_google_gwt_user_client_ui_DialogBox_clientLeft = 0;
_.com_google_gwt_user_client_ui_DialogBox_clientTop = 0;
_.com_google_gwt_user_client_ui_DialogBox_dragStartX = 0;
_.com_google_gwt_user_client_ui_DialogBox_dragStartY = 0;
_.com_google_gwt_user_client_ui_DialogBox_dragging = false;
_.com_google_gwt_user_client_ui_DialogBox_windowWidth = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1DialogBox_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'DialogBox', 51);
function com_google_gwt_user_client_ui_DialogBox$1_DialogBox$1__Lcom_google_gwt_user_client_ui_DialogBox_2V(this$0){
  this.com_google_gwt_user_client_ui_DialogBox$1_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(123, 1, $intern_63, com_google_gwt_user_client_ui_DialogBox$1_DialogBox$1__Lcom_google_gwt_user_client_ui_DialogBox_2V);
_.onResize__Lcom_google_gwt_event_logical_shared_ResizeEvent_2V = function com_google_gwt_user_client_ui_DialogBox$1_onResize__Lcom_google_gwt_event_logical_shared_ResizeEvent_2V(event_0){
  this.com_google_gwt_user_client_ui_DialogBox$1_this$01.com_google_gwt_user_client_ui_DialogBox_windowWidth = event_0.com_google_gwt_event_logical_shared_ResizeEvent_width;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1DialogBox$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'DialogBox/1', 123);
function com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V(){
  com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V((com_google_gwt_dom_client_Style$TextAlign_$clinit__V() , 'center'));
  new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V('justify');
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LEFT = new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V($intern_51);
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1RIGHT = new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V('right');
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LOCALE_1START = com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LEFT;
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT = com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LOCALE_1START;
}

var com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT, com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LEFT, com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LOCALE_1START, com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1RIGHT;
function com_google_gwt_user_client_ui_LabelBase_LabelBase__Lcom_google_gwt_dom_client_Element_2ZV(element){
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this, (com_google_gwt_user_client_DOM_$clinit__V() , element));
  this.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper = new com_google_gwt_user_client_ui_DirectionalTextHelper_DirectionalTextHelper__Lcom_google_gwt_dom_client_Element_2ZV(this.com_google_gwt_user_client_ui_UIObject_element);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(53, 8, $intern_50);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1LabelBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'LabelBase', 53);
function com_google_gwt_user_client_ui_Label_$setText__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2V(this$static, text_0){
  com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(this$static.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper, text_0, false);
}

function com_google_gwt_user_client_ui_Label_Label__V(){
  com_google_gwt_user_client_ui_LabelBase_LabelBase__Lcom_google_gwt_dom_client_Element_2ZV.call(this, $doc.createElement('div'));
  (com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element).className = 'gwt-Label';
}

function com_google_gwt_user_client_ui_Label_Label__Lcom_google_gwt_dom_client_Element_2V(element){
  com_google_gwt_user_client_ui_LabelBase_LabelBase__Lcom_google_gwt_dom_client_Element_2ZV.call(this, (java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z('span', element.tagName) , element));
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(38, 53, $intern_50, com_google_gwt_user_client_ui_Label_Label__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Label_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'Label', 38);
function com_google_gwt_user_client_ui_HTML_$setHTML__Lcom_google_gwt_user_client_ui_HTML_2Ljava_lang_String_2V(this$static, html){
  com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(this$static.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper, html, true);
}

function com_google_gwt_user_client_ui_HTML_HTML__V(){
  com_google_gwt_user_client_ui_Label_Label__Lcom_google_gwt_dom_client_Element_2V.call(this, $doc.createElement('div'));
  (com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element).className = 'gwt-HTML';
}

function com_google_gwt_user_client_ui_HTML_HTML__Ljava_lang_String_2V(html){
  com_google_gwt_user_client_ui_HTML_HTML__V.call(this);
  com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(this.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper, html, true);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(39, 38, $intern_50, com_google_gwt_user_client_ui_HTML_HTML__V, com_google_gwt_user_client_ui_HTML_HTML__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HTML_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'HTML', 39);
function com_google_gwt_user_client_ui_DialogBox$CaptionImpl_DialogBox$CaptionImpl__V(){
  com_google_gwt_user_client_ui_HTML_HTML__V.call(this);
  (com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element).className = 'Caption';
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(121, 39, $intern_50, com_google_gwt_user_client_ui_DialogBox$CaptionImpl_DialogBox$CaptionImpl__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1DialogBox$CaptionImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'DialogBox/CaptionImpl', 121);
function com_google_gwt_user_client_ui_DialogBox$MouseHandler_DialogBox$MouseHandler__Lcom_google_gwt_user_client_ui_DialogBox_2V(this$0){
  this.com_google_gwt_user_client_ui_DialogBox$MouseHandler_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(122, 1, {275:1, 279:1, 277:1, 278:1, 276:1, 27:1}, com_google_gwt_user_client_ui_DialogBox$MouseHandler_DialogBox$MouseHandler__Lcom_google_gwt_user_client_ui_DialogBox_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1DialogBox$MouseHandler_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'DialogBox/MouseHandler', 122);
function com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(this$static, content, isHtml){
  isHtml?com_google_gwt_dom_client_Element_$setInnerHTML__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_element, content):com_google_gwt_dom_client_DOMImplStandard_$setInnerText__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_element, content);
  if (this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_textDir != this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir) {
    this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_textDir = this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir;
    com_google_gwt_i18n_client_BidiUtils_setDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2V(this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_element, this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir);
  }
}

function com_google_gwt_user_client_ui_DirectionalTextHelper_DirectionalTextHelper__Lcom_google_gwt_dom_client_Element_2ZV(element){
  this.com_google_gwt_user_client_ui_DirectionalTextHelper_element = element;
  this.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir = com_google_gwt_i18n_client_BidiUtils_getDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2(element);
  this.com_google_gwt_user_client_ui_DirectionalTextHelper_textDir = this.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(141, 1, {}, com_google_gwt_user_client_ui_DirectionalTextHelper_DirectionalTextHelper__Lcom_google_gwt_dom_client_Element_2ZV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1DirectionalTextHelper_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'DirectionalTextHelper', 141);
function com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__V(){
  com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  new com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V('bottom');
  new com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V('middle');
  com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP = new com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V('top');
}

var com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP;
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(252, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HasHorizontalAlignment$AutoHorizontalAlignmentConstant_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'HasHorizontalAlignment/AutoHorizontalAlignmentConstant', 252);
function com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V(textAlignString){
  this.com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_textAlignString = textAlignString;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(54, 252, {}, com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HasHorizontalAlignment$HorizontalAlignmentConstant_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'HasHorizontalAlignment/HorizontalAlignmentConstant', 54);
function com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V(verticalAlignString){
  this.com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_verticalAlignString = verticalAlignString;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(64, 1, {}, com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HasVerticalAlignment$VerticalAlignmentConstant_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'HasVerticalAlignment/VerticalAlignmentConstant', 64);
function com_google_gwt_user_client_ui_PopupPanel$1_$onResize__Lcom_google_gwt_user_client_ui_PopupPanel$1_2Lcom_google_gwt_event_logical_shared_ResizeEvent_2V(){
  var height, width_0, winHeight, winWidth;
  null.$_nullMethod();
  winWidth = com_google_gwt_dom_client_Document_$getClientWidth__Lcom_google_gwt_dom_client_Document_2I($doc);
  winHeight = com_google_gwt_dom_client_Document_$getClientHeight__Lcom_google_gwt_dom_client_Document_2I($doc);
  null.$_nullMethod((com_google_gwt_dom_client_Style$Display_$clinit__V() , 'none'));
  null.$_nullMethod((com_google_gwt_dom_client_Style$Unit_$clinit__V() , $intern_54));
  null.$_nullMethod($intern_54);
  width_0 = com_google_gwt_dom_client_Document_$getScrollWidth__Lcom_google_gwt_dom_client_Document_2I($doc);
  height = com_google_gwt_dom_client_Document_$getScrollHeight__Lcom_google_gwt_dom_client_Document_2I($doc);
  null.$_nullMethod($wnd.Math.max(width_0, winWidth) + 'px');
  null.$_nullMethod($wnd.Math.max(height, winHeight) + 'px');
  null.$_nullMethod('block');
}

function com_google_gwt_user_client_ui_PopupPanel$1_PopupPanel$1__Lcom_google_gwt_user_client_ui_PopupPanel_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(126, 1, $intern_63, com_google_gwt_user_client_ui_PopupPanel$1_PopupPanel$1__Lcom_google_gwt_user_client_ui_PopupPanel_2V);
_.onResize__Lcom_google_gwt_event_logical_shared_ResizeEvent_2V = function com_google_gwt_user_client_ui_PopupPanel$1_onResize__Lcom_google_gwt_event_logical_shared_ResizeEvent_2V(event_0){
  com_google_gwt_user_client_ui_PopupPanel$1_$onResize__Lcom_google_gwt_user_client_ui_PopupPanel$1_2Lcom_google_gwt_event_logical_shared_ResizeEvent_2V();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1PopupPanel$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'PopupPanel/1', 126);
function com_google_gwt_user_client_ui_PopupPanel$3_PopupPanel$3__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this$0){
  this.com_google_gwt_user_client_ui_PopupPanel$3_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(127, 1, {27:1, 273:1}, com_google_gwt_user_client_ui_PopupPanel$3_PopupPanel$3__Lcom_google_gwt_user_client_ui_PopupPanel_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1PopupPanel$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'PopupPanel/3', 127);
function com_google_gwt_user_client_ui_PopupPanel$4_PopupPanel$4__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this$0){
  this.com_google_gwt_user_client_ui_PopupPanel$4_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(128, 1, {274:1, 27:1}, com_google_gwt_user_client_ui_PopupPanel$4_PopupPanel$4__Lcom_google_gwt_user_client_ui_PopupPanel_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1PopupPanel$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'PopupPanel/4', 128);
function com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$maybeShowGlass__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2V(this$static){
  if (this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_showing) {
    if (this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_isGlassEnabled) {
      com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2($doc.body, this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_glass);
      this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_resizeRegistration = com_google_gwt_user_client_Window_addResizeHandler__Lcom_google_gwt_event_logical_shared_ResizeHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_glassResizer);
      com_google_gwt_user_client_ui_PopupPanel$1_$onResize__Lcom_google_gwt_user_client_ui_PopupPanel$1_2Lcom_google_gwt_event_logical_shared_ResizeEvent_2V();
      this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_glassShowing = true;
    }
  }
   else if (this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_glassShowing) {
    com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2($doc.body, this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_glass);
    com_google_web_bindery_event_shared_SimpleEventBus$1_$removeHandler__Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2V(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_resizeRegistration.com_google_gwt_event_shared_LegacyHandlerWrapper_real);
    this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_resizeRegistration = null;
    this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_glassShowing = false;
  }
}

function com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$onComplete__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2V(this$static){
  if (!this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_showing) {
    com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$maybeShowGlass__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2V(this$static);
    this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_isUnloading || com_google_gwt_user_client_ui_AbsolutePanel_$remove__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2Z((com_google_gwt_user_client_ui_RootPanel_$clinit__V() , com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2(null)), this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel);
  }
  com_google_gwt_user_client_ui_UIObject_$getElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel).style[$intern_57] = 'rect(auto, auto, auto, auto)';
  com_google_gwt_user_client_ui_UIObject_$getElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel).style[$intern_11] = $intern_59;
}

function com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$onInstantaneousRun__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2V(this$static){
  com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$maybeShowGlass__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2V(this$static);
  if (this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_showing) {
    com_google_gwt_user_client_ui_UIObject_$getElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel).style[$intern_52] = 'absolute';
    this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_topPosition != -1 && com_google_gwt_user_client_ui_PopupPanel_$setPopupPosition__Lcom_google_gwt_user_client_ui_PopupPanel_2IIV(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel, this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_leftPosition, this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_topPosition);
    com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V((com_google_gwt_user_client_ui_RootPanel_$clinit__V() , com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2(null)), this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel);
  }
   else {
    this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_isUnloading || com_google_gwt_user_client_ui_AbsolutePanel_$remove__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2Z((com_google_gwt_user_client_ui_RootPanel_$clinit__V() , com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2(null)), this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel);
  }
  com_google_gwt_user_client_ui_UIObject_$getElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel).style[$intern_11] = $intern_59;
}

function com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$onUpdate__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2DV(this$static, progress){
  var bottom, height, left, right, top_0, width_0;
  this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_showing || (progress = 1 - progress);
  top_0 = 0;
  left = 0;
  right = 0;
  bottom = 0;
  height = com_google_gwt_lang_Cast_round_1int__DI(progress * this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_offsetHeight);
  width_0 = com_google_gwt_lang_Cast_round_1int__DI(progress * this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_offsetWidth);
  switch (0) {
    case 0:
      top_0 = this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_offsetHeight - height >> 1;
      left = this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_offsetWidth - width_0 >> 1;
      right = left + width_0;
      bottom = top_0 + height;
  }
  com_google_gwt_user_client_ui_impl_PopupImpl_$setClip__Lcom_google_gwt_user_client_ui_impl_PopupImpl_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(com_google_gwt_user_client_ui_UIObject_$getElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel), 'rect(' + top_0 + 'px, ' + right + 'px, ' + bottom + 'px, ' + left + 'px)');
}

function com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$setState__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2ZZV(this$static, showing, isUnloading){
  var animate;
  this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_isUnloading = isUnloading;
  com_google_gwt_animation_client_Animation_$cancel__Lcom_google_gwt_animation_client_Animation_2V(this$static);
  if (this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_showTimer) {
    com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_showTimer);
    this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_showTimer = null;
    com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$onComplete__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2V(this$static);
  }
  this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_showing = showing;
  com_google_gwt_user_client_ui_PopupPanel_$updateHandlers__Lcom_google_gwt_user_client_ui_PopupPanel_2V(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel);
  animate = !isUnloading && this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_isAnimationEnabled;
  this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_showing = showing;
  if (animate) {
    if (showing) {
      com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$maybeShowGlass__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2V(this$static);
      com_google_gwt_user_client_ui_UIObject_$getElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel).style[$intern_52] = 'absolute';
      this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_topPosition != -1 && com_google_gwt_user_client_ui_PopupPanel_$setPopupPosition__Lcom_google_gwt_user_client_ui_PopupPanel_2IIV(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel, this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_leftPosition, this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel.com_google_gwt_user_client_ui_PopupPanel_topPosition);
      com_google_gwt_user_client_ui_UIObject_$getElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel).style[$intern_57] = $intern_58;
      com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V((com_google_gwt_user_client_ui_RootPanel_$clinit__V() , com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2(null)), this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel);
      this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_showTimer = new com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_PopupPanel$ResizeAnimation$1__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2V(this$static);
      com_google_gwt_user_client_Timer_$schedule__Lcom_google_gwt_user_client_Timer_2IV(this$static.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_showTimer, 1);
    }
     else {
      com_google_gwt_animation_client_Animation_$run__Lcom_google_gwt_animation_client_Animation_2IDLcom_google_gwt_dom_client_Element_2V(this$static, com_google_gwt_core_client_JsDate_now__D());
    }
  }
   else {
    com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_$onInstantaneousRun__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2V(this$static);
  }
}

function com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_PopupPanel$ResizeAnimation__Lcom_google_gwt_user_client_ui_PopupPanel_2V(panel){
  com_google_gwt_animation_client_Animation_Animation__Lcom_google_gwt_animation_client_AnimationScheduler_2V.call(this, (!com_google_gwt_animation_client_AnimationScheduler_instance && (com_google_gwt_animation_client_AnimationScheduler_instance = !!$wnd.requestAnimationFrame && !!$wnd.cancelAnimationFrame?new com_google_gwt_animation_client_AnimationSchedulerImplStandard_AnimationSchedulerImplStandard__V:new com_google_gwt_animation_client_AnimationSchedulerImplTimer_AnimationSchedulerImplTimer__V) , com_google_gwt_animation_client_AnimationScheduler_instance));
  this.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel = panel;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(124, 80, {}, com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_PopupPanel$ResizeAnimation__Lcom_google_gwt_user_client_ui_PopupPanel_2V);
_.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_curPanel = null;
_.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_glassShowing = false;
_.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_isUnloading = false;
_.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_offsetHeight = 0;
_.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_offsetWidth = -1;
_.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_showing = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1PopupPanel$ResizeAnimation_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'PopupPanel/ResizeAnimation', 124);
function com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_PopupPanel$ResizeAnimation$1__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2V(this$1){
  this.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_this$11 = this$1;
  com_google_gwt_user_client_Timer_Timer__V.call(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(125, 67, {}, com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_PopupPanel$ResizeAnimation$1__Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2V);
_.run__V = function com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_run__V(){
  this.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_this$11.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_showTimer = null;
  com_google_gwt_animation_client_Animation_$run__Lcom_google_gwt_animation_client_Animation_2IDLcom_google_gwt_dom_client_Element_2V(this.com_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_this$11, com_google_gwt_core_client_JsDate_now__D());
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1PopupPanel$ResizeAnimation$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'PopupPanel/ResizeAnimation/1', 125);
function com_google_gwt_user_client_ui_RootPanel_$clinit__V(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_user_client_ui_RootPanel_maybeDetachCommand = new com_google_gwt_user_client_ui_RootPanel$1_RootPanel$1__V;
  com_google_gwt_user_client_ui_RootPanel_rootPanels = new java_util_HashMap_HashMap__V;
  com_google_gwt_user_client_ui_RootPanel_widgetsToDetach = new java_util_HashSet_HashSet__V;
}

function com_google_gwt_user_client_ui_RootPanel_RootPanel__Lcom_google_gwt_dom_client_Element_2V(elem){
  com_google_gwt_user_client_ui_ComplexPanel_ComplexPanel__V.call(this);
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this, (com_google_gwt_user_client_DOM_$clinit__V() , elem));
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
}

function com_google_gwt_user_client_ui_RootPanel_detachNow__Lcom_google_gwt_user_client_ui_Widget_2V(widget){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  try {
    com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(widget);
  }
   finally {
    java_util_HashSet_$remove__Ljava_util_HashSet_2Ljava_lang_Object_2Z(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, widget);
  }
}

function com_google_gwt_user_client_ui_RootPanel_detachWidgets__V(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  try {
    com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, com_google_gwt_user_client_ui_RootPanel_maybeDetachCommand);
  }
   finally {
    java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach.java_util_HashSet_map);
    java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(com_google_gwt_user_client_ui_RootPanel_rootPanels);
  }
}

function com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2(id_0){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  var elem, rp;
  rp = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(com_google_gwt_user_client_ui_RootPanel_rootPanels, id_0), 43);
  elem = null;
  if (id_0 != null) {
    if (!(elem = com_google_gwt_dom_client_Document_$getElementById__Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, id_0))) {
      return null;
    }
  }
  if (rp) {
    if (!elem || (com_google_gwt_user_client_DOM_$clinit__V() , rp.com_google_gwt_user_client_ui_UIObject_element == elem)) {
      return rp;
    }
  }
  java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I(com_google_gwt_user_client_ui_RootPanel_rootPanels) == 0 && com_google_gwt_user_client_Window_addCloseHandler__Lcom_google_gwt_event_logical_shared_CloseHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(new com_google_gwt_user_client_ui_RootPanel$2_RootPanel$2__V);
  !elem?(rp = new com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_RootPanel$DefaultRootPanel__V):(rp = new com_google_gwt_user_client_ui_RootPanel_RootPanel__Lcom_google_gwt_dom_client_Element_2V(elem));
  java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_user_client_ui_RootPanel_rootPanels, id_0, rp);
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, rp);
  return rp;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(43, 134, $intern_64, com_google_gwt_user_client_ui_RootPanel_RootPanel__Lcom_google_gwt_dom_client_Element_2V);
var com_google_gwt_user_client_ui_RootPanel_maybeDetachCommand, com_google_gwt_user_client_ui_RootPanel_rootPanels, com_google_gwt_user_client_ui_RootPanel_widgetsToDetach;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'RootPanel', 43);
function com_google_gwt_user_client_ui_RootPanel$1_RootPanel$1__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(136, 1, {}, com_google_gwt_user_client_ui_RootPanel$1_RootPanel$1__V);
_.execute__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_RootPanel$1_execute__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  w.com_google_gwt_user_client_ui_Widget_attached && com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(w);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'RootPanel/1', 136);
function com_google_gwt_user_client_ui_RootPanel$2_RootPanel$2__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(137, 1, {280:1, 27:1}, com_google_gwt_user_client_ui_RootPanel$2_RootPanel$2__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'RootPanel/2', 137);
function com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_RootPanel$DefaultRootPanel__V(){
  com_google_gwt_user_client_ui_RootPanel_RootPanel__Lcom_google_gwt_dom_client_Element_2V.call(this, $doc.body);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(135, 43, $intern_64, com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_RootPanel$DefaultRootPanel__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel$DefaultRootPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'RootPanel/DefaultRootPanel', 135);
function com_google_gwt_user_client_ui_SimplePanel$1_$next__Lcom_google_gwt_user_client_ui_SimplePanel$1_2Lcom_google_gwt_user_client_ui_Widget_2(this$static){
  if (!this$static.com_google_gwt_user_client_ui_SimplePanel$1_hasElement || !this$static.com_google_gwt_user_client_ui_SimplePanel$1_this$01.com_google_gwt_user_client_ui_SimplePanel_widget) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_util_NoSuchElementException_NoSuchElementException__V);
  }
  this$static.com_google_gwt_user_client_ui_SimplePanel$1_hasElement = false;
  return this$static.com_google_gwt_user_client_ui_SimplePanel$1_returned = this$static.com_google_gwt_user_client_ui_SimplePanel$1_this$01.com_google_gwt_user_client_ui_SimplePanel_widget;
}

function com_google_gwt_user_client_ui_SimplePanel$1_SimplePanel$1__Lcom_google_gwt_user_client_ui_SimplePanel_2V(this$0){
  this.com_google_gwt_user_client_ui_SimplePanel$1_this$01 = this$0;
  this.com_google_gwt_user_client_ui_SimplePanel$1_hasElement = !!this.com_google_gwt_user_client_ui_SimplePanel$1_this$01.com_google_gwt_user_client_ui_SimplePanel_widget;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(81, 1, {}, com_google_gwt_user_client_ui_SimplePanel$1_SimplePanel$1__Lcom_google_gwt_user_client_ui_SimplePanel_2V);
_.next__Ljava_lang_Object_2 = function com_google_gwt_user_client_ui_SimplePanel$1_next__Ljava_lang_Object_2(){
  return com_google_gwt_user_client_ui_SimplePanel$1_$next__Lcom_google_gwt_user_client_ui_SimplePanel$1_2Lcom_google_gwt_user_client_ui_Widget_2(this);
}
;
_.hasNext__Z = function com_google_gwt_user_client_ui_SimplePanel$1_hasNext__Z(){
  return this.com_google_gwt_user_client_ui_SimplePanel$1_hasElement;
}
;
_.remove__V = function com_google_gwt_user_client_ui_SimplePanel$1_remove__V(){
  !!this.com_google_gwt_user_client_ui_SimplePanel$1_returned && this.com_google_gwt_user_client_ui_SimplePanel$1_this$01.remove__Lcom_google_gwt_user_client_ui_Widget_2Z(this.com_google_gwt_user_client_ui_SimplePanel$1_returned);
}
;
_.com_google_gwt_user_client_ui_SimplePanel$1_hasElement = false;
_.com_google_gwt_user_client_ui_SimplePanel$1_returned = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1SimplePanel$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'SimplePanel/1', 81);
function com_google_gwt_user_client_ui_ValueBoxBase_$getText__Lcom_google_gwt_user_client_ui_ValueBoxBase_2Ljava_lang_String_2(this$static){
  return com_google_gwt_dom_client_Element_$getPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2((com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element), 'value');
}

function com_google_gwt_user_client_ui_ValueBoxBase_ValueBoxBase__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_text_shared_Renderer_2Lcom_google_gwt_text_shared_Parser_2V(elem){
  com_google_gwt_user_client_ui_FocusWidget_FocusWidget__Lcom_google_gwt_dom_client_Element_2V.call(this, elem);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(110, 77, $intern_50);
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V = function com_google_gwt_user_client_ui_ValueBoxBase_onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(event_0){
  var type_0;
  type_0 = (com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(event_0.type));
  (type_0 & 896) != 0?com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event_0):com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event_0);
}
;
_.onLoad__V = function com_google_gwt_user_client_ui_ValueBoxBase_onLoad__V(){
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'ValueBoxBase', 110);
function com_google_gwt_user_client_ui_TextBoxBase_$clinit__V(){
  com_google_gwt_user_client_ui_TextBoxBase_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_$clinit__V();
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(111, 110, $intern_50);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1TextBoxBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'TextBoxBase', 111);
function com_google_gwt_user_client_ui_TextBox_TextBox__V(){
  var com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_InputElement_2_e_0;
  com_google_gwt_user_client_ui_TextBoxBase_$clinit__V();
  com_google_gwt_user_client_ui_TextBox_TextBox__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V.call(this, (com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_InputElement_2_e_0 = $doc.createElement('INPUT') , com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_InputElement_2_e_0.type = 'text' , com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_InputElement_2_e_0));
}

function com_google_gwt_user_client_ui_TextBox_TextBox__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(element){
  com_google_gwt_user_client_ui_ValueBoxBase_ValueBoxBase__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_text_shared_Renderer_2Lcom_google_gwt_text_shared_Parser_2V.call(this, (!com_google_gwt_text_shared_testing_PassthroughRenderer_INSTANCE && (com_google_gwt_text_shared_testing_PassthroughRenderer_INSTANCE = new com_google_gwt_text_shared_testing_PassthroughRenderer_PassthroughRenderer__V) , !com_google_gwt_text_shared_testing_PassthroughParser_INSTANCE && (com_google_gwt_text_shared_testing_PassthroughParser_INSTANCE = new com_google_gwt_text_shared_testing_PassthroughParser_PassthroughParser__V) , element));
  (com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element).className = 'gwt-TextBox';
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(74, 111, $intern_50, com_google_gwt_user_client_ui_TextBox_TextBox__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1TextBox_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'TextBox', 74);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_$clinit__V(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_CENTER = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_ValueBoxBase$TextAlignment$1__Ljava_lang_String_2IV;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_JUSTIFY = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_ValueBoxBase$TextAlignment$2__Ljava_lang_String_2IV;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_LEFT = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_ValueBoxBase$TextAlignment$3__Ljava_lang_String_2IV;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_RIGHT = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_ValueBoxBase$TextAlignment$4__Ljava_lang_String_2IV;
}

function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_ValueBoxBase$TextAlignment__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_values___3Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_$clinit__V();
  return com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment_12_1classLit, 1), $intern_9, 20, 0, [com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_CENTER, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_JUSTIFY, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_LEFT, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_RIGHT]);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(20, 5, $intern_65);
var com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_CENTER, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_JUSTIFY, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_LEFT, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_RIGHT;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_49, 'ValueBoxBase/TextAlignment', 20, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_values___3Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_ValueBoxBase$TextAlignment$1__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_ValueBoxBase$TextAlignment__Ljava_lang_String_2IV.call(this, 'CENTER', 0);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(112, 20, $intern_65, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_ValueBoxBase$TextAlignment$1__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment$1_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_49, 'ValueBoxBase/TextAlignment/1', 112, null);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_ValueBoxBase$TextAlignment$2__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_ValueBoxBase$TextAlignment__Ljava_lang_String_2IV.call(this, 'JUSTIFY', 1);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(113, 20, $intern_65, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_ValueBoxBase$TextAlignment$2__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment$2_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_49, 'ValueBoxBase/TextAlignment/2', 113, null);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_ValueBoxBase$TextAlignment$3__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_ValueBoxBase$TextAlignment__Ljava_lang_String_2IV.call(this, 'LEFT', 2);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(114, 20, $intern_65, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_ValueBoxBase$TextAlignment$3__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment$3_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_49, 'ValueBoxBase/TextAlignment/3', 114, null);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_ValueBoxBase$TextAlignment$4__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_ValueBoxBase$TextAlignment__Ljava_lang_String_2IV.call(this, 'RIGHT', 3);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(115, 20, $intern_65, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_ValueBoxBase$TextAlignment$4__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment$4_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_49, 'ValueBoxBase/TextAlignment/4', 115, null);
function com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  var td, tr, com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0;
  tr = (com_google_gwt_user_client_DOM_$clinit__V() , $doc.createElement('tr'));
  td = (com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0 = $doc.createElement('td') , com_google_gwt_user_client_ui_CellPanel_$setCellHorizontalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2V(com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0, this$static.com_google_gwt_user_client_ui_VerticalPanel_horzAlign) , com_google_gwt_user_client_ui_CellPanel_$setCellVerticalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2V(com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0, this$static.com_google_gwt_user_client_ui_VerticalPanel_vertAlign) , com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0);
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(tr, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(td));
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static.com_google_gwt_user_client_ui_CellPanel_body, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(tr));
  com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, w, td);
}

function com_google_gwt_user_client_ui_VerticalPanel_$setHorizontalAlignment__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2V(this$static, align_0){
  this$static.com_google_gwt_user_client_ui_VerticalPanel_horzAlign = align_0;
}

function com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V(){
  com_google_gwt_user_client_ui_ComplexPanel_ComplexPanel__V.call(this);
  this.com_google_gwt_user_client_ui_CellPanel_table = (com_google_gwt_user_client_DOM_$clinit__V() , $doc.createElement('table'));
  this.com_google_gwt_user_client_ui_CellPanel_body = $doc.createElement('tbody');
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_CellPanel_table, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_client_ui_CellPanel_body));
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2V(this, this.com_google_gwt_user_client_ui_CellPanel_table);
  this.com_google_gwt_user_client_ui_VerticalPanel_horzAlign = (com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT);
  this.com_google_gwt_user_client_ui_VerticalPanel_vertAlign = (com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP);
  this.com_google_gwt_user_client_ui_CellPanel_table[$intern_60] = '0';
  this.com_google_gwt_user_client_ui_CellPanel_table[$intern_61] = '0';
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(95, 116, $intern_50, com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V);
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_VerticalPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  var removed, td;
  td = (com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(w.com_google_gwt_user_client_ui_UIObject_element));
  removed = com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
  removed && com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_CellPanel_body, com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(td));
  return removed;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1VerticalPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'VerticalPanel', 95);
function com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  com_google_gwt_user_client_ui_WidgetCollection_$insert__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, w, this$static.com_google_gwt_user_client_ui_WidgetCollection_size);
}

function com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static, w){
  var i;
  for (i = 0; i < this$static.com_google_gwt_user_client_ui_WidgetCollection_size; ++i) {
    if (this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i] == w) {
      return i;
    }
  }
  return -1;
}

function com_google_gwt_user_client_ui_WidgetCollection_$insert__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V);
  }
  if (this$static.com_google_gwt_user_client_ui_WidgetCollection_size == this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length) {
    newArray = com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit, $intern_9, 8, this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length; ++i0) {
      newArray[i0] = this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i0];
    }
    this$static.com_google_gwt_user_client_ui_WidgetCollection_array = newArray;
  }
  ++this$static.com_google_gwt_user_client_ui_WidgetCollection_size;
  for (i = this$static.com_google_gwt_user_client_ui_WidgetCollection_size - 1; i > beforeIndex; --i) {
    this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i] = this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i - 1];
  }
  this$static.com_google_gwt_user_client_ui_WidgetCollection_array[beforeIndex] = w;
}

function com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2IV(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V);
  }
  --this$static.com_google_gwt_user_client_ui_WidgetCollection_size;
  for (i = index_0; i < this$static.com_google_gwt_user_client_ui_WidgetCollection_size; ++i) {
    this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i] = this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i + 1];
  }
  this$static.com_google_gwt_user_client_ui_WidgetCollection_array[this$static.com_google_gwt_user_client_ui_WidgetCollection_size] = null;
}

function com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  var index_0;
  index_0 = com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static, w);
  if (index_0 == -1) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_util_NoSuchElementException_NoSuchElementException__V);
  }
  com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2IV(this$static, index_0);
}

function com_google_gwt_user_client_ui_WidgetCollection_WidgetCollection__Lcom_google_gwt_user_client_ui_HasWidgets_2V(parent_0){
  this.com_google_gwt_user_client_ui_WidgetCollection_parent = parent_0;
  this.com_google_gwt_user_client_ui_WidgetCollection_array = com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit, $intern_9, 8, 4, 0, 1);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(191, 1, {}, com_google_gwt_user_client_ui_WidgetCollection_WidgetCollection__Lcom_google_gwt_user_client_ui_HasWidgets_2V);
_.iterator__Ljava_util_Iterator_2 = function com_google_gwt_user_client_ui_WidgetCollection_iterator__Ljava_util_Iterator_2(){
  return new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this);
}
;
_.com_google_gwt_user_client_ui_WidgetCollection_size = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1WidgetCollection_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'WidgetCollection', 191);
function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_Widget_2(this$static){
  if (this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index >= this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_util_NoSuchElementException_NoSuchElementException__V);
  }
  this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_currentWidget = this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01.com_google_gwt_user_client_ui_WidgetCollection_array[this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index];
  ++this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index;
  return this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_currentWidget;
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this$0){
  this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(86, 1, {}, com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V);
_.next__Ljava_lang_Object_2 = function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_next__Ljava_lang_Object_2(){
  return com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_Widget_2(this);
}
;
_.hasNext__Z = function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_hasNext__Z(){
  return this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index < this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01.com_google_gwt_user_client_ui_WidgetCollection_size;
}
;
_.remove__V = function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_remove__V(){
  if (!this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_currentWidget) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__V);
  }
  this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01.com_google_gwt_user_client_ui_WidgetCollection_parent.remove__Lcom_google_gwt_user_client_ui_Widget_2Z(this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_currentWidget);
  --this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index;
  this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_currentWidget = null;
}
;
_.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1WidgetCollection$WidgetIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'WidgetCollection/WidgetIterator', 86);
function com_google_gwt_user_client_ui_impl_FocusImplIE6_$focus__Lcom_google_gwt_user_client_ui_impl_FocusImplIE6_2Lcom_google_gwt_dom_client_Element_2V(elem){
  try {
    elem.focus();
  }
   catch (e) {
    if (!elem || !elem.focus) {
      throw e;
    }
  }
}

function com_google_gwt_user_client_ui_impl_PopupImpl_$setClip__Lcom_google_gwt_user_client_ui_impl_PopupImpl_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(popup, rect){
  popup.style[$intern_57] = rect;
}

function com_google_gwt_useragent_client_UserAgentAsserter_assertCompileTimeUserAgent__V(){
  var runtimeValue;
  runtimeValue = com_google_gwt_useragent_client_UserAgentImplIe9_$getRuntimeValue__Lcom_google_gwt_useragent_client_UserAgentImplIe9_2Ljava_lang_String_2();
  if (!java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z('ie9', runtimeValue)) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_UserAgentAsserter$UserAgentAssertionError__Ljava_lang_String_2Ljava_lang_String_2V(runtimeValue));
  }
}

function java_lang_Error_Error__Ljava_lang_String_2Ljava_lang_Throwable_2V(message, cause){
  java_lang_Throwable_Throwable__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, message, cause);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(60, 4, $intern_17);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Error_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Error', 60);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(18, 60, $intern_17);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1AssertionError_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'AssertionError', 18);
function com_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_UserAgentAsserter$UserAgentAssertionError__Ljava_lang_String_2Ljava_lang_String_2V(runtimeValue){
  java_lang_Error_Error__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, $intern_66 + runtimeValue + $intern_67 + $intern_68 == null?$intern_19:com_google_gwt_lang_Runtime_toString__Ljava_lang_Object_2Ljava_lang_String_2($intern_66 + runtimeValue + $intern_67 + $intern_68), com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($intern_66 + runtimeValue + $intern_67 + $intern_68, 4)?com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($intern_66 + runtimeValue + $intern_67 + $intern_68, 4):null);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(92, 18, $intern_17, com_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_UserAgentAsserter$UserAgentAssertionError__Ljava_lang_String_2Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1useragent_1client_1UserAgentAsserter$UserAgentAssertionError_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 92);
function com_google_gwt_useragent_client_UserAgentImplIe9_$getRuntimeValue__Lcom_google_gwt_useragent_client_UserAgentImplIe9_2Ljava_lang_String_2(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function com_google_gwt_xhr_client_XMLHttpRequest_$clearOnReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(this$static){
  this$static.onreadystatechange = function(){
  }
  ;
}

function com_google_gwt_xhr_client_XMLHttpRequest_$open__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, httpMethod, url_0){
  this$static.open(httpMethod, url_0, true);
}

function com_google_gwt_xhr_client_XMLHttpRequest_$setOnReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Lcom_google_gwt_xhr_client_ReadyStateChangeHandler_2V(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(_this);
  }
  );
}

function com_google_gwt_xhr_client_XMLHttpRequest_$setRequestHeader__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, header, value_0){
  this$static.setRequestHeader(header, value_0);
}

function com_google_web_bindery_event_shared_SimpleEventBus$1_$removeHandler__Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2V(this$static){
  com_google_gwt_event_shared_HandlerManager$Bus_$doRemove__Lcom_google_gwt_event_shared_HandlerManager$Bus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static.com_google_web_bindery_event_shared_SimpleEventBus$1_this$01, this$static.com_google_web_bindery_event_shared_SimpleEventBus$1_val$type2, this$static.com_google_web_bindery_event_shared_SimpleEventBus$1_val$source3, this$static.com_google_web_bindery_event_shared_SimpleEventBus$1_val$handler4);
}

function com_google_web_bindery_event_shared_SimpleEventBus$1_SimpleEventBus$1__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$0, val$type, val$handler){
  this.com_google_web_bindery_event_shared_SimpleEventBus$1_this$01 = this$0;
  this.com_google_web_bindery_event_shared_SimpleEventBus$1_val$type2 = val$type;
  this.com_google_web_bindery_event_shared_SimpleEventBus$1_val$source3 = null;
  this.com_google_web_bindery_event_shared_SimpleEventBus$1_val$handler4 = val$handler;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(149, 1, {}, com_google_web_bindery_event_shared_SimpleEventBus$1_SimpleEventBus$1__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1SimpleEventBus$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_25, 'SimpleEventBus/1', 149);
function com_google_web_bindery_event_shared_SimpleEventBus$2_SimpleEventBus$2__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$0, val$type, val$handler){
  this.com_google_web_bindery_event_shared_SimpleEventBus$2_this$01 = this$0;
  this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$type2 = val$type;
  this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$source3 = null;
  this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$handler4 = val$handler;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(150, 1, {236:1}, com_google_web_bindery_event_shared_SimpleEventBus$2_SimpleEventBus$2__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V);
_.execute__V = function com_google_web_bindery_event_shared_SimpleEventBus$2_execute__V(){
  com_google_web_bindery_event_shared_SimpleEventBus_$doAddNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this.com_google_web_bindery_event_shared_SimpleEventBus$2_this$01, this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$type2, this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$source3, this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$handler4);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1SimpleEventBus$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_25, 'SimpleEventBus/2', 150);
function com_google_web_bindery_event_shared_SimpleEventBus$3_SimpleEventBus$3__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$0, val$type, val$source, val$handler){
  this.com_google_web_bindery_event_shared_SimpleEventBus$3_this$01 = this$0;
  this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$type2 = val$type;
  this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$source3 = val$source;
  this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$handler4 = val$handler;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(151, 1, {236:1}, com_google_web_bindery_event_shared_SimpleEventBus$3_SimpleEventBus$3__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V);
_.execute__V = function com_google_web_bindery_event_shared_SimpleEventBus$3_execute__V(){
  com_google_web_bindery_event_shared_SimpleEventBus_$doRemoveNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this.com_google_web_bindery_event_shared_SimpleEventBus$3_this$01, this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$type2, this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$source3, this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$handler4);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1SimpleEventBus$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_25, 'SimpleEventBus/3', 151);
function java_lang_AbstractStringBuilder_AbstractStringBuilder__Ljava_lang_String_2V(string){
  this.java_lang_AbstractStringBuilder_string = string;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(104, 1, {93:1});
_.toString__Ljava_lang_String_2 = function java_lang_AbstractStringBuilder_toString__Ljava_lang_String_2(){
  return this.java_lang_AbstractStringBuilder_string;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1AbstractStringBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'AbstractStringBuilder', 104);
function java_lang_ArrayStoreException_ArrayStoreException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(138, 9, $intern_17, java_lang_ArrayStoreException_ArrayStoreException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ArrayStoreException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'ArrayStoreException', 138);
function java_lang_Boolean_$clinit__V(){
  java_lang_Boolean_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
}

com_google_gwt_lang_Cast_booleanCastMap = {3:1, 6:1};
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Boolean_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Boolean', 248);
function java_lang_ClassCastException_ClassCastException__Ljava_lang_String_2V(){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, null);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(103, 9, $intern_17, java_lang_ClassCastException_ClassCastException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ClassCastException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'ClassCastException', 103);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(62, 1, {3:1, 62:1});
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Number_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Number', 62);
function java_lang_Double_$hashCode__Ljava_lang_Double_2I(this$static){
  return com_google_gwt_lang_Cast_round_1int__DI((javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static) , this$static));
}

com_google_gwt_lang_Cast_doubleCastMap = {3:1, 6:1, 62:1};
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Double_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Double', 249);
function java_lang_IllegalArgumentException_IllegalArgumentException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(28, 9, $intern_17, java_lang_IllegalArgumentException_IllegalArgumentException__V, java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IllegalArgumentException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'IllegalArgumentException', 28);
function java_lang_IllegalStateException_IllegalStateException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V(s){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, s);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(29, 9, $intern_17, java_lang_IllegalStateException_IllegalStateException__V, java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IllegalStateException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'IllegalStateException', 29);
function java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(40, 9, $intern_17, java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V, java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IndexOutOfBoundsException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'IndexOutOfBoundsException', 40);
function java_lang_Integer_Integer__IV(value_0){
  this.java_lang_Integer_value = value_0;
}

function java_lang_Integer_valueOf__ILjava_lang_Integer_2(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = (java_lang_Integer$BoxedValues_$clinit__V() , java_lang_Integer$BoxedValues_boxedValues)[rebase];
    !result && (result = java_lang_Integer$BoxedValues_boxedValues[rebase] = new java_lang_Integer_Integer__IV(i));
    return result;
  }
  return new java_lang_Integer_Integer__IV(i);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(34, 62, {3:1, 6:1, 34:1, 62:1}, java_lang_Integer_Integer__IV);
_.equals__Ljava_lang_Object_2Z = function java_lang_Integer_equals__Ljava_lang_Object_2Z(o){
  return com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 34) && com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 34).java_lang_Integer_value == this.java_lang_Integer_value;
}
;
_.hashCode__I = function java_lang_Integer_hashCode__I(){
  return this.java_lang_Integer_value;
}
;
_.toString__Ljava_lang_String_2 = function java_lang_Integer_toString__Ljava_lang_String_2(){
  return '' + this.java_lang_Integer_value;
}
;
_.java_lang_Integer_value = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Integer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Integer', 34);
function java_lang_Integer$BoxedValues_$clinit__V(){
  java_lang_Integer$BoxedValues_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  java_lang_Integer$BoxedValues_boxedValues = com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Integer_12_1classLit, $intern_9, 34, 256, 0, 1);
}

var java_lang_Integer$BoxedValues_boxedValues;
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(303, 1, {});
function java_lang_NullPointerException_NullPointerException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(19, 63, $intern_17, java_lang_NullPointerException_NullPointerException__V, java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V);
_.package_private$java_lang$createError__Ljava_lang_String_2Ljava_lang_Object_2 = function java_lang_NullPointerException_createError__Ljava_lang_String_2Ljava_lang_Object_2(msg){
  return new TypeError(msg);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1NullPointerException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'NullPointerException', 19);
function java_lang_String_$charAt__Ljava_lang_String_2IC(this$static, index_0){
  javaemul_internal_InternalPreconditions_checkCriticalStringElementIndex__IIV(index_0, this$static.length);
  return this$static.charCodeAt(index_0);
}

function java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static, other){
  return javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static) , this$static === other;
}

function java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z(this$static, other){
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static);
  if (other == null) {
    return false;
  }
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static, other)) {
    return true;
  }
  return this$static.length == other.length && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static.toLowerCase(), other.toLowerCase());
}

function java_lang_String_$indexOf__Ljava_lang_String_2Ljava_lang_String_2I(this$static, str){
  return this$static.indexOf(str);
}

function java_lang_String_$lastIndexOf__Ljava_lang_String_2Ljava_lang_String_2I(this$static, str){
  return this$static.lastIndexOf(str);
}

function java_lang_String_$substring__Ljava_lang_String_2ILjava_lang_String_2(this$static, beginIndex){
  return this$static.substr(beginIndex);
}

function java_lang_String_$substring__Ljava_lang_String_2IILjava_lang_String_2(this$static, endIndex){
  return this$static.substr(0, endIndex);
}

function java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(this$static){
  var end, length_0, start_0;
  length_0 = this$static.length;
  start_0 = 0;
  while (start_0 < length_0 && (javaemul_internal_InternalPreconditions_checkCriticalStringElementIndex__IIV(start_0, this$static.length) , this$static.charCodeAt(start_0) <= 32)) {
    ++start_0;
  }
  end = length_0;
  while (end > start_0 && (javaemul_internal_InternalPreconditions_checkCriticalStringElementIndex__IIV(end - 1, this$static.length) , this$static.charCodeAt(end - 1) <= 32)) {
    --end;
  }
  return start_0 > 0 || end < length_0?this$static.substr(start_0, end - start_0):this$static;
}

function java_lang_String_fromCodePoint__ILjava_lang_String_2(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= $intern_41) {
    hiSurrogate = 55296 + (codePoint - $intern_41 >> 10 & 1023) & 65535;
    loSurrogate = 56320 + (codePoint - $intern_41 & 1023) & 65535;
    return String.fromCharCode(hiSurrogate) + ('' + String.fromCharCode(loSurrogate));
  }
   else {
    return String.fromCharCode(codePoint & 65535);
  }
}

com_google_gwt_lang_Cast_stringCastMap = {3:1, 93:1, 6:1, 2:1};
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'String', 2);
function java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2Ljava_lang_StringBuilder_2(this$static, x_0){
  this$static.java_lang_AbstractStringBuilder_string += '' + x_0;
  return this$static;
}

function java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2Ljava_lang_StringBuilder_2(this$static, x_0){
  this$static.java_lang_AbstractStringBuilder_string += '' + x_0;
  return this$static;
}

function java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(this$static, x_0){
  this$static.java_lang_AbstractStringBuilder_string += '' + x_0;
  return this$static;
}

function java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V(s){
  java_lang_AbstractStringBuilder_AbstractStringBuilder__Ljava_lang_String_2V.call(this, (javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(s) , s));
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(52, 104, {93:1}, java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1StringBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'StringBuilder', 52);
function java_lang_StringIndexOutOfBoundsException_StringIndexOutOfBoundsException__Ljava_lang_String_2V(message){
  java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(108, 40, $intern_17, java_lang_StringIndexOutOfBoundsException_StringIndexOutOfBoundsException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1StringIndexOutOfBoundsException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'StringIndexOutOfBoundsException', 108);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(307, 1, {});
function java_lang_UnsupportedOperationException_UnsupportedOperationException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(50, 9, $intern_17, java_lang_UnsupportedOperationException_UnsupportedOperationException__V, java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1UnsupportedOperationException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'UnsupportedOperationException', 50);
function java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_lang_Object_2ZZ(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator__Ljava_util_Iterator_2(); iter.hasNext__Z();) {
    e = iter.next__Ljava_lang_Object_2();
    if (com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(o) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(e) || o != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(o, e)) {
      remove && iter.remove__V();
      return true;
    }
  }
  return false;
}

function java_util_AbstractCollection_$containsAll__Ljava_util_AbstractCollection_2Ljava_util_Collection_2Z(this$static, c){
  var e, e$iterator;
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(c);
  for (e$iterator = c.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    if (!this$static.contains__Ljava_lang_Object_2Z(e)) {
      return false;
    }
  }
  return true;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(257, 1, {});
_.add__Ljava_lang_Object_2Z = function java_util_AbstractCollection_add__Ljava_lang_Object_2Z(o){
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V('Add not supported on this collection'));
}
;
_.contains__Ljava_lang_Object_2Z = function java_util_AbstractCollection_contains__Ljava_lang_Object_2Z(o){
  return java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_lang_Object_2ZZ(this, o, false);
}
;
_.isEmpty__Z = function java_util_AbstractCollection_isEmpty__Z(){
  return this.size__I() == 0;
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_AbstractCollection_remove__Ljava_lang_Object_2Z(o){
  return java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_lang_Object_2ZZ(this, o, true);
}
;
_.toString__Ljava_lang_String_2 = function java_util_AbstractCollection_toString__Ljava_lang_String_2(){
  var e, e$iterator, joiner;
  joiner = new java_util_StringJoiner_StringJoiner__Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2V('[', ']');
  for (e$iterator = this.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    java_util_StringJoiner_$add__Ljava_util_StringJoiner_2Ljava_lang_CharSequence_2Ljava_util_StringJoiner_2(joiner, e === this?'(this Collection)':e == null?$intern_19:com_google_gwt_lang_Runtime_toString__Ljava_lang_Object_2Ljava_lang_String_2(e));
  }
  return !joiner.java_util_StringJoiner_builder?joiner.java_util_StringJoiner_emptyValue:joiner.java_util_StringJoiner_suffix.length == 0?joiner.java_util_StringJoiner_builder.java_lang_AbstractStringBuilder_string:joiner.java_util_StringJoiner_builder.java_lang_AbstractStringBuilder_string + ('' + joiner.java_util_StringJoiner_suffix);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractCollection_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'AbstractCollection', 257);
function java_util_AbstractMap_$containsEntry__Ljava_util_AbstractMap_2Ljava_util_Map$Entry_2Z(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey__Ljava_lang_Object_2();
  value_0 = entry.getValue__Ljava_lang_Object_2();
  ourValue = com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key):java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, key));
  if (!(com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(value_0) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(ourValue) || value_0 != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !(com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(this$static, key):!!java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, key))) {
    return false;
  }
  return true;
}

function java_util_AbstractMap_$toString__Ljava_util_AbstractMap_2Ljava_lang_Object_2Ljava_lang_String_2(this$static, o){
  return o === this$static?'(this Map)':o == null?$intern_19:com_google_gwt_lang_Runtime_toString__Ljava_lang_Object_2Ljava_lang_String_2(o);
}

function java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(entry){
  return !entry?null:entry.getValue__Ljava_lang_Object_2();
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(256, 1, {49:1});
_.equals__Ljava_lang_Object_2Z = function java_util_AbstractMap_equals__Ljava_lang_Object_2Z(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(obj, 24)) {
    return false;
  }
  otherMap = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(obj, 49);
  if (this.java_util_AbstractHashMap_hashCodeMap.java_util_InternalHashCodeMap_size + this.java_util_AbstractHashMap_stringMap.java_util_InternalStringMap_size != otherMap.java_util_AbstractHashMap_hashCodeMap.java_util_InternalHashCodeMap_size + otherMap.java_util_AbstractHashMap_stringMap.java_util_InternalStringMap_size) {
    return false;
  }
  for (entry$iterator = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(otherMap)).java_util_AbstractHashMap$EntrySet_this$01); entry$iterator.java_util_AbstractHashMap$EntrySetIterator_hasNext;) {
    entry = java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(entry$iterator);
    if (!java_util_AbstractMap_$containsEntry__Ljava_util_AbstractMap_2Ljava_util_Map$Entry_2Z(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.hashCode__I = function java_util_AbstractMap_hashCode__I(){
  return java_util_Collections_hashCode__Ljava_lang_Iterable_2I(new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this));
}
;
_.toString__Ljava_lang_String_2 = function java_util_AbstractMap_toString__Ljava_lang_String_2(){
  var entry, entry$iterator, joiner;
  joiner = new java_util_StringJoiner_StringJoiner__Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2V('{', '}');
  for (entry$iterator = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this)).java_util_AbstractHashMap$EntrySet_this$01); entry$iterator.java_util_AbstractHashMap$EntrySetIterator_hasNext;) {
    entry = java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(entry$iterator);
    java_util_StringJoiner_$add__Ljava_util_StringJoiner_2Ljava_lang_CharSequence_2Ljava_util_StringJoiner_2(joiner, java_util_AbstractMap_$toString__Ljava_util_AbstractMap_2Ljava_lang_Object_2Ljava_lang_String_2(this, entry.getKey__Ljava_lang_Object_2()) + '=' + java_util_AbstractMap_$toString__Ljava_util_AbstractMap_2Ljava_lang_Object_2Ljava_lang_String_2(this, entry.getValue__Ljava_lang_Object_2()));
  }
  return !joiner.java_util_StringJoiner_builder?joiner.java_util_StringJoiner_emptyValue:joiner.java_util_StringJoiner_suffix.length == 0?joiner.java_util_StringJoiner_builder.java_lang_AbstractStringBuilder_string:joiner.java_util_StringJoiner_builder.java_lang_AbstractStringBuilder_string + ('' + joiner.java_util_StringJoiner_suffix);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'AbstractMap', 256);
function java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this$static, key){
  return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(this$static, key):!!java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, key);
}

function java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key){
  return java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, key));
}

function java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  return key == null?java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, null)):java_util_InternalStringMap_$get__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_stringMap, key);
}

function java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(this$static, key){
  return key == null?!!java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, null):java_util_InternalStringMap_$contains__Ljava_util_InternalStringMap_2Ljava_lang_String_2Z(this$static.java_util_AbstractHashMap_stringMap, key);
}

function java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0):java_util_InternalHashCodeMap_$put__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_hashCodeMap, key, value_0);
}

function java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  return key == null?java_util_InternalHashCodeMap_$put__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_hashCodeMap, null, value_0):java_util_InternalStringMap_$put__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_stringMap, key, value_0);
}

function java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key){
  return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(key)?key == null?java_util_InternalHashCodeMap_$remove__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_hashCodeMap, null):java_util_InternalStringMap_$remove__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_stringMap, key):java_util_InternalHashCodeMap_$remove__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_hashCodeMap, key);
}

function java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(this$static){
  this$static.java_util_AbstractHashMap_hashCodeMap = new java_util_InternalHashCodeMap_InternalHashCodeMap__Ljava_util_AbstractHashMap_2V(this$static);
  this$static.java_util_AbstractHashMap_stringMap = new java_util_InternalStringMap_InternalStringMap__Ljava_util_AbstractHashMap_2V(this$static);
  java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static);
}

function java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I(this$static){
  return this$static.java_util_AbstractHashMap_hashCodeMap.java_util_InternalHashCodeMap_size + this$static.java_util_AbstractHashMap_stringMap.java_util_InternalStringMap_size;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(142, 256, {49:1});
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'AbstractHashMap', 142);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(258, 257, {59:1});
_.equals__Ljava_lang_Object_2Z = function java_util_AbstractSet_equals__Ljava_lang_Object_2Z(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 59)) {
    return false;
  }
  other = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 59);
  if (other.size__I() != this.size__I()) {
    return false;
  }
  return java_util_AbstractCollection_$containsAll__Ljava_util_AbstractCollection_2Ljava_util_Collection_2Z(this, other);
}
;
_.hashCode__I = function java_util_AbstractSet_hashCode__I(){
  return java_util_Collections_hashCode__Ljava_lang_Iterable_2I(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractSet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'AbstractSet', 258);
function java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this$static, o){
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 22)) {
    return java_util_AbstractMap_$containsEntry__Ljava_util_AbstractMap_2Ljava_util_Map$Entry_2Z(this$static.java_util_AbstractHashMap$EntrySet_this$01, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 22));
  }
  return false;
}

function java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this$0){
  this.java_util_AbstractHashMap$EntrySet_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(31, 258, {59:1}, java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V);
_.contains__Ljava_lang_Object_2Z = function java_util_AbstractHashMap$EntrySet_contains__Ljava_lang_Object_2Z(o){
  return java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this, o);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractHashMap$EntrySet_iterator__Ljava_util_Iterator_2(){
  return new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V(this.java_util_AbstractHashMap$EntrySet_this$01);
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_AbstractHashMap$EntrySet_remove__Ljava_lang_Object_2Z(entry){
  var key;
  if (java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this, entry)) {
    key = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(entry, 22).getKey__Ljava_lang_Object_2();
    java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_AbstractHashMap$EntrySet_this$01, key);
    return true;
  }
  return false;
}
;
_.size__I = function java_util_AbstractHashMap$EntrySet_size__I(){
  return java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I(this.java_util_AbstractHashMap$EntrySet_this$01);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap$EntrySet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'AbstractHashMap/EntrySet', 31);
function java_util_AbstractHashMap$EntrySetIterator_$computeHasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this$static){
  if (this$static.java_util_AbstractHashMap$EntrySetIterator_current.hasNext__Z()) {
    return true;
  }
  if (this$static.java_util_AbstractHashMap$EntrySetIterator_current != this$static.java_util_AbstractHashMap$EntrySetIterator_stringMapEntries) {
    return false;
  }
  this$static.java_util_AbstractHashMap$EntrySetIterator_current = new java_util_InternalHashCodeMap$1_InternalHashCodeMap$1__Ljava_util_InternalHashCodeMap_2V(this$static.java_util_AbstractHashMap$EntrySetIterator_this$01.java_util_AbstractHashMap_hashCodeMap);
  return this$static.java_util_AbstractHashMap$EntrySetIterator_current.hasNext__Z();
}

function java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(this$static){
  var rv;
  java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(this$static.java_util_AbstractHashMap$EntrySetIterator_this$01, this$static);
  javaemul_internal_InternalPreconditions_checkCriticalElement__ZV(this$static.java_util_AbstractHashMap$EntrySetIterator_hasNext);
  this$static.java_util_AbstractHashMap$EntrySetIterator_last = this$static.java_util_AbstractHashMap$EntrySetIterator_current;
  rv = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap$EntrySetIterator_current.next__Ljava_lang_Object_2(), 22);
  this$static.java_util_AbstractHashMap$EntrySetIterator_hasNext = java_util_AbstractHashMap$EntrySetIterator_$computeHasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this$static);
  return rv;
}

function java_util_AbstractHashMap$EntrySetIterator_$remove__Ljava_util_AbstractHashMap$EntrySetIterator_2V(this$static){
  javaemul_internal_InternalPreconditions_checkCriticalState__ZV(!!this$static.java_util_AbstractHashMap$EntrySetIterator_last);
  java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(this$static.java_util_AbstractHashMap$EntrySetIterator_this$01, this$static);
  this$static.java_util_AbstractHashMap$EntrySetIterator_last.remove__V();
  this$static.java_util_AbstractHashMap$EntrySetIterator_last = null;
  this$static.java_util_AbstractHashMap$EntrySetIterator_hasNext = java_util_AbstractHashMap$EntrySetIterator_$computeHasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this$static);
  java_util_ConcurrentModificationDetector_recordLastKnownStructure__Ljava_lang_Object_2Ljava_util_Iterator_2V(this$static.java_util_AbstractHashMap$EntrySetIterator_this$01, this$static);
}

function java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V(this$0){
  this.java_util_AbstractHashMap$EntrySetIterator_this$01 = this$0;
  this.java_util_AbstractHashMap$EntrySetIterator_stringMapEntries = new java_util_InternalStringMap$1_InternalStringMap$1__Ljava_util_InternalStringMap_2V(this.java_util_AbstractHashMap$EntrySetIterator_this$01.java_util_AbstractHashMap_stringMap);
  this.java_util_AbstractHashMap$EntrySetIterator_current = this.java_util_AbstractHashMap$EntrySetIterator_stringMapEntries;
  this.java_util_AbstractHashMap$EntrySetIterator_hasNext = java_util_AbstractHashMap$EntrySetIterator_$computeHasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this);
  this.$modCount = this$0.$modCount;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(32, 1, {}, java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V);
_.next__Ljava_lang_Object_2 = function java_util_AbstractHashMap$EntrySetIterator_next__Ljava_lang_Object_2(){
  return java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(this);
}
;
_.hasNext__Z = function java_util_AbstractHashMap$EntrySetIterator_hasNext__Z(){
  return this.java_util_AbstractHashMap$EntrySetIterator_hasNext;
}
;
_.remove__V = function java_util_AbstractHashMap$EntrySetIterator_remove__V(){
  java_util_AbstractHashMap$EntrySetIterator_$remove__Ljava_util_AbstractHashMap$EntrySetIterator_2V(this);
}
;
_.java_util_AbstractHashMap$EntrySetIterator_hasNext = false;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap$EntrySetIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'AbstractHashMap/EntrySetIterator', 32);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(265, 257, {30:1});
_.add__ILjava_lang_Object_2V = function java_util_AbstractList_add__ILjava_lang_Object_2V(index_0, element){
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V('Add not supported on this list'));
}
;
_.add__Ljava_lang_Object_2Z = function java_util_AbstractList_add__Ljava_lang_Object_2Z(obj){
  this.add__ILjava_lang_Object_2V(this.size__I(), obj);
  return true;
}
;
_.equals__Ljava_lang_Object_2Z = function java_util_AbstractList_equals__Ljava_lang_Object_2Z(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 30)) {
    return false;
  }
  other = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 30);
  if (this.size__I() != other.size__I()) {
    return false;
  }
  iterOther = other.iterator__Ljava_util_Iterator_2();
  for (elem$iterator = this.iterator__Ljava_util_Iterator_2(); elem$iterator.hasNext__Z();) {
    elem = elem$iterator.next__Ljava_lang_Object_2();
    elemOther = iterOther.next__Ljava_lang_Object_2();
    if (!(com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(elem) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(elemOther) || elem != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode__I = function java_util_AbstractList_hashCode__I(){
  return java_util_Collections_hashCode__Ljava_util_List_2I(this);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractList_iterator__Ljava_util_Iterator_2(){
  return new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this);
}
;
_.listIterator__Ljava_util_ListIterator_2 = function java_util_AbstractList_listIterator__Ljava_util_ListIterator_2(){
  return new java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(this, 0);
}
;
_.listIterator__ILjava_util_ListIterator_2 = function java_util_AbstractList_listIterator__ILjava_util_ListIterator_2(from){
  return new java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(this, from);
}
;
_.remove__ILjava_lang_Object_2 = function java_util_AbstractList_remove__ILjava_lang_Object_2(index_0){
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V('Remove not supported on this list'));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'AbstractList', 265);
function java_util_AbstractList$IteratorImpl_$remove__Ljava_util_AbstractList$IteratorImpl_2V(this$static){
  javaemul_internal_InternalPreconditions_checkCriticalState__ZV(this$static.java_util_AbstractList$IteratorImpl_last != -1);
  this$static.java_util_AbstractList$IteratorImpl_this$01.remove__ILjava_lang_Object_2(this$static.java_util_AbstractList$IteratorImpl_last);
  this$static.java_util_AbstractList$IteratorImpl_i = this$static.java_util_AbstractList$IteratorImpl_last;
  this$static.java_util_AbstractList$IteratorImpl_last = -1;
}

function java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$0){
  this.java_util_AbstractList$IteratorImpl_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(84, 1, {}, java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V);
_.hasNext__Z = function java_util_AbstractList$IteratorImpl_hasNext__Z(){
  return this.java_util_AbstractList$IteratorImpl_i < this.java_util_AbstractList$IteratorImpl_this$01.size__I();
}
;
_.next__Ljava_lang_Object_2 = function java_util_AbstractList$IteratorImpl_next__Ljava_lang_Object_2(){
  javaemul_internal_InternalPreconditions_checkCriticalElement__ZV(this.java_util_AbstractList$IteratorImpl_i < this.java_util_AbstractList$IteratorImpl_this$01.size__I());
  return this.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(this.java_util_AbstractList$IteratorImpl_last = this.java_util_AbstractList$IteratorImpl_i++);
}
;
_.remove__V = function java_util_AbstractList$IteratorImpl_remove__V(){
  java_util_AbstractList$IteratorImpl_$remove__Ljava_util_AbstractList$IteratorImpl_2V(this);
}
;
_.java_util_AbstractList$IteratorImpl_i = 0;
_.java_util_AbstractList$IteratorImpl_last = -1;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList$IteratorImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'AbstractList/IteratorImpl', 84);
function java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(this$0, start_0){
  this.java_util_AbstractList$ListIteratorImpl_this$01 = this$0;
  java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V.call(this, this$0);
  javaemul_internal_InternalPreconditions_checkCriticalPositionIndex__IIV(start_0, this$0.size__I());
  this.java_util_AbstractList$IteratorImpl_i = start_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(85, 84, {}, java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV);
_.remove__V = function java_util_AbstractList$ListIteratorImpl_remove__V(){
  java_util_AbstractList$IteratorImpl_$remove__Ljava_util_AbstractList$IteratorImpl_2V(this);
}
;
_.hasPrevious__Z = function java_util_AbstractList$ListIteratorImpl_hasPrevious__Z(){
  return this.java_util_AbstractList$IteratorImpl_i > 0;
}
;
_.previous__Ljava_lang_Object_2 = function java_util_AbstractList$ListIteratorImpl_previous__Ljava_lang_Object_2(){
  javaemul_internal_InternalPreconditions_checkCriticalElement__ZV(this.java_util_AbstractList$IteratorImpl_i > 0);
  return this.java_util_AbstractList$ListIteratorImpl_this$01.get__ILjava_lang_Object_2(this.java_util_AbstractList$IteratorImpl_last = --this.java_util_AbstractList$IteratorImpl_i);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList$ListIteratorImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'AbstractList/ListIteratorImpl', 85);
function java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V(this$0){
  this.java_util_AbstractMap$1_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(145, 258, {59:1}, java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V);
_.contains__Ljava_lang_Object_2Z = function java_util_AbstractMap$1_contains__Ljava_lang_Object_2Z(key){
  return java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$1_this$01, key);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractMap$1_iterator__Ljava_util_Iterator_2(){
  var java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2_outerIter_0;
  return java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2_outerIter_0 = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this.java_util_AbstractMap$1_this$01)).java_util_AbstractHashMap$EntrySet_this$01) , new java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V(java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2_outerIter_0);
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_AbstractMap$1_remove__Ljava_lang_Object_2Z(key){
  if (java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$1_this$01, key)) {
    java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_AbstractMap$1_this$01, key);
    return true;
  }
  return false;
}
;
_.size__I = function java_util_AbstractMap$1_size__I(){
  return java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I(this.java_util_AbstractMap$1_this$01);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'AbstractMap/1', 145);
function java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V(val$outerIter){
  this.java_util_AbstractMap$1$1_val$outerIter2 = val$outerIter;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(82, 1, {}, java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V);
_.hasNext__Z = function java_util_AbstractMap$1$1_hasNext__Z(){
  return this.java_util_AbstractMap$1$1_val$outerIter2.java_util_AbstractHashMap$EntrySetIterator_hasNext;
}
;
_.next__Ljava_lang_Object_2 = function java_util_AbstractMap$1$1_next__Ljava_lang_Object_2(){
  var entry;
  entry = java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(this.java_util_AbstractMap$1$1_val$outerIter2);
  return entry.getKey__Ljava_lang_Object_2();
}
;
_.remove__V = function java_util_AbstractMap$1$1_remove__V(){
  java_util_AbstractHashMap$EntrySetIterator_$remove__Ljava_util_AbstractHashMap$EntrySetIterator_2V(this.java_util_AbstractMap$1$1_val$outerIter2);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$1$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'AbstractMap/1/1', 82);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(143, 1, $intern_70);
_.equals__Ljava_lang_Object_2Z = function java_util_AbstractMap$AbstractEntry_equals__Ljava_lang_Object_2Z(other){
  var entry;
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 22)) {
    return false;
  }
  entry = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 22);
  return java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$AbstractEntry_key, entry.getKey__Ljava_lang_Object_2()) && java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$AbstractEntry_value, entry.getValue__Ljava_lang_Object_2());
}
;
_.getKey__Ljava_lang_Object_2 = function java_util_AbstractMap$AbstractEntry_getKey__Ljava_lang_Object_2(){
  return this.java_util_AbstractMap$AbstractEntry_key;
}
;
_.getValue__Ljava_lang_Object_2 = function java_util_AbstractMap$AbstractEntry_getValue__Ljava_lang_Object_2(){
  return this.java_util_AbstractMap$AbstractEntry_value;
}
;
_.hashCode__I = function java_util_AbstractMap$AbstractEntry_hashCode__I(){
  return java_util_Objects_hashCode__Ljava_lang_Object_2I(this.java_util_AbstractMap$AbstractEntry_key) ^ java_util_Objects_hashCode__Ljava_lang_Object_2I(this.java_util_AbstractMap$AbstractEntry_value);
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractMap$AbstractEntry_setValue__Ljava_lang_Object_2Ljava_lang_Object_2(value_0){
  var oldValue;
  oldValue = this.java_util_AbstractMap$AbstractEntry_value;
  this.java_util_AbstractMap$AbstractEntry_value = value_0;
  return oldValue;
}
;
_.toString__Ljava_lang_String_2 = function java_util_AbstractMap$AbstractEntry_toString__Ljava_lang_String_2(){
  return this.java_util_AbstractMap$AbstractEntry_key + '=' + this.java_util_AbstractMap$AbstractEntry_value;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$AbstractEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'AbstractMap/AbstractEntry', 143);
function java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V(key, value_0){
  this.java_util_AbstractMap$AbstractEntry_key = key;
  this.java_util_AbstractMap$AbstractEntry_value = value_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(144, 143, $intern_70, java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$SimpleEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'AbstractMap/SimpleEntry', 144);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(268, 1, $intern_70);
_.equals__Ljava_lang_Object_2Z = function java_util_AbstractMapEntry_equals__Ljava_lang_Object_2Z(other){
  var entry;
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 22)) {
    return false;
  }
  entry = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 22);
  return java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_util_InternalStringMap$2_val$entry2.value[0], entry.getKey__Ljava_lang_Object_2()) && java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(java_util_InternalStringMap$2_$getValue__Ljava_util_InternalStringMap$2_2Ljava_lang_Object_2(this), entry.getValue__Ljava_lang_Object_2());
}
;
_.hashCode__I = function java_util_AbstractMapEntry_hashCode__I(){
  return java_util_Objects_hashCode__Ljava_lang_Object_2I(this.java_util_InternalStringMap$2_val$entry2.value[0]) ^ java_util_Objects_hashCode__Ljava_lang_Object_2I(java_util_InternalStringMap$2_$getValue__Ljava_util_InternalStringMap$2_2Ljava_lang_Object_2(this));
}
;
_.toString__Ljava_lang_String_2 = function java_util_AbstractMapEntry_toString__Ljava_lang_String_2(){
  return this.java_util_InternalStringMap$2_val$entry2.value[0] + '=' + java_util_InternalStringMap$2_$getValue__Ljava_util_InternalStringMap$2_2Ljava_lang_Object_2(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMapEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'AbstractMapEntry', 268);
function java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static, o){
  this$static.java_util_ArrayList_array[this$static.java_util_ArrayList_array.length] = o;
  return true;
}

function java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this$static, o, index_0){
  for (; index_0 < this$static.java_util_ArrayList_array.length; ++index_0) {
    if (java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(o, this$static.java_util_ArrayList_array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static, index_0){
  var previous;
  previous = (javaemul_internal_InternalPreconditions_checkCriticalElementIndex__IIV(index_0, this$static.java_util_ArrayList_array.length) , this$static.java_util_ArrayList_array[index_0]);
  javaemul_internal_ArrayHelper_removeFrom__Ljava_lang_Object_2IIV(this$static.java_util_ArrayList_array, index_0);
  return previous;
}

function java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static, o){
  var i;
  i = java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  javaemul_internal_InternalPreconditions_checkCriticalElementIndex__IIV(i, this$static.java_util_ArrayList_array.length);
  javaemul_internal_ArrayHelper_removeFrom__Ljava_lang_Object_2IIV(this$static.java_util_ArrayList_array, i);
  return true;
}

function java_util_ArrayList_$toArray__Ljava_util_ArrayList_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(this$static, out){
  var i, size_0;
  size_0 = this$static.java_util_ArrayList_array.length;
  out.length < size_0 && (out = javaemul_internal_ArrayStamper_stampJavaTypeInfo__Ljava_lang_Object_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(new Array(size_0), out));
  for (i = 0; i < size_0; ++i) {
    com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(out, i, this$static.java_util_ArrayList_array[i]);
  }
  out.length > size_0 && com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(out, size_0, null);
  return out;
}

function java_util_ArrayList_ArrayList__V(){
  this.java_util_ArrayList_array = com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit, $intern_9, 1, 0, 5, 1);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(45, 265, {3:1, 30:1}, java_util_ArrayList_ArrayList__V);
_.add__ILjava_lang_Object_2V = function java_util_ArrayList_add__ILjava_lang_Object_2V(index_0, o){
  javaemul_internal_InternalPreconditions_checkCriticalPositionIndex__IIV(index_0, this.java_util_ArrayList_array.length);
  javaemul_internal_ArrayHelper_insertTo__Ljava_lang_Object_2ILjava_lang_Object_2V(this.java_util_ArrayList_array, index_0, o);
}
;
_.add__Ljava_lang_Object_2Z = function java_util_ArrayList_add__Ljava_lang_Object_2Z(o){
  return java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this, o);
}
;
_.contains__Ljava_lang_Object_2Z = function java_util_ArrayList_contains__Ljava_lang_Object_2Z(o){
  return java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this, o, 0) != -1;
}
;
_.get__ILjava_lang_Object_2 = function java_util_ArrayList_get__ILjava_lang_Object_2(index_0){
  return javaemul_internal_InternalPreconditions_checkCriticalElementIndex__IIV(index_0, this.java_util_ArrayList_array.length) , this.java_util_ArrayList_array[index_0];
}
;
_.isEmpty__Z = function java_util_ArrayList_isEmpty__Z(){
  return this.java_util_ArrayList_array.length == 0;
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_ArrayList_iterator__Ljava_util_Iterator_2(){
  return new java_util_ArrayList$1_ArrayList$1__Ljava_util_ArrayList_2V(this);
}
;
_.remove__ILjava_lang_Object_2 = function java_util_ArrayList_remove__ILjava_lang_Object_2(index_0){
  return java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this, index_0);
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_ArrayList_remove__Ljava_lang_Object_2Z(o){
  return java_util_ArrayList_$remove__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this, o);
}
;
_.size__I = function java_util_ArrayList_size__I(){
  return this.java_util_ArrayList_array.length;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1ArrayList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'ArrayList', 45);
function java_util_ArrayList$1_$next__Ljava_util_ArrayList$1_2Ljava_lang_Object_2(this$static){
  javaemul_internal_InternalPreconditions_checkCriticalElement__ZV(this$static.java_util_ArrayList$1_i < this$static.java_util_ArrayList$1_this$01.java_util_ArrayList_array.length);
  this$static.java_util_ArrayList$1_last = this$static.java_util_ArrayList$1_i++;
  return this$static.java_util_ArrayList$1_this$01.java_util_ArrayList_array[this$static.java_util_ArrayList$1_last];
}

function java_util_ArrayList$1_ArrayList$1__Ljava_util_ArrayList_2V(this$0){
  this.java_util_ArrayList$1_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(83, 1, {}, java_util_ArrayList$1_ArrayList$1__Ljava_util_ArrayList_2V);
_.hasNext__Z = function java_util_ArrayList$1_hasNext__Z(){
  return this.java_util_ArrayList$1_i < this.java_util_ArrayList$1_this$01.java_util_ArrayList_array.length;
}
;
_.next__Ljava_lang_Object_2 = function java_util_ArrayList$1_next__Ljava_lang_Object_2(){
  return java_util_ArrayList$1_$next__Ljava_util_ArrayList$1_2Ljava_lang_Object_2(this);
}
;
_.remove__V = function java_util_ArrayList$1_remove__V(){
  javaemul_internal_InternalPreconditions_checkCriticalState__ZV(this.java_util_ArrayList$1_last != -1);
  java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this.java_util_ArrayList$1_this$01, this.java_util_ArrayList$1_i = this.java_util_ArrayList$1_last);
  this.java_util_ArrayList$1_last = -1;
}
;
_.java_util_ArrayList$1_i = 0;
_.java_util_ArrayList$1_last = -1;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1ArrayList$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'ArrayList/1', 83);
function java_util_Collections_$clinit__V(){
  java_util_Collections_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  java_util_Collections_EMPTY_1LIST = new java_util_Collections$EmptyList_Collections$EmptyList__V;
}

function java_util_Collections_hashCode__Ljava_lang_Iterable_2I(collection){
  java_util_Collections_$clinit__V();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    hashCode = hashCode + (e != null?java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function java_util_Collections_hashCode__Ljava_util_List_2I(list){
  java_util_Collections_$clinit__V();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    hashCode = 31 * hashCode + (e != null?java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

var java_util_Collections_EMPTY_1LIST;
function java_util_Collections$EmptyList_Collections$EmptyList__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(195, 265, {3:1, 30:1}, java_util_Collections$EmptyList_Collections$EmptyList__V);
_.contains__Ljava_lang_Object_2Z = function java_util_Collections$EmptyList_contains__Ljava_lang_Object_2Z(object){
  return false;
}
;
_.get__ILjava_lang_Object_2 = function java_util_Collections$EmptyList_get__ILjava_lang_Object_2(location_0){
  javaemul_internal_InternalPreconditions_checkCriticalElementIndex__IIV(location_0, 0);
  return null;
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_Collections$EmptyList_iterator__Ljava_util_Iterator_2(){
  return java_util_Collections_$clinit__V() , java_util_Collections$EmptyListIterator_$clinit__V() , java_util_Collections$EmptyListIterator_INSTANCE;
}
;
_.listIterator__Ljava_util_ListIterator_2 = function java_util_Collections$EmptyList_listIterator__Ljava_util_ListIterator_2(){
  return java_util_Collections_$clinit__V() , java_util_Collections$EmptyListIterator_$clinit__V() , java_util_Collections$EmptyListIterator_INSTANCE;
}
;
_.size__I = function java_util_Collections$EmptyList_size__I(){
  return 0;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$EmptyList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'Collections/EmptyList', 195);
function java_util_Collections$EmptyListIterator_$clinit__V(){
  java_util_Collections$EmptyListIterator_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  java_util_Collections$EmptyListIterator_INSTANCE = new java_util_Collections$EmptyListIterator_Collections$EmptyListIterator__V;
}

function java_util_Collections$EmptyListIterator_Collections$EmptyListIterator__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(196, 1, {}, java_util_Collections$EmptyListIterator_Collections$EmptyListIterator__V);
_.hasNext__Z = function java_util_Collections$EmptyListIterator_hasNext__Z(){
  return false;
}
;
_.hasPrevious__Z = function java_util_Collections$EmptyListIterator_hasPrevious__Z(){
  return false;
}
;
_.next__Ljava_lang_Object_2 = function java_util_Collections$EmptyListIterator_next__Ljava_lang_Object_2(){
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_util_NoSuchElementException_NoSuchElementException__V);
}
;
_.previous__Ljava_lang_Object_2 = function java_util_Collections$EmptyListIterator_previous__Ljava_lang_Object_2(){
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_util_NoSuchElementException_NoSuchElementException__V);
}
;
_.remove__V = function java_util_Collections$EmptyListIterator_remove__V(){
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__V);
}
;
var java_util_Collections$EmptyListIterator_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$EmptyListIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'Collections/EmptyListIterator', 196);
function java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(host, iterator){
  if (iterator.$modCount != host.$modCount) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_util_ConcurrentModificationException_ConcurrentModificationException__V);
  }
}

function java_util_ConcurrentModificationDetector_recordLastKnownStructure__Ljava_lang_Object_2Ljava_util_Iterator_2V(host, iterator){
  iterator.$modCount = host.$modCount;
}

function java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(host){
  var modCount, modCountable;
  modCountable = host;
  modCount = modCountable.$modCount | 0;
  modCountable.$modCount = modCount + 1;
}

function java_util_ConcurrentModificationException_ConcurrentModificationException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(214, 9, $intern_17, java_util_ConcurrentModificationException_ConcurrentModificationException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1ConcurrentModificationException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'ConcurrentModificationException', 214);
function java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Z(value1, value2){
  return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(value1) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(value2) || value1 != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(value1, value2);
}

function java_util_HashMap_HashMap__V(){
  java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(24, 142, {3:1, 24:1, 49:1}, java_util_HashMap_HashMap__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1HashMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'HashMap', 24);
function java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this$static, o){
  var old;
  old = java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_HashSet_map, o, this$static);
  return old == null;
}

function java_util_HashSet_$contains__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this$static, o){
  return java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this$static.java_util_HashSet_map, o);
}

function java_util_HashSet_$remove__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this$static, o){
  return java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_HashSet_map, o) != null;
}

function java_util_HashSet_HashSet__V(){
  this.java_util_HashSet_map = new java_util_HashMap_HashMap__V;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(55, 258, {3:1, 59:1}, java_util_HashSet_HashSet__V);
_.add__Ljava_lang_Object_2Z = function java_util_HashSet_add__Ljava_lang_Object_2Z(o){
  return java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this, o);
}
;
_.contains__Ljava_lang_Object_2Z = function java_util_HashSet_contains__Ljava_lang_Object_2Z(o){
  return java_util_HashSet_$contains__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this, o);
}
;
_.isEmpty__Z = function java_util_HashSet_isEmpty__Z(){
  return java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I(this.java_util_HashSet_map) == 0;
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_HashSet_iterator__Ljava_util_Iterator_2(){
  var outerIter;
  return outerIter = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V((new java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V(this.java_util_HashSet_map)).java_util_AbstractMap$1_this$01)).java_util_AbstractHashMap$EntrySet_this$01) , new java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V(outerIter);
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_HashSet_remove__Ljava_lang_Object_2Z(o){
  return java_util_HashSet_$remove__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this, o);
}
;
_.size__I = function java_util_HashSet_size__I(){
  return java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I(this.java_util_HashSet_map);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1HashSet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'HashSet', 55);
function java_util_InternalHashCodeMap_$findEntryInChain__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2_3Ljava_util_Map$Entry_2Ljava_util_Map$Entry_2(key, chain){
  var entry, entry$index, entry$max;
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if (java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entry.getKey__Ljava_lang_Object_2())) {
      return entry;
    }
  }
  return null;
}

function java_util_InternalHashCodeMap_$getChainOrEmpty__Ljava_util_InternalHashCodeMap_2I_3Ljava_util_Map$Entry_2(this$static, hashCode){
  var chain;
  chain = this$static.java_util_InternalHashCodeMap_backingMap.get(hashCode);
  return chain == null?new Array:chain;
}

function java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static, key){
  var hashCode;
  return java_util_InternalHashCodeMap_$findEntryInChain__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2_3Ljava_util_Map$Entry_2Ljava_util_Map$Entry_2(key, java_util_InternalHashCodeMap_$getChainOrEmpty__Ljava_util_InternalHashCodeMap_2I_3Ljava_util_Map$Entry_2(this$static, key == null?0:(hashCode = java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(key) , hashCode | 0)));
}

function java_util_InternalHashCodeMap_$put__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  var chain, chain0, entry, hashCode, hashCode0;
  hashCode0 = key == null?0:(hashCode = java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(key) , hashCode | 0);
  chain0 = (chain = this$static.java_util_InternalHashCodeMap_backingMap.get(hashCode0) , chain == null?new Array:chain);
  if (chain0.length == 0) {
    this$static.java_util_InternalHashCodeMap_backingMap.set(hashCode0, chain0);
  }
   else {
    entry = java_util_InternalHashCodeMap_$findEntryInChain__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2_3Ljava_util_Map$Entry_2Ljava_util_Map$Entry_2(key, chain0);
    if (entry) {
      return entry.setValue__Ljava_lang_Object_2Ljava_lang_Object_2(value_0);
    }
  }
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(chain0, chain0.length, new java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V(key, value_0));
  ++this$static.java_util_InternalHashCodeMap_size;
  java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static.java_util_InternalHashCodeMap_host);
  return null;
}

function java_util_InternalHashCodeMap_$remove__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key){
  var chain, chain0, entry, hashCode, hashCode0, i;
  hashCode0 = key == null?0:(hashCode = java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(key) , hashCode | 0);
  chain0 = (chain = this$static.java_util_InternalHashCodeMap_backingMap.get(hashCode0) , chain == null?new Array:chain);
  for (i = 0; i < chain0.length; i++) {
    entry = chain0[i];
    if (java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entry.getKey__Ljava_lang_Object_2())) {
      if (chain0.length == 1) {
        chain0.length = 0;
        java_util_InternalJsMap_$delete__Ljava_util_InternalJsMap_2IV(this$static.java_util_InternalHashCodeMap_backingMap, hashCode0);
      }
       else {
        chain0.splice(i, 1);
      }
      --this$static.java_util_InternalHashCodeMap_size;
      java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static.java_util_InternalHashCodeMap_host);
      return entry.getValue__Ljava_lang_Object_2();
    }
  }
  return null;
}

function java_util_InternalHashCodeMap_InternalHashCodeMap__Ljava_util_AbstractHashMap_2V(host){
  this.java_util_InternalHashCodeMap_backingMap = java_util_InternalJsMapFactory_newJsMap__Ljava_util_InternalJsMap_2();
  this.java_util_InternalHashCodeMap_host = host;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(199, 1, {}, java_util_InternalHashCodeMap_InternalHashCodeMap__Ljava_util_AbstractHashMap_2V);
_.iterator__Ljava_util_Iterator_2 = function java_util_InternalHashCodeMap_iterator__Ljava_util_Iterator_2(){
  return new java_util_InternalHashCodeMap$1_InternalHashCodeMap$1__Ljava_util_InternalHashCodeMap_2V(this);
}
;
_.java_util_InternalHashCodeMap_size = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalHashCodeMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'InternalHashCodeMap', 199);
function java_util_InternalHashCodeMap$1_InternalHashCodeMap$1__Ljava_util_InternalHashCodeMap_2V(this$0){
  this.java_util_InternalHashCodeMap$1_this$01 = this$0;
  this.java_util_InternalHashCodeMap$1_chains = this.java_util_InternalHashCodeMap$1_this$01.java_util_InternalHashCodeMap_backingMap.entries();
  this.java_util_InternalHashCodeMap$1_chain = new Array;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(88, 1, {}, java_util_InternalHashCodeMap$1_InternalHashCodeMap$1__Ljava_util_InternalHashCodeMap_2V);
_.next__Ljava_lang_Object_2 = function java_util_InternalHashCodeMap$1_next__Ljava_lang_Object_2(){
  return this.java_util_InternalHashCodeMap$1_lastEntry = this.java_util_InternalHashCodeMap$1_chain[this.java_util_InternalHashCodeMap$1_itemIndex++] , this.java_util_InternalHashCodeMap$1_lastEntry;
}
;
_.hasNext__Z = function java_util_InternalHashCodeMap$1_hasNext__Z(){
  var current;
  if (this.java_util_InternalHashCodeMap$1_itemIndex < this.java_util_InternalHashCodeMap$1_chain.length) {
    return true;
  }
  current = this.java_util_InternalHashCodeMap$1_chains.next();
  if (!current.done) {
    this.java_util_InternalHashCodeMap$1_chain = current.value[1];
    this.java_util_InternalHashCodeMap$1_itemIndex = 0;
    return true;
  }
  return false;
}
;
_.remove__V = function java_util_InternalHashCodeMap$1_remove__V(){
  java_util_InternalHashCodeMap_$remove__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_InternalHashCodeMap$1_this$01, this.java_util_InternalHashCodeMap$1_lastEntry.getKey__Ljava_lang_Object_2());
  this.java_util_InternalHashCodeMap$1_itemIndex != 0 && --this.java_util_InternalHashCodeMap$1_itemIndex;
}
;
_.java_util_InternalHashCodeMap$1_itemIndex = 0;
_.java_util_InternalHashCodeMap$1_lastEntry = null;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalHashCodeMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'InternalHashCodeMap/1', 88);
function java_util_InternalJsMap_$delete__Ljava_util_InternalJsMap_2IV(this$static, key){
  var fn;
  fn = this$static[$intern_71];
  fn.call(this$static, key);
}

function java_util_InternalJsMap_$delete__Ljava_util_InternalJsMap_2Ljava_lang_String_2V(this$static, key){
  var fn;
  fn = this$static[$intern_71];
  fn.call(this$static, key);
}

function java_util_InternalJsMapFactory_$clinit__V(){
  java_util_InternalJsMapFactory_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  java_util_InternalJsMapFactory_jsMapCtor = java_util_InternalJsMapFactory_getJsMapConstructor__Lcom_google_gwt_core_client_JavaScriptObject_2();
}

function java_util_InternalJsMapFactory_canHandleObjectCreateAndProto__Z(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

function java_util_InternalJsMapFactory_getJsMapConstructor__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === $intern_1 && Map.prototype.entries && isCorrectIterationProtocol()) {
    return Map;
  }
   else {
    return java_util_InternalJsMapFactory_getJsMapPolyFill__Lcom_google_gwt_core_client_JavaScriptObject_2();
  }
}

function java_util_InternalJsMapFactory_getJsMapPolyFill__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype[$intern_71] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!java_util_InternalJsMapFactory_canHandleObjectCreateAndProto__Z()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype[$intern_71] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        key.charCodeAt(0) == 58 && result.push(key.substring(1));
      }
      return result;
    }
    ;
  }
  return Stringmap;
}

function java_util_InternalJsMapFactory_newJsMap__Ljava_util_InternalJsMap_2(){
  java_util_InternalJsMapFactory_$clinit__V();
  return new java_util_InternalJsMapFactory_jsMapCtor;
}

var java_util_InternalJsMapFactory_jsMapCtor;
function java_util_InternalStringMap_$contains__Ljava_util_InternalStringMap_2Ljava_lang_String_2Z(this$static, key){
  return !(this$static.java_util_InternalStringMap_backingMap.get(key) === undefined);
}

function java_util_InternalStringMap_$get__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  return this$static.java_util_InternalStringMap_backingMap.get(key);
}

function java_util_InternalStringMap_$put__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.java_util_InternalStringMap_backingMap.get(key);
  this$static.java_util_InternalStringMap_backingMap.set(key, value_0 === undefined?null:value_0);
  if (oldValue === undefined) {
    ++this$static.java_util_InternalStringMap_size;
    java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static.java_util_InternalStringMap_host);
  }
   else {
    ++this$static.java_util_InternalStringMap_valueMod;
  }
  return oldValue;
}

function java_util_InternalStringMap_$remove__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  var value_0;
  value_0 = this$static.java_util_InternalStringMap_backingMap.get(key);
  if (value_0 === undefined) {
    ++this$static.java_util_InternalStringMap_valueMod;
  }
   else {
    java_util_InternalJsMap_$delete__Ljava_util_InternalJsMap_2Ljava_lang_String_2V(this$static.java_util_InternalStringMap_backingMap, key);
    --this$static.java_util_InternalStringMap_size;
    java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static.java_util_InternalStringMap_host);
  }
  return value_0;
}

function java_util_InternalStringMap_InternalStringMap__Ljava_util_AbstractHashMap_2V(host){
  this.java_util_InternalStringMap_backingMap = java_util_InternalJsMapFactory_newJsMap__Ljava_util_InternalJsMap_2();
  this.java_util_InternalStringMap_host = host;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(197, 1, {}, java_util_InternalStringMap_InternalStringMap__Ljava_util_AbstractHashMap_2V);
_.iterator__Ljava_util_Iterator_2 = function java_util_InternalStringMap_iterator__Ljava_util_Iterator_2(){
  return new java_util_InternalStringMap$1_InternalStringMap$1__Ljava_util_InternalStringMap_2V(this);
}
;
_.java_util_InternalStringMap_size = 0;
_.java_util_InternalStringMap_valueMod = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalStringMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'InternalStringMap', 197);
function java_util_InternalStringMap$1_InternalStringMap$1__Ljava_util_InternalStringMap_2V(this$0){
  this.java_util_InternalStringMap$1_this$01 = this$0;
  this.java_util_InternalStringMap$1_entries = this.java_util_InternalStringMap$1_this$01.java_util_InternalStringMap_backingMap.entries();
  this.java_util_InternalStringMap$1_current = this.java_util_InternalStringMap$1_entries.next();
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(87, 1, {}, java_util_InternalStringMap$1_InternalStringMap$1__Ljava_util_InternalStringMap_2V);
_.next__Ljava_lang_Object_2 = function java_util_InternalStringMap$1_next__Ljava_lang_Object_2(){
  return this.java_util_InternalStringMap$1_last = this.java_util_InternalStringMap$1_current , this.java_util_InternalStringMap$1_current = this.java_util_InternalStringMap$1_entries.next() , new java_util_InternalStringMap$2_InternalStringMap$2__Ljava_util_InternalStringMap_2V(this.java_util_InternalStringMap$1_this$01, this.java_util_InternalStringMap$1_last, this.java_util_InternalStringMap$1_this$01.java_util_InternalStringMap_valueMod);
}
;
_.hasNext__Z = function java_util_InternalStringMap$1_hasNext__Z(){
  return !this.java_util_InternalStringMap$1_current.done;
}
;
_.remove__V = function java_util_InternalStringMap$1_remove__V(){
  java_util_InternalStringMap_$remove__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this.java_util_InternalStringMap$1_this$01, this.java_util_InternalStringMap$1_last.value[0]);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalStringMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'InternalStringMap/1', 87);
function java_util_InternalStringMap$2_$getValue__Ljava_util_InternalStringMap$2_2Ljava_lang_Object_2(this$static){
  if (this$static.java_util_InternalStringMap$2_this$01.java_util_InternalStringMap_valueMod != this$static.java_util_InternalStringMap$2_val$lastValueMod3) {
    return java_util_InternalStringMap_$get__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.java_util_InternalStringMap$2_this$01, this$static.java_util_InternalStringMap$2_val$entry2.value[0]);
  }
  return this$static.java_util_InternalStringMap$2_val$entry2.value[1];
}

function java_util_InternalStringMap$2_InternalStringMap$2__Ljava_util_InternalStringMap_2V(this$0, val$entry, val$lastValueMod){
  this.java_util_InternalStringMap$2_this$01 = this$0;
  this.java_util_InternalStringMap$2_val$entry2 = val$entry;
  this.java_util_InternalStringMap$2_val$lastValueMod3 = val$lastValueMod;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(198, 268, $intern_70, java_util_InternalStringMap$2_InternalStringMap$2__Ljava_util_InternalStringMap_2V);
_.getKey__Ljava_lang_Object_2 = function java_util_InternalStringMap$2_getKey__Ljava_lang_Object_2(){
  return this.java_util_InternalStringMap$2_val$entry2.value[0];
}
;
_.getValue__Ljava_lang_Object_2 = function java_util_InternalStringMap$2_getValue__Ljava_lang_Object_2(){
  return java_util_InternalStringMap$2_$getValue__Ljava_util_InternalStringMap$2_2Ljava_lang_Object_2(this);
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_InternalStringMap$2_setValue__Ljava_lang_Object_2Ljava_lang_Object_2(object){
  return java_util_InternalStringMap_$put__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_InternalStringMap$2_this$01, this.java_util_InternalStringMap$2_val$entry2.value[0], object);
}
;
_.java_util_InternalStringMap$2_val$lastValueMod3 = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalStringMap$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'InternalStringMap/2', 198);
function java_util_NoSuchElementException_NoSuchElementException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(37, 9, $intern_17, java_util_NoSuchElementException_NoSuchElementException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1NoSuchElementException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'NoSuchElementException', 37);
function java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(a, b){
  return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(a) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(b) || a != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(a, b);
}

function java_util_Objects_hashCode__Ljava_lang_Object_2I(o){
  return o != null?java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(o):0;
}

function java_util_StringJoiner_$add__Ljava_util_StringJoiner_2Ljava_lang_CharSequence_2Ljava_util_StringJoiner_2(this$static, newElement){
  !this$static.java_util_StringJoiner_builder?(this$static.java_util_StringJoiner_builder = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V(this$static.java_util_StringJoiner_prefix)):java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(this$static.java_util_StringJoiner_builder, this$static.java_util_StringJoiner_delimiter);
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2Ljava_lang_StringBuilder_2(this$static.java_util_StringJoiner_builder, newElement);
  return this$static;
}

function java_util_StringJoiner_StringJoiner__Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2V(prefix, suffix){
  this.java_util_StringJoiner_delimiter = ', ';
  this.java_util_StringJoiner_prefix = prefix;
  this.java_util_StringJoiner_suffix = suffix;
  this.java_util_StringJoiner_emptyValue = this.java_util_StringJoiner_prefix + ('' + this.java_util_StringJoiner_suffix);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(76, 1, {}, java_util_StringJoiner_StringJoiner__Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2V);
_.toString__Ljava_lang_String_2 = function java_util_StringJoiner_toString__Ljava_lang_String_2(){
  return !this.java_util_StringJoiner_builder?this.java_util_StringJoiner_emptyValue:this.java_util_StringJoiner_suffix.length == 0?this.java_util_StringJoiner_builder.java_lang_AbstractStringBuilder_string:this.java_util_StringJoiner_builder.java_lang_AbstractStringBuilder_string + ('' + this.java_util_StringJoiner_suffix);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1StringJoiner_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_69, 'StringJoiner', 76);
function java_util_logging_Level_$clinit__V(){
  java_util_logging_Level_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  java_util_logging_Level_FINE = new java_util_logging_Level$LevelFine_Level$LevelFine__V;
  java_util_logging_Level_FINEST = new java_util_logging_Level$LevelFinest_Level$LevelFinest__V;
  java_util_logging_Level_INFO = new java_util_logging_Level$LevelInfo_Level$LevelInfo__V;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(266, 1, $intern_9);
_.getName__Ljava_lang_String_2 = function java_util_logging_Level_getName__Ljava_lang_String_2(){
  return 'DUMMY';
}
;
_.intValue__I = function java_util_logging_Level_intValue__I(){
  return -1;
}
;
_.toString__Ljava_lang_String_2 = function java_util_logging_Level_toString__Ljava_lang_String_2(){
  return this.getName__Ljava_lang_String_2();
}
;
var java_util_logging_Level_FINE, java_util_logging_Level_FINEST, java_util_logging_Level_INFO;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Level_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_72, 'Level', 266);
function java_util_logging_Level$LevelFine_Level$LevelFine__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(188, 266, $intern_9, java_util_logging_Level$LevelFine_Level$LevelFine__V);
_.getName__Ljava_lang_String_2 = function java_util_logging_Level$LevelFine_getName__Ljava_lang_String_2(){
  return 'FINE';
}
;
_.intValue__I = function java_util_logging_Level$LevelFine_intValue__I(){
  return 500;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Level$LevelFine_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_72, 'Level/LevelFine', 188);
function java_util_logging_Level$LevelFinest_Level$LevelFinest__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(189, 266, $intern_9, java_util_logging_Level$LevelFinest_Level$LevelFinest__V);
_.getName__Ljava_lang_String_2 = function java_util_logging_Level$LevelFinest_getName__Ljava_lang_String_2(){
  return 'FINEST';
}
;
_.intValue__I = function java_util_logging_Level$LevelFinest_intValue__I(){
  return 300;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Level$LevelFinest_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_72, 'Level/LevelFinest', 189);
function java_util_logging_Level$LevelInfo_Level$LevelInfo__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(190, 266, $intern_9, java_util_logging_Level$LevelInfo_Level$LevelInfo__V);
_.getName__Ljava_lang_String_2 = function java_util_logging_Level$LevelInfo_getName__Ljava_lang_String_2(){
  return 'INFO';
}
;
_.intValue__I = function java_util_logging_Level$LevelInfo_intValue__I(){
  return 800;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Level$LevelInfo_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_72, 'Level/LevelInfo', 190);
function java_util_logging_LogManager_$addLoggerImpl__Ljava_util_logging_LogManager_2Ljava_util_logging_Logger_2V(this$static, logger){
  java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_logging_LogManager_loggerMap, (java_util_logging_Logger_$clinit__V() , java_util_logging_Logger_LOGGING_1OFF)?null:logger.java_util_logging_Logger_name, logger);
}

function java_util_logging_LogManager_$ensureLogger__Ljava_util_logging_LogManager_2Ljava_lang_String_2Ljava_util_logging_Logger_2(this$static, name_0){
  var logger, newLogger, java_util_logging_LogManager_$addLoggerAndEnsureParents__Ljava_util_logging_LogManager_2Ljava_util_logging_Logger_2V_name_0, java_util_logging_LogManager_$addLoggerAndEnsureParents__Ljava_util_logging_LogManager_2Ljava_util_logging_Logger_2V_parentName_0;
  logger = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.java_util_logging_LogManager_loggerMap, name_0), 41);
  if (!logger) {
    newLogger = new java_util_logging_Logger_Logger__Ljava_lang_String_2Ljava_lang_String_2V(name_0);
    java_util_logging_LogManager_$addLoggerAndEnsureParents__Ljava_util_logging_LogManager_2Ljava_util_logging_Logger_2V_name_0 = (java_util_logging_Logger_$clinit__V() , java_util_logging_Logger_LOGGING_1OFF)?null:newLogger.java_util_logging_Logger_name;
    java_util_logging_LogManager_$addLoggerAndEnsureParents__Ljava_util_logging_LogManager_2Ljava_util_logging_Logger_2V_parentName_0 = java_lang_String_$substring__Ljava_lang_String_2IILjava_lang_String_2(java_util_logging_LogManager_$addLoggerAndEnsureParents__Ljava_util_logging_LogManager_2Ljava_util_logging_Logger_2V_name_0, $wnd.Math.max(0, java_lang_String_$lastIndexOf__Ljava_lang_String_2Ljava_lang_String_2I(java_util_logging_LogManager_$addLoggerAndEnsureParents__Ljava_util_logging_LogManager_2Ljava_util_logging_Logger_2V_name_0, java_lang_String_fromCodePoint__ILjava_lang_String_2(46))));
    java_util_logging_Logger_$setParent__Ljava_util_logging_Logger_2Ljava_util_logging_Logger_2V(newLogger, java_util_logging_LogManager_$ensureLogger__Ljava_util_logging_LogManager_2Ljava_lang_String_2Ljava_util_logging_Logger_2(this$static, java_util_logging_LogManager_$addLoggerAndEnsureParents__Ljava_util_logging_LogManager_2Ljava_util_logging_Logger_2V_parentName_0));
    java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_logging_LogManager_loggerMap, java_util_logging_Logger_LOGGING_1OFF?null:newLogger.java_util_logging_Logger_name, newLogger);
    return newLogger;
  }
  return logger;
}

function java_util_logging_LogManager_LogManager__V(){
  this.java_util_logging_LogManager_loggerMap = new java_util_HashMap_HashMap__V;
}

function java_util_logging_LogManager_getLogManager__Ljava_util_logging_LogManager_2(){
  var rootLogger;
  if (!java_util_logging_LogManager_singleton) {
    java_util_logging_LogManager_singleton = new java_util_logging_LogManager_LogManager__V;
    rootLogger = new java_util_logging_Logger_Logger__Ljava_lang_String_2Ljava_lang_String_2V('');
    java_util_logging_Logger_$setLevel__Ljava_util_logging_Logger_2Ljava_util_logging_Level_2V(rootLogger, (java_util_logging_Level_$clinit__V() , java_util_logging_Level_INFO));
    java_util_logging_LogManager_$addLoggerImpl__Ljava_util_logging_LogManager_2Ljava_util_logging_Logger_2V(java_util_logging_LogManager_singleton, rootLogger);
  }
  return java_util_logging_LogManager_singleton;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(140, 1, {}, java_util_logging_LogManager_LogManager__V);
var java_util_logging_LogManager_singleton;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1LogManager_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_72, 'LogManager', 140);
function java_util_logging_LogRecord_LogRecord__Ljava_util_logging_Level_2Ljava_lang_String_2V(){
  com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLib$LongEmul_2(Date.now());
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(210, 1, $intern_9, java_util_logging_LogRecord_LogRecord__Ljava_util_logging_Level_2Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1LogRecord_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_72, 'LogRecord', 210);
function java_util_logging_Logger_$clinit__V(){
  java_util_logging_Logger_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  java_util_logging_Logger_LOGGING_1OFF = true;
  java_util_logging_Logger_ALL_1ENABLED = false;
  java_util_logging_Logger_INFO_1ENABLED = false;
  java_util_logging_Logger_WARNING_1ENABLED = false;
  java_util_logging_Logger_SEVERE_1ENABLED = false;
}

function java_util_logging_Logger_$actuallyLog__Ljava_util_logging_Logger_2Ljava_util_logging_LogRecord_2V(this$static){
  var handler$array, handler$array0, handler$index, handler$index0, handler$max, handler$max0, logger;
  for (handler$array0 = java_util_logging_Logger_$getHandlers__Ljava_util_logging_Logger_2_3Ljava_util_logging_Handler_2(this$static) , handler$index0 = 0 , handler$max0 = handler$array0.length; handler$index0 < handler$max0; ++handler$index0) {
    null.$_nullMethod();
  }
  logger = !java_util_logging_Logger_LOGGING_1OFF && this$static.java_util_logging_Logger_useParentHandlers?java_util_logging_Logger_LOGGING_1OFF?null:this$static.java_util_logging_Logger_parent:null;
  while (logger) {
    for (handler$array = java_util_logging_Logger_$getHandlers__Ljava_util_logging_Logger_2_3Ljava_util_logging_Handler_2(logger) , handler$index = 0 , handler$max = handler$array.length; handler$index < handler$max; ++handler$index) {
      null.$_nullMethod();
    }
    logger = !java_util_logging_Logger_LOGGING_1OFF && logger.java_util_logging_Logger_useParentHandlers?java_util_logging_Logger_LOGGING_1OFF?null:logger.java_util_logging_Logger_parent:null;
  }
}

function java_util_logging_Logger_$fine__Ljava_util_logging_Logger_2Ljava_lang_String_2V(this$static){
  if (!java_util_logging_Logger_ALL_1ENABLED) {
    return;
  }
  java_util_logging_Logger_$log__Ljava_util_logging_Logger_2Ljava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2V(this$static, (java_util_logging_Level_$clinit__V() , java_util_logging_Level_FINE));
}

function java_util_logging_Logger_$finest__Ljava_util_logging_Logger_2Ljava_lang_String_2V(this$static){
  if (!java_util_logging_Logger_ALL_1ENABLED) {
    return;
  }
  java_util_logging_Logger_$log__Ljava_util_logging_Logger_2Ljava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2V(this$static, (java_util_logging_Level_$clinit__V() , java_util_logging_Level_FINEST));
}

function java_util_logging_Logger_$getEffectiveLevel__Ljava_util_logging_Logger_2Ljava_util_logging_Level_2(this$static){
  var effectiveLevel, logger;
  if (this$static.java_util_logging_Logger_level) {
    return this$static.java_util_logging_Logger_level;
  }
  logger = java_util_logging_Logger_LOGGING_1OFF?null:this$static.java_util_logging_Logger_parent;
  while (logger) {
    effectiveLevel = java_util_logging_Logger_LOGGING_1OFF?null:logger.java_util_logging_Logger_level;
    if (effectiveLevel) {
      return effectiveLevel;
    }
    logger = java_util_logging_Logger_LOGGING_1OFF?null:logger.java_util_logging_Logger_parent;
  }
  return java_util_logging_Level_$clinit__V() , java_util_logging_Level_INFO;
}

function java_util_logging_Logger_$getHandlers__Ljava_util_logging_Logger_2_3Ljava_util_logging_Handler_2(this$static){
  if (java_util_logging_Logger_LOGGING_1OFF) {
    return com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Handler_12_1classLit, $intern_73, 286, 0, 0, 1);
  }
  return com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$toArray__Ljava_util_ArrayList_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(this$static.java_util_logging_Logger_handlers, com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Handler_12_1classLit, $intern_73, 286, this$static.java_util_logging_Logger_handlers.java_util_ArrayList_array.length, 0, 1)), 234);
}

function java_util_logging_Logger_$log__Ljava_util_logging_Logger_2Ljava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2V(this$static, level){
  (java_util_logging_Logger_ALL_1ENABLED?level.intValue__I() >= (java_util_logging_Logger_$getEffectiveLevel__Ljava_util_logging_Logger_2Ljava_util_logging_Level_2(this$static) , 800):java_util_logging_Logger_INFO_1ENABLED?level.intValue__I() >= (java_util_logging_Level_$clinit__V() , 800):java_util_logging_Logger_WARNING_1ENABLED?level.intValue__I() >= (java_util_logging_Level_$clinit__V() , 900):java_util_logging_Logger_SEVERE_1ENABLED && level.intValue__I() >= (java_util_logging_Level_$clinit__V() , 1000)) && (new java_util_logging_LogRecord_LogRecord__Ljava_util_logging_Level_2Ljava_lang_String_2V , java_util_logging_Logger_$actuallyLog__Ljava_util_logging_Logger_2Ljava_util_logging_LogRecord_2V(this$static));
}

function java_util_logging_Logger_$setLevel__Ljava_util_logging_Logger_2Ljava_util_logging_Level_2V(this$static, newLevel){
  if (java_util_logging_Logger_LOGGING_1OFF) {
    return;
  }
  this$static.java_util_logging_Logger_level = newLevel;
}

function java_util_logging_Logger_$setParent__Ljava_util_logging_Logger_2Ljava_util_logging_Logger_2V(this$static, newParent){
  if (java_util_logging_Logger_LOGGING_1OFF) {
    return;
  }
  !!newParent && (this$static.java_util_logging_Logger_parent = newParent);
}

function java_util_logging_Logger_Logger__Ljava_lang_String_2Ljava_lang_String_2V(name_0){
  java_util_logging_Logger_$clinit__V();
  if (java_util_logging_Logger_LOGGING_1OFF) {
    return;
  }
  this.java_util_logging_Logger_name = name_0;
  this.java_util_logging_Logger_useParentHandlers = true;
  this.java_util_logging_Logger_handlers = new java_util_ArrayList_ArrayList__V;
}

function java_util_logging_Logger_getLogger__Ljava_lang_String_2Ljava_util_logging_Logger_2(name_0){
  java_util_logging_Logger_$clinit__V();
  if (java_util_logging_Logger_LOGGING_1OFF) {
    return new java_util_logging_Logger_Logger__Ljava_lang_String_2Ljava_lang_String_2V(null);
  }
  return java_util_logging_LogManager_$ensureLogger__Ljava_util_logging_LogManager_2Ljava_lang_String_2Ljava_util_logging_Logger_2(java_util_logging_LogManager_getLogManager__Ljava_util_logging_LogManager_2(), name_0);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(41, 1, {41:1}, java_util_logging_Logger_Logger__Ljava_lang_String_2Ljava_lang_String_2V);
_.java_util_logging_Logger_useParentHandlers = false;
var java_util_logging_Logger_ALL_1ENABLED = false, java_util_logging_Logger_INFO_1ENABLED = false, java_util_logging_Logger_LOGGING_1OFF = false, java_util_logging_Logger_SEVERE_1ENABLED = false, java_util_logging_Logger_WARNING_1ENABLED = false;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Logger_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_72, 'Logger', 41);
function javaemul_internal_ArrayHelper_insertTo__Ljava_lang_Object_2ILjava_lang_Object_2V(array, index_0, value_0){
  array.splice(index_0, 0, value_0);
}

function javaemul_internal_ArrayHelper_removeFrom__Ljava_lang_Object_2IIV(array, index_0){
  array.splice(index_0, 1);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(305, 1, {});
function javaemul_internal_ArrayStamper_stampJavaTypeInfo__Ljava_lang_Object_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(array, referenceType){
  return com_google_gwt_lang_Array_getElementTypeCategory__Ljava_lang_Object_2I(referenceType) != 10 && com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(referenceType), referenceType.java_lang_Object_castableTypeMap, referenceType.__elementTypeId$, com_google_gwt_lang_Array_getElementTypeCategory__Ljava_lang_Object_2I(referenceType), array) , array;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(269, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Ljavaemul_1internal_1ConsoleLogger_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('javaemul.internal', 'ConsoleLogger', 269);
function javaemul_internal_InternalPreconditions_checkCriticalArgument__ZLjava_lang_Object_2V(expression, errorMessage){
  if (!expression) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V(errorMessage));
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalArrayType__ZV(expression){
  if (!expression) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_ArrayStoreException_ArrayStoreException__V);
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalElement__ZV(expression){
  if (!expression) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_util_NoSuchElementException_NoSuchElementException__V);
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalElementIndex__IIV(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V($intern_74 + index_0 + $intern_75 + size_0));
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(reference){
  if (reference == null) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__V);
  }
  return reference;
}

function javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2V(reference){
  if (!reference) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V('Cannot suppress a null exception.'));
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalPositionIndex__IIV(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V($intern_74 + index_0 + $intern_75 + size_0));
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalState__ZV(expression){
  if (!expression) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__V);
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalState__ZLjava_lang_Object_2V(expression){
  if (!expression) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V("Can't overwrite cause"));
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalStringElementIndex__IIV(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_StringIndexOutOfBoundsException_StringIndexOutOfBoundsException__Ljava_lang_String_2V($intern_74 + index_0 + $intern_75 + size_0));
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalType__ZLjava_lang_String_2V(expression){
  if (!expression) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_ClassCastException_ClassCastException__Ljava_lang_String_2V);
  }
}

function javaemul_internal_JsUtils_setPropertySafe__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, key, value_0){
  try {
    map_0[key] = value_0;
  }
   catch (ignored) {
  }
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(302, 1, {});
function javaemul_internal_ObjectHashing_getHashCode__Ljava_lang_Object_2I(o){
  return o.$H || (o.$H = ++javaemul_internal_ObjectHashing_nextHashId);
}

var javaemul_internal_ObjectHashing_nextHashId = 0;
function javaemul_internal_StringHashCache_$clinit__V(){
  javaemul_internal_StringHashCache_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  javaemul_internal_StringHashCache_back = new java_lang_Object_Object__V;
  javaemul_internal_StringHashCache_front = new java_lang_Object_Object__V;
}

function javaemul_internal_StringHashCache_compute__Ljava_lang_String_2I(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = (javaemul_internal_InternalPreconditions_checkCriticalStringElementIndex__IIV(i + 3, str.length) , str.charCodeAt(i + 3) + (javaemul_internal_InternalPreconditions_checkCriticalStringElementIndex__IIV(i + 2, str.length) , 31 * (str.charCodeAt(i + 2) + (javaemul_internal_InternalPreconditions_checkCriticalStringElementIndex__IIV(i + 1, str.length) , 31 * (str.charCodeAt(i + 1) + (javaemul_internal_InternalPreconditions_checkCriticalStringElementIndex__IIV(i, str.length) , 31 * (str.charCodeAt(i) + 31 * hashCode)))))));
    hashCode = hashCode | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + java_lang_String_$charAt__Ljava_lang_String_2IC(str, i++);
  }
  hashCode = hashCode | 0;
  return hashCode;
}

function javaemul_internal_StringHashCache_getHashCode__Ljava_lang_String_2I(str){
  javaemul_internal_StringHashCache_$clinit__V();
  var hashCode, key, result;
  key = ':' + str;
  result = javaemul_internal_StringHashCache_front[key];
  if (result != null) {
    return com_google_gwt_lang_Cast_round_1int__DI((javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(result) , result));
  }
  result = javaemul_internal_StringHashCache_back[key];
  hashCode = result == null?javaemul_internal_StringHashCache_compute__Ljava_lang_String_2I(str):com_google_gwt_lang_Cast_round_1int__DI((javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(result) , result));
  javaemul_internal_StringHashCache_increment__V();
  javaemul_internal_StringHashCache_front[key] = hashCode;
  return hashCode;
}

function javaemul_internal_StringHashCache_increment__V(){
  if (javaemul_internal_StringHashCache_count == 256) {
    javaemul_internal_StringHashCache_back = javaemul_internal_StringHashCache_front;
    javaemul_internal_StringHashCache_front = new java_lang_Object_Object__V;
    javaemul_internal_StringHashCache_count = 0;
  }
  ++javaemul_internal_StringHashCache_count;
}

var javaemul_internal_StringHashCache_back, javaemul_internal_StringHashCache_count = 0, javaemul_internal_StringHashCache_front;
function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_String_2(value_0){
  var str;
  if (!value_0 || !!value_0.isNull__Lcom_google_gwt_json_client_JSONNull_2()) {
    return null;
  }
  str = value_0.isString__Lcom_google_gwt_json_client_JSONString_2();
  if (!str) {
    if (!!value_0.isBoolean__Lcom_google_gwt_json_client_JSONBoolean_2() || !!value_0.isNumber__Lcom_google_gwt_json_client_JSONNumber_2()) {
      return value_0.toString__Ljava_lang_String_2();
    }
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new org_fusesource_restygwt_client_JsonEncoderDecoder$DecodingException_JsonEncoderDecoder$DecodingException__Ljava_lang_String_2V('Expected a json string, but was given: ' + value_0));
  }
  return str.com_google_gwt_json_client_JSONString_value;
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$encode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2(value_0){
  return value_0 == null?(org_fusesource_restygwt_client_Defaults_$clinit__V() , com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_instance):new com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V(value_0);
}

function org_fusesource_restygwt_client_Defaults_$clinit__V(){
  var com_google_gwt_core_client_impl_Impl_getModuleBaseURL__Ljava_lang_String_2_key_0, com_google_gwt_core_client_impl_Impl_getModuleBaseURL__Ljava_lang_String_2_global_0;
  org_fusesource_restygwt_client_Defaults_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  org_fusesource_restygwt_client_Defaults_serviceRoot = (com_google_gwt_core_client_impl_Impl_$clinit__V() , com_google_gwt_core_client_impl_Impl_getModuleBaseURL__Ljava_lang_String_2_key_0 = '__gwtDevModeHook:' + $moduleName + ':moduleBase' , com_google_gwt_core_client_impl_Impl_getModuleBaseURL__Ljava_lang_String_2_global_0 = $wnd || self , com_google_gwt_core_client_impl_Impl_getModuleBaseURL__Ljava_lang_String_2_global_0[com_google_gwt_core_client_impl_Impl_getModuleBaseURL__Ljava_lang_String_2_key_0] || $moduleBase);
}

var org_fusesource_restygwt_client_Defaults_addXHttpMethodOverrideHeader = true, org_fusesource_restygwt_client_Defaults_serviceRoot;
function org_fusesource_restygwt_client_FailedStatusCodeException_FailedStatusCodeException__Ljava_lang_String_2IV(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(230, 9, $intern_17);
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1FailedStatusCodeException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_7, 'FailedStatusCodeException', 230);
function org_fusesource_restygwt_client_FailedResponseException_FailedResponseException__Lcom_google_gwt_http_client_Response_2V(response){
  var lastArg;
  org_fusesource_restygwt_client_FailedStatusCodeException_FailedStatusCodeException__Ljava_lang_String_2IV.call(this, (lastArg = response.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest.statusText , response.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest.status , lastArg));
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(231, 230, $intern_17, org_fusesource_restygwt_client_FailedResponseException_FailedResponseException__Lcom_google_gwt_http_client_Response_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1FailedResponseException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_7, 'FailedResponseException', 231);
function org_fusesource_restygwt_client_FileSystemHelper_isRequestGoingToFileSystem__Ljava_lang_String_2Ljava_lang_String_2Z(baseUrl, requestUrl){
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(requestUrl.substr(0, 4), 'file')) {
    return true;
  }
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(baseUrl.substr(0, 4), 'file') && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(requestUrl.substr(0, 1), '/')) {
    return true;
  }
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(baseUrl.substr(0, 4), 'file') && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(requestUrl.substr(0, 1), '.')) {
    return true;
  }
  return false;
}

function org_fusesource_restygwt_client_JsonEncoderDecoder$DecodingException_JsonEncoderDecoder$DecodingException__Ljava_lang_String_2V(msg){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, msg);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(71, 9, $intern_17, org_fusesource_restygwt_client_JsonEncoderDecoder$DecodingException_JsonEncoderDecoder$DecodingException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1JsonEncoderDecoder$DecodingException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_7, 'JsonEncoderDecoder/DecodingException', 71);
function org_fusesource_restygwt_client_Method_$headers__Lorg_fusesource_restygwt_client_Method_2Ljava_util_Map_2Lorg_fusesource_restygwt_client_Method_2(this$static, headers){
  var entry, entry$iterator;
  if (headers) {
    for (entry$iterator = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(headers)).java_util_AbstractHashMap$EntrySet_this$01); entry$iterator.java_util_AbstractHashMap$EntrySetIterator_hasNext;) {
      entry = java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(entry$iterator);
      com_google_gwt_http_client_RequestBuilder_$setHeader__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Ljava_lang_String_2V(this$static.org_fusesource_restygwt_client_Method_builder, com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(entry.getKey__Ljava_lang_Object_2()), com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(entry.getValue__Ljava_lang_Object_2()));
    }
  }
  return this$static;
}

function org_fusesource_restygwt_client_Method_$isExpected__Lorg_fusesource_restygwt_client_Method_2IZ(this$static, status_0){
  var baseUrl, requestUrl, com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_s_0, com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_i_0;
  baseUrl = (com_google_gwt_core_client_impl_Impl_$clinit__V() , com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_s_0 = $doc.location.href , com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_i_0 = com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_s_0.indexOf('#') , com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_i_0 != -1 && (com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_s_0 = com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_s_0.substring(0, com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_i_0)) , com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_i_0 = com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_s_0.indexOf('?') , com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_i_0 != -1 && (com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_s_0 = com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_s_0.substring(0, com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_i_0)) , com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_i_0 = com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_s_0.lastIndexOf('/') , com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_i_0 != -1 && (com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_s_0 = com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_s_0.substring(0, com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_i_0)) , com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_s_0.length > 0?com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2_s_0 + '/':'');
  requestUrl = this$static.org_fusesource_restygwt_client_Method_builder.com_google_gwt_http_client_RequestBuilder_url;
  return org_fusesource_restygwt_client_FileSystemHelper_isRequestGoingToFileSystem__Ljava_lang_String_2Ljava_lang_String_2Z(baseUrl, requestUrl) || this$static.org_fusesource_restygwt_client_Method_anyStatus || java_util_HashSet_$contains__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this$static.org_fusesource_restygwt_client_Method_expectedStatuses, java_lang_Integer_valueOf__ILjava_lang_Integer_2(status_0));
}

function org_fusesource_restygwt_client_Method_$json__Lorg_fusesource_restygwt_client_Method_2Lcom_google_gwt_json_client_JSONValue_2Lorg_fusesource_restygwt_client_Method_2(this$static, data_0){
  com_google_gwt_http_client_RequestBuilder_$getHeader__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Ljava_lang_String_2(this$static.org_fusesource_restygwt_client_Method_builder) == null && (com_google_gwt_http_client_RequestBuilder_$setHeader__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Ljava_lang_String_2V(this$static.org_fusesource_restygwt_client_Method_builder, $intern_32, $intern_6) , this$static);
  com_google_gwt_http_client_RequestBuilder_$setRequestData__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2V(this$static.org_fusesource_restygwt_client_Method_builder, com_google_gwt_json_client_JSONObject_$toString__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2(data_0));
  return this$static;
}

function org_fusesource_restygwt_client_Method_$send__Lorg_fusesource_restygwt_client_Method_2Lcom_google_gwt_http_client_RequestCallback_2Ljava_lang_Object_2(this$static, callback){
  this$static.org_fusesource_restygwt_client_Method_builder.com_google_gwt_http_client_RequestBuilder_timeoutMillis == 0 && (org_fusesource_restygwt_client_Defaults_$clinit__V() , false) && com_google_gwt_http_client_RequestBuilder_$setTimeoutMillis__Lcom_google_gwt_http_client_RequestBuilder_2IV(this$static.org_fusesource_restygwt_client_Method_builder, (org_fusesource_restygwt_client_Defaults_$clinit__V() , -1));
  com_google_gwt_http_client_RequestBuilder_$setCallback__Lcom_google_gwt_http_client_RequestBuilder_2Lcom_google_gwt_http_client_RequestCallback_2V(this$static.org_fusesource_restygwt_client_Method_builder, callback);
  org_fusesource_restygwt_client_Defaults_$clinit__V();
  return org_fusesource_restygwt_client_dispatcher_DefaultDispatcher_$send__Lorg_fusesource_restygwt_client_dispatcher_DefaultDispatcher_2Lorg_fusesource_restygwt_client_Method_2Lcom_google_gwt_http_client_RequestBuilder_2Lcom_google_gwt_http_client_Request_2(this$static.org_fusesource_restygwt_client_Method_builder);
}

function org_fusesource_restygwt_client_Method_Method__Lorg_fusesource_restygwt_client_Resource_2Ljava_lang_String_2V(resource){
  this.org_fusesource_restygwt_client_Method_expectedStatuses = new java_util_HashSet_HashSet__V;
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this.org_fusesource_restygwt_client_Method_expectedStatuses, java_lang_Integer_valueOf__ILjava_lang_Integer_2(200));
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this.org_fusesource_restygwt_client_Method_expectedStatuses, java_lang_Integer_valueOf__ILjava_lang_Integer_2(201));
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this.org_fusesource_restygwt_client_Method_expectedStatuses, java_lang_Integer_valueOf__ILjava_lang_Integer_2(204));
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this.org_fusesource_restygwt_client_Method_expectedStatuses, java_lang_Integer_valueOf__ILjava_lang_Integer_2(1223));
  new java_util_HashMap_HashMap__V;
  this.org_fusesource_restygwt_client_Method_builder = new org_fusesource_restygwt_client_Method$MethodRequestBuilder_Method$MethodRequestBuilder__Ljava_lang_String_2Ljava_lang_String_2V(org_fusesource_restygwt_client_Resource_$getUri__Lorg_fusesource_restygwt_client_Resource_2Ljava_lang_String_2(resource));
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(220, 1, {}, org_fusesource_restygwt_client_Method_Method__Lorg_fusesource_restygwt_client_Resource_2Ljava_lang_String_2V);
_.org_fusesource_restygwt_client_Method_anyStatus = false;
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1Method_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_7, 'Method', 220);
function org_fusesource_restygwt_client_Method$MethodRequestBuilder_Method$MethodRequestBuilder__Ljava_lang_String_2Ljava_lang_String_2V(url_0){
  com_google_gwt_http_client_RequestBuilder_$clinit__V();
  com_google_gwt_http_client_StringValidator_throwIfEmptyOrNull__Ljava_lang_String_2Ljava_lang_String_2V('httpMethod', 'PUT');
  com_google_gwt_http_client_StringValidator_throwIfEmptyOrNull__Ljava_lang_String_2Ljava_lang_String_2V('url', url_0);
  this.com_google_gwt_http_client_RequestBuilder_httpMethod = 'PUT';
  this.com_google_gwt_http_client_RequestBuilder_url = url_0;
  this.com_google_gwt_http_client_RequestBuilder_requestData = null;
  org_fusesource_restygwt_client_Defaults_$clinit__V();
  org_fusesource_restygwt_client_Defaults_addXHttpMethodOverrideHeader && com_google_gwt_http_client_RequestBuilder_$setHeader__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Ljava_lang_String_2V(this, 'X-HTTP-Method-Override', 'PUT');
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(222, 221, {}, org_fusesource_restygwt_client_Method$MethodRequestBuilder_Method$MethodRequestBuilder__Ljava_lang_String_2Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1Method$MethodRequestBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_7, 'Method/MethodRequestBuilder', 222);
function org_fusesource_restygwt_client_Resource_$getUri__Lorg_fusesource_restygwt_client_Resource_2Ljava_lang_String_2(this$static){
  if (this$static.org_fusesource_restygwt_client_Resource_query != null) {
    return this$static.org_fusesource_restygwt_client_Resource_path + '?' + this$static.org_fusesource_restygwt_client_Resource_query;
  }
  return this$static.org_fusesource_restygwt_client_Resource_path;
}

function org_fusesource_restygwt_client_Resource_$put__Lorg_fusesource_restygwt_client_Resource_2Lorg_fusesource_restygwt_client_Method_2(this$static){
  return org_fusesource_restygwt_client_Method_$headers__Lorg_fusesource_restygwt_client_Method_2Ljava_util_Map_2Lorg_fusesource_restygwt_client_Method_2(new org_fusesource_restygwt_client_Method_Method__Lorg_fusesource_restygwt_client_Resource_2Ljava_lang_String_2V(this$static), this$static.org_fusesource_restygwt_client_Resource_headers);
}

function org_fusesource_restygwt_client_Resource_$resolve__Lorg_fusesource_restygwt_client_Resource_2Ljava_lang_String_2Lorg_fusesource_restygwt_client_Resource_2(this$static, path){
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(path.substr(0, 5), 'http:') || java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(path.substr(0, 6), 'https:') || java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(path.substr(0, 5), 'file:')) {
    return new org_fusesource_restygwt_client_Resource_Resource__Ljava_lang_String_2Ljava_lang_String_2Ljava_util_Map_2V(path, this$static.org_fusesource_restygwt_client_Resource_query, this$static.org_fusesource_restygwt_client_Resource_headers);
  }
  java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(path.substr(0, 1), '/') && (path = path.substr(1));
  return new org_fusesource_restygwt_client_Resource_Resource__Ljava_lang_String_2Ljava_lang_String_2Ljava_util_Map_2V(this$static.org_fusesource_restygwt_client_Resource_path + '/' + path, this$static.org_fusesource_restygwt_client_Resource_query, this$static.org_fusesource_restygwt_client_Resource_headers);
}

function org_fusesource_restygwt_client_Resource_Resource__Ljava_lang_String_2V(uri_0){
  org_fusesource_restygwt_client_Resource_Resource__Ljava_lang_String_2Ljava_util_Map_2V.call(this, uri_0);
}

function org_fusesource_restygwt_client_Resource_Resource__Ljava_lang_String_2Ljava_lang_String_2Ljava_util_Map_2V(uri_0, query, headers){
  var suffixlength;
  this.org_fusesource_restygwt_client_Resource_path = (suffixlength = '/'.length , java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(uri_0.substr(uri_0.length - suffixlength, suffixlength), '/')?java_lang_String_$substring__Ljava_lang_String_2IILjava_lang_String_2(uri_0, uri_0.length - 1):uri_0);
  this.org_fusesource_restygwt_client_Resource_query = query;
  this.org_fusesource_restygwt_client_Resource_headers = headers?headers:null;
}

function org_fusesource_restygwt_client_Resource_Resource__Ljava_lang_String_2Ljava_util_Map_2V(uri_0){
  var pos, suffixlength;
  pos = java_lang_String_$indexOf__Ljava_lang_String_2Ljava_lang_String_2I(uri_0, java_lang_String_fromCodePoint__ILjava_lang_String_2(63));
  if (pos >= 0) {
    this.org_fusesource_restygwt_client_Resource_path = uri_0.substr(0, pos);
    this.org_fusesource_restygwt_client_Resource_query = uri_0.substr(pos + 1);
  }
   else {
    this.org_fusesource_restygwt_client_Resource_path = (suffixlength = '/'.length , java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(uri_0.substr(uri_0.length - suffixlength, suffixlength), '/')?java_lang_String_$substring__Ljava_lang_String_2IILjava_lang_String_2(uri_0, uri_0.length - 1):uri_0);
    this.org_fusesource_restygwt_client_Resource_query = null;
  }
  this.org_fusesource_restygwt_client_Resource_headers = null;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(56, 1, {}, org_fusesource_restygwt_client_Resource_Resource__Ljava_lang_String_2V, org_fusesource_restygwt_client_Resource_Resource__Ljava_lang_String_2Ljava_lang_String_2Ljava_util_Map_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1Resource_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_7, 'Resource', 56);
function org_fusesource_restygwt_client_ResponseFormatException_ResponseFormatException__Ljava_lang_String_2Ljava_lang_Throwable_2V(e){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, 'Response was NOT a valid JSON document', e);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(233, 9, $intern_17, org_fusesource_restygwt_client_ResponseFormatException_ResponseFormatException__Ljava_lang_String_2Ljava_lang_Throwable_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1ResponseFormatException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_7, 'ResponseFormatException', 233);
function org_fusesource_restygwt_client_dispatcher_DefaultDispatcher_$send__Lorg_fusesource_restygwt_client_dispatcher_DefaultDispatcher_2Lorg_fusesource_restygwt_client_Method_2Lcom_google_gwt_http_client_RequestBuilder_2Lcom_google_gwt_http_client_Request_2(builder){
  var content, logger;
  if (com_google_gwt_logging_client_LogConfiguration_loggingIsEnabled__Z()) {
    logger = java_util_logging_Logger_getLogger__Ljava_lang_String_2Ljava_util_logging_Logger_2((java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1dispatcher_1DefaultDispatcher_12_1classLit) , com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1dispatcher_1DefaultDispatcher_12_1classLit.java_lang_Class_typeName));
    java_util_logging_Logger_$fine__Ljava_util_logging_Logger_2Ljava_lang_String_2V(logger);
    content = builder.com_google_gwt_http_client_RequestBuilder_requestData;
    content != null && content.length != 0 && java_util_logging_Logger_$fine__Ljava_util_logging_Logger_2Ljava_lang_String_2V(logger);
  }
  return com_google_gwt_http_client_StringValidator_throwIfNull__Ljava_lang_String_2Ljava_lang_Object_2V('callback', builder.com_google_gwt_http_client_RequestBuilder_callback) , com_google_gwt_http_client_RequestBuilder_$doSend__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Lcom_google_gwt_http_client_RequestCallback_2Lcom_google_gwt_http_client_Request_2(builder, builder.com_google_gwt_http_client_RequestBuilder_requestData, builder.com_google_gwt_http_client_RequestBuilder_callback);
}

var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1dispatcher_1DefaultDispatcher_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('org.fusesource.restygwt.client.dispatcher', 'DefaultDispatcher', null);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Handler_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_72, 'Handler', null);
var $entry = (com_google_gwt_core_client_impl_Impl_$clinit__V() , com_google_gwt_core_client_impl_Impl_entry__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2);
var gwtOnLoad = gwtOnLoad = com_google_gwt_lang_ModuleUtils_gwtOnLoad__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V;
com_google_gwt_lang_ModuleUtils_addInitFunctions__V(com_google_gwt_lang_com_100046cherentsov_100046mapfront_100046mapfront_1_1EntryMethodHolder_init__V);
com_google_gwt_lang_ModuleUtils_setGwtProperty__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V('permProps', [[['locale', 'default'], ['user.agent', 'ie9']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=gwtApp-0.js

