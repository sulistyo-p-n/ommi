// let stNames = ["Kurihama", "Kinugasa", "Yokosuka", "Taura", "Higashi-Zushi", "Zushi"];
// let baseColor = 0x11E102;

let stNames = ["Tangerang", "Tanah Tinggi", "Batu Ceper", "Poris", "Kalideres", "Rawa Buaya", "Bojong Indah", "Taman Kota", "Pesing", "Grogol", "Duri"];
let baseColor = 0xC25A15;

let bgObject = new RectObject();
bgObject.baseStyle.isUseFill = true;
bgObject.baseStyle.fillType = ColorType.Solid;
bgObject.baseStyle.fillColor = 0xffffff;
bgObject.baseStyle.fillAlpha = 1.0;
bgObject.baseStyle.isUseLine = false;
bgObject.baseStyle.isUseText = false;
bgObject.w = 1920.0;
bgObject.h = 1080.0;
bgObject.anchor.h = 0.0;
bgObject.anchor.v = 0.0;
bgObject.point.x = 0.0;
bgObject.point.y = 0.0;
bgObject.addAt(app.stage);
layoutObjects.push(bgObject);

let titleObject = new RectObject();
titleObject.baseStyle.isUseFill = true;
titleObject.baseStyle.fillType = ColorType.Solid;
titleObject.baseStyle.fillColor = 0x1D1D1D;
titleObject.baseStyle.fillAlpha = 1.0;
titleObject.baseStyle.isUseLine = false;
titleObject.baseStyle.isUseText = false;
titleObject.w = 1920.0;
titleObject.h = 254.0;
titleObject.anchor.h = 0.0;
titleObject.anchor.v = 0.0;
titleObject.point.x = 0.0;
titleObject.point.y = 0.0;
titleObject.addAt(app.stage);
layoutObjects.push(titleObject);

let time1Object = new RectObject();
time1Object.baseStyle.isUseFill = false;
time1Object.baseStyle.isUseLine = false;
time1Object.baseStyle.isUseText = true;
time1Object.baseStyle.text = "01/01/2023";
time1Object.baseStyle.fontColor = 0xffffff;
time1Object.baseStyle.fontSize = 32.0;
time1Object.baseStyle.isFontBold = false;
time1Object.baseStyle.textAnchor.h = 1.0;
time1Object.baseStyle.textAnchor.v = 0.5;
time1Object.baseStyle.isReadable = true;
time1Object.w = 300.0;
time1Object.h = 75.0;
time1Object.anchor.h = 1.0;
time1Object.anchor.v = 0.0;
time1Object.point.x = 1920 - 15.0;
time1Object.point.y = 5.0;
time1Object.addAt(app.stage);
layoutObjects.push(time1Object);

let time2Object = new RectObject();
time2Object.baseStyle.isUseFill = false;
time2Object.baseStyle.isUseLine = false;
time2Object.baseStyle.isUseText = true;
time2Object.baseStyle.text = "12:34:56";
time2Object.baseStyle.fontColor = 0xffffff;
time2Object.baseStyle.fontSize = 45.0;
time2Object.baseStyle.isFontBold = false;
time2Object.baseStyle.textAnchor.h = 1.0;
time2Object.baseStyle.textAnchor.v = 0.5;
time2Object.baseStyle.isReadable = true;
time2Object.w = 300.0;
time2Object.h = 75.0;
time2Object.anchor.h = 1.0;
time2Object.anchor.v = 0.0;
time2Object.point.x = 1920 - 15.0;
time2Object.point.y = 60.0;
time2Object.addAt(app.stage);
layoutObjects.push(time2Object);

let title1Object = new RectObject();
title1Object.baseStyle.isUseFill = false;
title1Object.baseStyle.isUseLine = false;
title1Object.baseStyle.isUseText = true;
title1Object.baseStyle.text = "Now stopping at";
title1Object.baseStyle.fontColor = 0xffffff;
title1Object.baseStyle.fontSize = 32.0;
title1Object.baseStyle.isFontBold = false;
title1Object.baseStyle.textAnchor.h = 0.0;
title1Object.baseStyle.textAnchor.v = 0.5;
title1Object.baseStyle.isReadable = true;
title1Object.w = 1620.0;
title1Object.h = 80.0;
title1Object.anchor.h = 0.0;
title1Object.anchor.v = 0.0;
title1Object.point.x = 310.0;
title1Object.point.y = 5.0;
title1Object.addAt(app.stage);
layoutObjects.push(title1Object);

