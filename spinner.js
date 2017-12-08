;(function(){

function Spinner(div_id) {
    this.div_id = div_id;
    this.fillList = [
        "#000000", "#111111",
        "#7f7f7f", "#2d2d2d",
        "#333333", "#1872EA"
      ];

    this.svg = "\
      <div class=\"spinner_container\">\
          <svg\
            version=\"1.1\"\
            xmlns=\"http://www.w3.org/2000/svg\"\
            xmlns:xlink=\"http://www.w3.org/1999/xlink\"\
            xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\"\
            x=\"0px\"\
            y=\"0px\"\
            width=\"100%\"\
            height=\"600px\"\
            viewBox=\"0 0 600 600\"\
            enable-background=\"new 0 0 600 600\"\
            xml:space=\"preserve\">\
             <defs>\
               <mask id=\"liquidMask\">\
                 <path id=\"tubeLiquidShape\" fill=\"#FFFFFF\" d=\"M246.6,358.9l110.2-0.6c0.6,0,1.1-0.2,1.5-0.6c0.1-0.1,0.2-0.3,0.3-0.4\
            c0.4-0.6,0.5-1.4,0.2-2c0,0-12.3-28.7-17.9-41.9c-28.6,6.6-55.4-3.9-78.1,0.1c-9,21-18.2,42.5-18.2,42.5c-0.2,0.7-0.2,1.4,0.2,2\
            C245.2,358.6,245.9,358.9,246.6,358.9z\" />\
                 <g id=\"bubbleGroup\">\
                   <circle cx=\"<%= p.randomize(267.3) %>\" cy=\"371\" r=\"<%= p.randomRL() %>\" fill=\"<%= p.fillColor() %>\" />\
                   <circle cx=\"<%= p.randomize(324.3) %>\" cy=\"390\" r=\"<%= p.randomRL() %>\" fill=\"<%= p.fillColor() %>\" />\
                   <circle cx=\"<%= p.randomize(288.6) %>\" cy=\"386.3\" r=\"<%= p.randomRL() %>\" fill=\"<%= p.fillColor() %>\" />\
                   <circle cx=\"<%= p.randomize(288.6) %>\" cy=\"368.5\" r=\"<%= p.randomRL() %>\" fill=\"<%= p.fillColor() %>\" />\
                   <circle cx=\"<%= p.randomize(340.3) %>\" cy=\"370\" r=\"3\" fill=\"<%= p.fillColor() %>\" />\
                   <circle cx=\"300\" cy=\"378.3\" r=\"3\" />\
                   <circle cx=\"279.4\" cy=\"379.7\" r=\"2\" />\
                   <circle cx=\"337.3\" cy=\"363\" r=\"2\" />\
                   <circle cx=\"309.7\" cy=\"383.2\" r=\"2\" />\
                   <circle cx=\"309.7\" cy=\"371\" r=\"<%= p.randomRS() %>\" />\
                   <circle cx=\"327\" cy=\"368.5\" r=\"<%= p.randomRS() %>\" />\
                 </g>\
               </mask>\
             </defs>\
             <g id=\"tubeGroup\">\
               <path id=\"tubeOutline\" fill=\"#333333\" d=\"M268.4,224.7c-4.1,0-8,1.6-10.9,4.5c-2.9,2.9-4.5,6.8-4.5,10.9l0,12.3\
            c0,4.1,1.6,8,4.5,10.9c2,2,4.6,3.5,7.3,4.1l-35.4,82.8c-2.2,5.7-1.5,12.1,1.9,17.1c3.4,5.1,9.2,8.1,15.3,8.1l110.1-0.6\
            c4.8,0,9.3-1.8,12.7-5.1c0.1-0.1,0.3-0.3,0.3-0.3c0.9-0.9,1.7-1.9,2.4-2.9c3.4-5.2,4-11.8,1.5-17.4l-35-81.5c2.9-0.6,5.6-2,7.7-4.2\
            c2.9-2.9,4.5-6.8,4.5-10.9l0-12.3c0-4.1-1.6-8-4.5-10.9s-6.8-4.5-10.9-4.5L268.4,224.7z M283.3,255.5l-14.9,0\
            c-1.7,0-3.1-1.4-3.1-3.1l0-12.3c0-1.7,1.4-3.1,3.1-3.1l67.3,0c1.7,0,3.1,1.4,3.1,3.1v12.3c0,1.7-1.4,3.1-3.1,3.1l-15.4,0l42.2,98.3\
            c0.8,1.9,0.6,4.1-0.5,5.8c-0.3,0.4-0.6,0.8-0.9,1.1c-1.1,1.1-2.6,1.7-4.2,1.7L246.6,363c-2,0-3.9-1-5.1-2.7\
            c-1.1-1.7-1.4-3.8-0.6-5.7L283.3,255.5z\" />\
               <g id=\"maskedLiquid\" mask=\"url(#liquidMask)\">\
                 <path id=\"tubeLiquid\" d=\"M246.6,358.9l110.2-0.6c0.6,0,1.1-0.2,1.5-0.6c0.1-0.1,0.2-0.3,0.3-0.4\
            c0.4-0.6,0.5-1.4,0.2-2c0,0-12.3-28.7-17.9-41.9c-28.6,6.6-55.4-3.9-78.1,0.1c-9,21-18.2,42.5-18.2,42.5c-0.2,0.7-0.2,1.4,0.2,2\
            C245.2,358.6,245.9,358.9,246.6,358.9z\" />\
               </g>\
             </g>\
\
           </svg>\
        </div>\
    ";

    this.tmpl = _.template(this.svg, {'imports': {'p': this}});
}

Spinner.prototype.randomize = function(v) {
	return v + _.random(-20, 20, true);
}

Spinner.prototype.randomRL = function() {
	return _.random(2, 11, true);
}

Spinner.prototype.fillColor = function() {
    return this.fillList[_.random(0, 5, false)];
}

Spinner.prototype.randomRS = function() {
    return _.random(4, 6.1, true);
}

Spinner.prototype.initiate = function() {
    var html = this.tmpl();
    $("#" + this.div_id).html(html);

    var container = $(".spinner_container");
    TweenMax.set(container, {position: 'absolute', top: '50%', left: '25%', width: '45%'});
    TweenMax.set('.spinner_container svg', {visibility: 'visible'});

    var tl = new TimelineMax();
    tl.staggerTo('#bubbleGroup circle', 3, {attr: {cy: 200}, repeat: -1}, 0.3);

    function animate_flask_color() {
        TweenMax.to('.spinner_container #tubeLiquid', 2, { fill: '#1872EA', onComplete: function() {
            TweenMax.to('.spinner_container #tubeLiquid', 2, { fill: '#36009E', onComplete: function() {
                animate_flask_color();
            }});
        }});
    };
    animate_flask_color();
}

window.Spinner = Spinner;
})();
