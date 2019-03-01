gdjs.NewSceneCode = {};
gdjs.NewSceneCode.GDshotObjects1= [];
gdjs.NewSceneCode.GDshotObjects2= [];
gdjs.NewSceneCode.GDshotObjects3= [];
gdjs.NewSceneCode.GDbackgroundObjects1= [];
gdjs.NewSceneCode.GDbackgroundObjects2= [];
gdjs.NewSceneCode.GDbackgroundObjects3= [];
gdjs.NewSceneCode.GDhealth_95greenObjects1= [];
gdjs.NewSceneCode.GDhealth_95greenObjects2= [];
gdjs.NewSceneCode.GDhealth_95greenObjects3= [];
gdjs.NewSceneCode.GDhealth_95redObjects1= [];
gdjs.NewSceneCode.GDhealth_95redObjects2= [];
gdjs.NewSceneCode.GDhealth_95redObjects3= [];
gdjs.NewSceneCode.GDenemyObjects1= [];
gdjs.NewSceneCode.GDenemyObjects2= [];
gdjs.NewSceneCode.GDenemyObjects3= [];
gdjs.NewSceneCode.GDscoreObjects1= [];
gdjs.NewSceneCode.GDscoreObjects2= [];
gdjs.NewSceneCode.GDscoreObjects3= [];
gdjs.NewSceneCode.GDgameoverObjects1= [];
gdjs.NewSceneCode.GDgameoverObjects2= [];
gdjs.NewSceneCode.GDgameoverObjects3= [];
gdjs.NewSceneCode.GDexplosionObjects1= [];
gdjs.NewSceneCode.GDexplosionObjects2= [];
gdjs.NewSceneCode.GDexplosionObjects3= [];
gdjs.NewSceneCode.GDplayerObjects1= [];
gdjs.NewSceneCode.GDplayerObjects2= [];
gdjs.NewSceneCode.GDplayerObjects3= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_0 = {val:false};