let title2Object = new RectObject();
title2Object.baseStyle.isUseFill = false;
title2Object.baseStyle.isUseLine = false;
title2Object.baseStyle.isUseText = true;
title2Object.baseStyle.text = stNames[0];
title2Object.baseStyle.fontColor = 0xffffff;
title2Object.baseStyle.fontSize = 120.0;
title2Object.baseStyle.isFontBold = true;
title2Object.baseStyle.textAnchor.h = 0.0;
title2Object.baseStyle.textAnchor.v = 0.5;
title2Object.baseStyle.isReadable = true;
title2Object.w = 1620.0;
title2Object.h = 176.0;
title2Object.anchor.h = 0.0;
title2Object.anchor.v = 0.0;
title2Object.point.x = 300.0;
title2Object.point.y = 70.0;
title2Object.addAt(app.stage);
layoutObjects.push(title2Object);

let title3Object = new RectObject();
title3Object.baseStyle.isUseFill = false;
title3Object.baseStyle.isUseLine = false;
title3Object.baseStyle.isUseText = true;
title3Object.baseStyle.text = "8";
title3Object.baseStyle.fontColor = 0xffffff;
title3Object.baseStyle.fontSize = 140.0;
title3Object.baseStyle.isFontBold = true;
title3Object.baseStyle.textAnchor.h = 0.5;
title3Object.baseStyle.textAnchor.v = 0.5;
title3Object.baseStyle.isReadable = true;
title3Object.w = 256.0;
title3Object.h = 256.0;
title3Object.anchor.h = 0.0;
title3Object.anchor.v = 0.0;
title3Object.point.x = 0.0;
title3Object.point.y = 0.0;
title3Object.addAt(app.stage);
layoutObjects.push(title3Object);

let lnObject = new RectObject();
lnObject.baseStyle.isUseFill = true;
lnObject.baseStyle.fillType = ColorType.Solid;
lnObject.baseStyle.fillColor = baseColor;
lnObject.baseStyle.fillAlpha = 1.0;
lnObject.baseStyle.isUseLine = false;
lnObject.baseStyle.isUseText = false;
lnObject.w = 20.0;
lnObject.h = 226.0;
lnObject.anchor.h = 0.0;
lnObject.anchor.v = 0.0;
lnObject.point.x = 256.0;
lnObject.point.y = 15.0;
lnObject.addAt(app.stage);
layoutObjects.push(lnObject);

const lineObjects = [];

