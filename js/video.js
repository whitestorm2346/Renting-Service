/**
 * Created by amyjim9907 on 2016/12/2.
 */
//var video=['https://www.youtube.com/embed/kI_1Bxa9S7U','../video/學生租屋高峰期 合約糾紛多.mp4'];
//var count=0;
//var changeVideo=function(num){
//    if(count+num>=0&&count+num<video.length){
//        count+=num;
//        document.getElementById('main_video').src=video[count];
//    }
//};
//
//document.getElementById('prev').onclick = function () {
//    changeVideo(-1);
//};
//document.getElementById('next').onclick =function(){
//    changeVideo(1);
//};
$(document).ready(function(){
    var currentPosition = 0;
    var slideWidth = 560;
    var slides = $('.slide');
    var numberOfSlides = slides.length;

    // Remove scrollbar in JS
    $('#slidesContainer').css('overflow', 'hidden');

    // Wrap all .slides with #slideInner div
    slides
        .wrapAll('<div id="slideInner"></div>')
        // Float left to display horizontally, readjust .slides width
        .css({
            'float' : 'left',
            'width' : slideWidth
        });

    // Set #slideInner width equal to total width of all slides
    $('#slideInner').css('width', slideWidth * numberOfSlides);

    // Insert controls in the DOM
    $('#slideshow')
        .prepend('<div class="control" id="leftControl"></div>')
        .append('<div class="control" id="rightControl"></div>');

    // Hide left arrow control on first load
    manageControls(currentPosition);

    // Create event listeners for .controls clicks
    $('.control')
        .bind('click', function(){
            // Determine new position
            currentPosition = ($(this).attr('id')=='rightControl') ? currentPosition+1 : currentPosition-1;

            // Hide / show controls
            manageControls(currentPosition);
            // Move slideInner using margin-left
            $('#slideInner').animate({
                'marginLeft' : slideWidth*(-currentPosition)
            });
        });

    // manageControls: Hides and Shows controls depending on currentPosition
    function manageControls(position){
        // Hide left arrow if position is first slide
        if(position==0){ $('#leftControl').hide() } else{ $('#leftControl').show() }
        // Hide right arrow if position is last slide
        if(position==numberOfSlides-1){ $('#rightControl').hide() } else{ $('#rightControl').show() }
    }
});