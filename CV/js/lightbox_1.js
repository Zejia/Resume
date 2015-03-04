/**
 *
 * @authors Your Name
 * @date    2015-02-28 14:33:35
 * @version $Id$
 */
  $(document).ready(function(){
            base_url = document.location.href.substring(0, document.location.href.indexOf('index.html'), 0);

            $(".lightbox").lightbox({
                fitToScreen: true,
                imageClickClose: false
            });

            $(".lightbox-2").lightbox({
                fitToScreen: true,
                scaleImages: true,
                xScale: 1.2,
                yScale: 1.2,
                displayDownloadLink: true
            });

            $(".lightbox-json").lightbox({
                fitToScreen: true,
                jsonData: new Array(
                    {url: base_url + 'images/image-0.jpg', title: 'Image 1 loaded using JSON data' },
                    {url: base_url + 'images/image-1.jpg', title: 'Image 2 loaded using JSON data' },
                    {url: base_url + 'images/image-2.jpg', title: 'Image 3 loaded using JSON data' },
                    {url: base_url + 'images/image-3.jpg', title: 'Image 4 loaded using JSON data' }
                ),
                loopImages: true,
                imageClickClose: false,
                disableNavbarLinks: true
            });


        });