gdjs.NewSceneCode.eventsList0x67b7d0 = function(runtimeScene) {

{


{
}

}


}; //End of gdjs.NewSceneCode.eventsList0x67b7d0
gdjs.NewSceneCode.eventsList0x695768 = function(runtimeScene) {

{


{

{ //Subevents
gdjs.NewSceneCode.eventsList0x67b7d0(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.NewSceneCode.eventsList0x695768
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDexplosionObjects1Objects = Hashtable.newFrom({"explosion": gdjs.NewSceneCode.GDexplosionObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDshotObjects1Objects = Hashtable.newFrom({"shot": gdjs.NewSceneCode.GDshotObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDshotObjects1Objects = Hashtable.newFrom({"shot": gdjs.NewSceneCode.GDshotObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDenemyObjects2Objects = Hashtable.newFrom({"enemy": gdjs.NewSceneCode.GDenemyObjects2});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDenemyObjects2Objects = Hashtable.newFrom({"enemy": gdjs.NewSceneCode.GDenemyObjects2});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDenemyObjects2Objects = Hashtable.newFrom({"enemy": gdjs.NewSceneCode.GDenemyObjects2});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.NewSceneCode.GDenemyObjects1});gdjs.NewSceneCode.eventsList0x6809d0 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 0;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDenemyObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDenemyObjects2Objects, -(100), gdjs.random(gdjs.evtTools.window.getCanvasHeight(runtimeScene) - 32), "");
}{for(var i = 0, len = gdjs.NewSceneCode.GDenemyObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDenemyObjects2[i].setAngle(gdjs.random(60) - 30);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDenemyObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDenemyObjects2[i].addPolarForce((gdjs.NewSceneCode.GDenemyObjects2[i].getAngle()), 700 + gdjs.random(150) - gdjs.random(100), 1);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDenemyObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDenemyObjects2Objects, gdjs.random(gdjs.evtTools.window.getCanvasWidth(runtimeScene) - 32), -(100), "");
}{for(var i = 0, len = gdjs.NewSceneCode.GDenemyObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDenemyObjects2[i].setAngle(gdjs.random(60) - 30 + 90);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDenemyObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDenemyObjects2[i].addPolarForce((gdjs.NewSceneCode.GDenemyObjects2[i].getAngle()), 600 + gdjs.random(150) - gdjs.random(100), 1);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 2;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDenemyObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDenemyObjects2Objects, gdjs.evtTools.window.getCanvasWidth(runtimeScene) + 100, gdjs.random(gdjs.evtTools.window.getCanvasHeight(runtimeScene) - 32), "");
}{for(var i = 0, len = gdjs.NewSceneCode.GDenemyObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDenemyObjects2[i].setAngle(gdjs.random(60) - 30 + 180);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDenemyObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDenemyObjects2[i].addPolarForce((gdjs.NewSceneCode.GDenemyObjects2[i].getAngle()), 700 + gdjs.random(150) - gdjs.random(100), 1);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 3;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDenemyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDenemyObjects1Objects, gdjs.random(gdjs.evtTools.window.getCanvasWidth(runtimeScene) - 32), gdjs.evtTools.window.getCanvasHeight(runtimeScene) + 100, "");
}{for(var i = 0, len = gdjs.NewSceneCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDenemyObjects1[i].setAngle(gdjs.random(60) - 30 - 90);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDenemyObjects1[i].addPolarForce((gdjs.NewSceneCode.GDenemyObjects1[i].getAngle()), 600 + gdjs.random(150) - gdjs.random(100), 1);
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x6809d0
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.NewSceneCode.GDplayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.NewSceneCode.GDenemyObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDexplosionObjects1Objects = Hashtable.newFrom({"explosion": gdjs.NewSceneCode.GDexplosionObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDshotObjects1Objects = Hashtable.newFrom({"shot": gdjs.NewSceneCode.GDshotObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.NewSceneCode.GDenemyObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDexplosionObjects1Objects = Hashtable.newFrom({"explosion": gdjs.NewSceneCode.GDexplosionObjects1});gdjs.NewSceneCode.eventsList0x6917c8 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.3, "explosion");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDexplosionObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDexplosionObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDexplosionObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x6917c8
gdjs.NewSceneCode.eventsList0x691620 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.3, "explosion");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDexplosionObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDexplosionObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDexplosionObjects1[i].setScale(2);
}
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x6917c8(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.NewSceneCode.eventsList0x691620
gdjs.NewSceneCode.eventsList0xb2158 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDgameoverObjects1.createFrom(runtimeScene.getObjects("gameover"));
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "enemy spawn");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "enemy fire");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "game time");
}{for(var i = 0, len = gdjs.NewSceneCode.GDgameoverObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDgameoverObjects1[i].hide();
}
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x695768(runtimeScene);} //End of subevents
}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num3");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(1);
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= 0;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDexplosionObjects1.createFrom(runtimeScene.getObjects("explosion"));
gdjs.NewSceneCode.GDhealth_95greenObjects1.createFrom(runtimeScene.getObjects("health_green"));
gdjs.NewSceneCode.GDscoreObjects1.createFrom(runtimeScene.getObjects("score"));
{for(var i = 0, len = gdjs.NewSceneCode.GDhealth_95greenObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDhealth_95greenObjects1[i].setWidth(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 40);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDscoreObjects1[i].setString("Ships Destroyed:" + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDexplosionObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDexplosionObjects1[i].setAngle(gdjs.NewSceneCode.GDexplosionObjects1[i].getAngle() + (90));
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) <= 0;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDgameoverObjects1.createFrom(runtimeScene.getObjects("gameover"));
gdjs.NewSceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
gdjs.NewSceneCode.GDexplosionObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDexplosionObjects1Objects, (( gdjs.NewSceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDplayerObjects1[0].getPointX("")), (( gdjs.NewSceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDplayerObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.NewSceneCode.GDexplosionObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDexplosionObjects1[i].setScale(0.5);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDgameoverObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDgameoverObjects1[i].hide(false);
}
}}

}


{



}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerObjects1[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerObjects1[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerObjects1[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerObjects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


{

gdjs.NewSceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDplayerObjects1[i].timerElapsedTime("movetimer", 0.2) ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDplayerObjects1[k] = gdjs.NewSceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDplayerObjects1.length = k;}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDplayerObjects1 */
gdjs.NewSceneCode.GDshotObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDshotObjects1Objects, (( gdjs.NewSceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDplayerObjects1[0].getPointX("fire1")), (( gdjs.NewSceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDplayerObjects1[0].getPointY("fire1")), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDshotObjects1Objects, (( gdjs.NewSceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDplayerObjects1[0].getPointX("fire2")), (( gdjs.NewSceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDplayerObjects1[0].getPointY("fire2")), "");
}{for(var i = 0, len = gdjs.NewSceneCode.GDshotObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDshotObjects1[i].setAngle((( gdjs.NewSceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDplayerObjects1[0].getAngle()) + 90);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDshotObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDshotObjects1[i].addPolarForce((( gdjs.NewSceneCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDplayerObjects1[0].getAngle()), 2000, 1);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerObjects1[i].resetTimer("movetimer");
}
}}

}


{



}


{

gdjs.NewSceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDplayerObjects1[i].getX() < -((gdjs.NewSceneCode.GDplayerObjects1[i].getWidth())) / 2 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDplayerObjects1[k] = gdjs.NewSceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDplayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerObjects1[i].setX(-((gdjs.NewSceneCode.GDplayerObjects1[i].getWidth())) / 2);
}
}}

}


{

gdjs.NewSceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDplayerObjects1[i].getX() > gdjs.evtTools.window.getCanvasWidth(runtimeScene) - (gdjs.NewSceneCode.GDplayerObjects1[i].getWidth()) / 2 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDplayerObjects1[k] = gdjs.NewSceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDplayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerObjects1[i].setX(gdjs.evtTools.window.getCanvasWidth(runtimeScene) - (gdjs.NewSceneCode.GDplayerObjects1[i].getWidth()) / 2);
}
}}

}


{

gdjs.NewSceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDplayerObjects1[i].getY() > gdjs.evtTools.window.getCanvasHeight(runtimeScene) - (gdjs.NewSceneCode.GDplayerObjects1[i].getHeight()) / 2 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDplayerObjects1[k] = gdjs.NewSceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDplayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerObjects1[i].setY(gdjs.evtTools.window.getCanvasHeight(runtimeScene) - (gdjs.NewSceneCode.GDplayerObjects1[i].getHeight()) / 2);
}
}}

}


{

gdjs.NewSceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDplayerObjects1[i].getY() < -((gdjs.NewSceneCode.GDplayerObjects1[i].getHeight())) / 2 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDplayerObjects1[k] = gdjs.NewSceneCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDplayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerObjects1[i].setY(-((gdjs.NewSceneCode.GDplayerObjects1[i].getHeight())) / 2);
}
}}

}


