//  var videoList = [
//       'https://stream-skarb.s3.eu-central-1.amazonaws.com/e9b0a858-5280-4cf0-8747-cd364284076f-Bilshe%20Groshey_1280x720.mp4',
//       'https://stream-skarb.s3.eu-central-1.amazonaws.com/d413e6e0-967d-4607-8865-ed2f28a13b1f-clock_fhd_vid_mon.mp4',
//       'https://stream-skarb.s3.eu-central-1.amazonaws.com/1f32b4d9-db16-4217-a2e1-dc276c710578-Credit+pid+zastavy_1920x1080.mp4',
//       'https://stream-skarb.s3.eu-central-1.amazonaws.com/f2b31fb3-3441-43cb-b3f5-fc33e8f6bf19-Master_Moi_Akcii_18_sek.mp4',
//       'https://stream-skarb.s3.eu-central-1.amazonaws.com/02cfcc6c-2996-4a30-aeee-5e3e26ef0414-mobile%20app_1280%D1%85720.mp4',
//       'https://stream-skarb.s3.eu-central-1.amazonaws.com/80eb263d-d6e7-46f0-a5ab-67215bce6e62-ON_Line_Lombard_7_sek.mp4',
//       'https://stream-skarb.s3.eu-central-1.amazonaws.com/cab74a23-9d91-4990-a4f9-b76099b5a3b9-Perelik_Tehniky_V2.mp4',
//       'https://stream-skarb.s3.eu-central-1.amazonaws.com/027aac25-68a6-41cd-8ac6-44f36e4cf9be-Save+the+planet.mp4',
//       'https://stream-skarb.s3.eu-central-1.amazonaws.com/94c61e07-a85d-4fdb-a6e3-437bb3a99af4-Skidki+na+tehniky_1920%D1%851080.mp4',
//    ];
   
//    var currentVideoIdx = 0;
//    var element = document.getElementById('videoId');
 
//     $(window).on('load', function() {
//         $('#videoId').bind('ended', function(e) {
//             currentVideoIdx++;
//             if ( currentVideoIdx >= videoList.length ) {
//                 currentVideoIdx = 0;
//            }
//             startNexVideo(currentVideoIdx);
//         });
//     });

//     function startNexVideo(VideoIdx) {
//         $('#videoId').html('<source src=""'+videoList[VideoIdx]+'" type="video/mp4"/>');
//         $('#videoId').load();
// };  
    
// openFullscreen();
   
//     function openFullscreen() {
//         if(element.requestFullscreen) {
//          element.requestFullscreen();
//         }
//         else if(element.webkitrequestFullscreen) {
//          element.webkitRequestFullscreen();  
//         }    
//         else if(element.mozRequestFullscreen) {
//          element.mozRequestFullScreen();    
//         }  
//         else if(element.msRequestFullscreen) {
//          element.msRequestFullscreen();    
//         }
//     }  