for (let index = 0; index < 6; index++) {
    let stLine1Object = new ParallelogramObject();
    stLine1Object.size = 260.0;
    stLine1Object.dir = Direction.Left;
    stLine1Object.baseStyle.isUseFill = true;
    stLine1Object.baseStyle.fillType = ColorType.Solid;
    stLine1Object.baseStyle.fillColor = (index == 0 ) ? 0x1D1D1D : baseColor;
    stLine1Object.baseStyle.fillAlpha = 1.0;
    stLine1Object.baseStyle.isUseLine = false;
    stLine1Object.baseStyle.isUseText = false;
    stLine1Object.w = 300.0;
    stLine1Object.h = 80.0;
    stLine1Object.anchor.h = 0.0;
    stLine1Object.anchor.v = 0.0;
    stLine1Object.point.x = 60.0 + (300.0 * index);
    stLine1Object.point.y = 668;
    stLine1Object.addAt(app.stage);
    layoutObjects.push(stLine1Object);

    let stLine2Object = new ParallelogramObject();
    stLine2Object.size = 260.0;
    stLine2Object.dir = Direction.Right;
    stLine2Object.baseStyle.isUseFill = true;
    stLine2Object.baseStyle.fillType = ColorType.Solid;
    stLine2Object.baseStyle.fillColor = (index == 0 ) ? 0x1D1D1D : baseColor;
    stLine2Object.baseStyle.fillAlpha = 1.0;
    stLine2Object.baseStyle.isUseLine = false;
    stLine2Object.baseStyle.isUseText = false;
    stLine2Object.w = 300.0;
    stLine2Object.h = 80.0;
    stLine2Object.anchor.h = 0.0;
    stLine2Object.anchor.v = 0.0;
    stLine2Object.point.x = 60.0 + (300.0 * index);
    stLine2Object.point.y = 668 + 80;
    stLine2Object.addAt(app.stage);
    layoutObjects.push(stLine2Object);

    let stCircleObject = new EllipseObject();
    stCircleObject.size = 260.0;
    stCircleObject.dir = Direction.Right;
    stCircleObject.baseStyle.isUseFill = true;
    stCircleObject.baseStyle.fillType = ColorType.Solid;
    stCircleObject.baseStyle.fillColor = 0xffffff;
    stCircleObject.baseStyle.fillAlpha = 1.0;
    stCircleObject.baseStyle.isUseLine = false;
    stCircleObject.baseStyle.isUseText = (index == 0 ) ? false : true;
    stCircleObject.baseStyle.text = (index == 0 ) ? "" : (index*2);
    stCircleObject.baseStyle.fontColor = 0x000000;
    stCircleObject.baseStyle.fontSize = 64.0;
    stCircleObject.baseStyle.isFontBold = true;
    stCircleObject.baseStyle.textAnchor.h = 0.5;
    stCircleObject.baseStyle.textAnchor.v = 0.5;
    stCircleObject.baseStyle.isReadable = true;
    stCircleObject.w = (index == 0 ) ? 60 : 120.0;
    stCircleObject.h = (index == 0 ) ? 60 : 120.0;
    stCircleObject.anchor.h = 0.5;
    stCircleObject.anchor.v = 0.5;
    stCircleObject.point.x = 60.0 + (300.0 * index) + (300.0/2);
    stCircleObject.point.y = 668 + (140.0/2 + 10.0);
    stCircleObject.addAt(app.stage);
    layoutObjects.push(stCircleObject);

    let stMinLabelObject = new RectObject();
    stMinLabelObject.baseStyle.isUseFill = false;
    stMinLabelObject.baseStyle.isUseLine = false;
    stMinLabelObject.baseStyle.isUseText = (index == 0 ) ? false : true;
    stMinLabelObject.baseStyle.text = (index == 0 ) ? "" : "min";
    stMinLabelObject.baseStyle.fontColor = 0xffffff;
    stMinLabelObject.baseStyle.fontSize = 22.0;
    stMinLabelObject.baseStyle.isFontBold = false;
    stMinLabelObject.baseStyle.textAnchor.h = 0.0;
    stMinLabelObject.baseStyle.textAnchor.v = 0.5;
    stMinLabelObject.baseStyle.isReadable = true;
    stMinLabelObject.w = 60;
    stMinLabelObject.h = 22;
    stMinLabelObject.anchor.h = 0.0;
    stMinLabelObject.anchor.v = 0.5;
    stMinLabelObject.point.x = 60.0 + (300.0 * index) + (300.0/2) + 76;
    stMinLabelObject.point.y = 668 + (140.0/2 + 10.0);
    stMinLabelObject.addAt(app.stage);
    layoutObjects.push(stMinLabelObject);

    let stLabelObject = new RectObject();
    stLabelObject.a = (-50 * Math.PI) / 180;
    stLabelObject.baseStyle.isUseFill = false;
    stLabelObject.baseStyle.isUseLine = false;
    stLabelObject.baseStyle.isUseText = true;
    stLabelObject.baseStyle.text = stNames[index];
    stLabelObject.baseStyle.fontColor = 0x000000;
    stLabelObject.baseStyle.fontSize = 32.0;
    stLabelObject.baseStyle.isFontBold = false;
    stLabelObject.baseStyle.textAnchor.h = 0.0;
    stLabelObject.baseStyle.textAnchor.v = 0.5;
    stLabelObject.baseStyle.isReadable = true;
    stLabelObject.baseStyle.isTextCrop = false;
    stLabelObject.baseStyle.isTextAutoScroll = false;
    stLabelObject.w = 300.0;
    stLabelObject.h = 45.0;
    stLabelObject.anchor.h = 0.0;
    stLabelObject.anchor.v = 1.0;
    stLabelObject.point.x = 60.0 + (300.0 * index) + (300.0/2);
    stLabelObject.point.y = 658;
    stLabelObject.addAt(app.stage);
    layoutObjects.push(stLabelObject);

    const lineObject = {
        "stLine1Object" : stLine1Object,
        "stLine2Object" : stLine2Object,
        "stCircleObject" : stCircleObject,
        "stMinLabelObject" : stMinLabelObject,
        "stLabelObject" : stLabelObject,
    };

    lineObjects.push(lineObject);
}