{



}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "enemy spawn");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.random(3));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "enemy spawn");
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x6809d0(runtimeScene);} //End of subevents
}

}


{

gdjs.NewSceneCode.GDenemyObjects1.createFrom(runtimeScene.getObjects("enemy"));
gdjs.NewSceneCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDplayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDenemyObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDenemyObjects1 */
gdjs.NewSceneCode.GDexplosionObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDexplosionObjects1Objects, (( gdjs.NewSceneCode.GDenemyObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDenemyObjects1[0].getPointX("")), (( gdjs.NewSceneCode.GDenemyObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDenemyObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.NewSceneCode.GDexplosionObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDexplosionObjects1[i].setScale(0.5);
}
}{runtimeScene.getVariables().getFromIndex(0).sub(1);
}{for(var i = 0, len = gdjs.NewSceneCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDenemyObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "explosion");
}}

}


{

gdjs.NewSceneCode.GDenemyObjects1.createFrom(runtimeScene.getObjects("enemy"));
gdjs.NewSceneCode.GDshotObjects1.createFrom(runtimeScene.getObjects("shot"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDshotObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDenemyObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDenemyObjects1 */
gdjs.NewSceneCode.GDexplosionObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDexplosionObjects1Objects, (( gdjs.NewSceneCode.GDenemyObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDenemyObjects1[0].getPointX("")), (( gdjs.NewSceneCode.GDenemyObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDenemyObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.NewSceneCode.GDexplosionObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDexplosionObjects1[i].setScale(0.5);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDenemyObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "explosion");
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "explosion");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDexplosionObjects1.createFrom(runtimeScene.getObjects("explosion"));
{for(var i = 0, len = gdjs.NewSceneCode.GDexplosionObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDexplosionObjects1[i].setScale(1);
}
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x691620(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.NewSceneCode.eventsList0xb2158


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.NewSceneCode.GDshotObjects1.length = 0;
gdjs.NewSceneCode.GDshotObjects2.length = 0;
gdjs.NewSceneCode.GDshotObjects3.length = 0;
gdjs.NewSceneCode.GDbackgroundObjects1.length = 0;
gdjs.NewSceneCode.GDbackgroundObjects2.length = 0;
gdjs.NewSceneCode.GDbackgroundObjects3.length = 0;
gdjs.NewSceneCode.GDhealth_95greenObjects1.length = 0;
gdjs.NewSceneCode.GDhealth_95greenObjects2.length = 0;
gdjs.NewSceneCode.GDhealth_95greenObjects3.length = 0;
gdjs.NewSceneCode.GDhealth_95redObjects1.length = 0;
gdjs.NewSceneCode.GDhealth_95redObjects2.length = 0;
gdjs.NewSceneCode.GDhealth_95redObjects3.length = 0;
gdjs.NewSceneCode.GDenemyObjects1.length = 0;
gdjs.NewSceneCode.GDenemyObjects2.length = 0;
gdjs.NewSceneCode.GDenemyObjects3.length = 0;
gdjs.NewSceneCode.GDscoreObjects1.length = 0;
gdjs.NewSceneCode.GDscoreObjects2.length = 0;
gdjs.NewSceneCode.GDscoreObjects3.length = 0;
gdjs.NewSceneCode.GDgameoverObjects1.length = 0;
gdjs.NewSceneCode.GDgameoverObjects2.length = 0;
gdjs.NewSceneCode.GDgameoverObjects3.length = 0;
gdjs.NewSceneCode.GDexplosionObjects1.length = 0;
gdjs.NewSceneCode.GDexplosionObjects2.length = 0;
gdjs.NewSceneCode.GDexplosionObjects3.length = 0;
gdjs.NewSceneCode.GDplayerObjects1.length = 0;
gdjs.NewSceneCode.GDplayerObjects2.length = 0;
gdjs.NewSceneCode.GDplayerObjects3.length = 0;

gdjs.NewSceneCode.eventsList0xb2158(runtimeScene);
return;
}
gdjs['NewSceneCode'] = gdjs.NewSceneCode;