let ftObject = new RectObject();
ftObject.baseStyle.isUseFill = true;
ftObject.baseStyle.fillType = ColorType.Solid;
ftObject.baseStyle.fillColor = 0xC3C3C3;
ftObject.baseStyle.fillAlpha = 1.0;
ftObject.baseStyle.isUseLine = false;
ftObject.baseStyle.isUseText = false;
ftObject.w = 1920.0;
ftObject.h = 100.0;
ftObject.anchor.h = 0.0;
ftObject.anchor.v = 0.0;
ftObject.point.x = 0.0;
ftObject.point.y = 980.0;
ftObject.addAt(app.stage);
layoutObjects.push(ftObject);

let ft1Object = new RectObject();
ft1Object.a = (0 * Math.PI) / 180;
ft1Object.baseStyle.isUseFill = false;
ft1Object.baseStyle.isUseLine = false;
ft1Object.baseStyle.isUseText = true;
ft1Object.baseStyle.text = "Welcome Passenger • this is On-board Passenger Information Display • by Len Railway Systems • Please Be Aware of Your Luggage • Welcome Passenger • this is On-board Passenger Information Display • by Len Railway Systems • Please Be Aware of Your Luggage";
ft1Object.baseStyle.fontColor = 0x000000;
ft1Object.baseStyle.fontSize = 32.0;
ft1Object.baseStyle.isFontBold = false;
ft1Object.baseStyle.textAnchor.h = 0.5;
ft1Object.baseStyle.textAnchor.v = 0.5;
ft1Object.baseStyle.isReadable = true;
ft1Object.baseStyle.isTextCrop = true;
ft1Object.baseStyle.isTextAutoScroll = true;
ft1Object.w = 1920;
ft1Object.h = 100.0;
ft1Object.anchor.h = 0.0;
ft1Object.anchor.v = 0.0;
ft1Object.point.x = 0.0;
ft1Object.point.y = 980.0;
ft1Object.addAt(app.stage);
layoutObjects.push(ft1Object);

//

function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}

function setClock() {
    var today = new Date();
    var date = pad(today.getDate())+'/'+pad(today.getMonth()+1)+'/'+today.getFullYear();
    var time = pad(today.getHours())+":"+pad(today.getMinutes())+":"+pad(today.getSeconds());
    time1Object.baseStyle.text = date;
    time2Object.baseStyle.text = time;
}

function refreshData() {
    const waittime = 1;
    const headway = 3 + waittime;
    const today = new Date();
    const hh = today.getHours();
    const mm = today.getMinutes();

    const currentMM = hh * 60 + mm;
    const baseIndex = Math.floor(currentMM / headway) + ((currentMM % headway >= waittime) ? 1 : 0);

    for (let index = 0; index < lineObjects.length; index++) {
        const dataIndex = Math.abs((Math.floor((baseIndex + index)/(stNames.length-1))%2 * (stNames.length-1)) - ((baseIndex + index)%(stNames.length-1)));
        if ((index == 0) && (((baseIndex * headway) - currentMM) <= 0)) {
            title1Object.baseStyle.text = "Now stopping at";
            title2Object.baseStyle.text = stNames[dataIndex];
        } else if (index == 0) {
            lineObjects[0]["stLabelObject"].baseStyle.text = "";
            title1Object.baseStyle.text = "Next Stop" + " in " + (((baseIndex + index) * headway) - currentMM) + " Min.";
            title2Object.baseStyle.text = stNames[dataIndex];
        }
        if ((index != lineObjects.length - 1) || (((baseIndex * headway) - currentMM) <= 0)) {
            lineObjects[index + ((((baseIndex * headway) - currentMM) <= 0) ? 0 : 1)]["stLabelObject"].baseStyle.text = stNames[dataIndex];
            lineObjects[index + ((((baseIndex * headway) - currentMM) <= 0) ? 0 : 1)]["stCircleObject"].baseStyle.text = ((baseIndex + index) * headway) - currentMM;
        }
    }
}

// setInterval(function() {
//     setClock();
//     refreshLayoutView();
// }, 1000/120);

app.ticker.add(() => {
    setClock();
    refreshData();
    refreshLayoutView();
});

