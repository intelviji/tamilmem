var admobid = {};

// TODO: replace the following ad units with your own
if( /(android)/i.test(navigator.userAgent) ) {
  admobid = { // for Android
    banner: 'ca-app-pub-3811141053801373/1906117422',
    interstitial: 'ca-app-pub-3811141053801373/7864596089',
    rewardvideo: 'ca-app-pub-3940256099942544/5224354917',
  };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
    banner: 'ca-app-pub-3811141053801373/1906117422',
    interstitial: 'ca-app-pub-3811141053801373/7864596089',
    rewardvideo: 'ca-app-pub-3940256099942544/1712485313',
  };
} else {
  admobid = { // for Windows Phone
    banner: 'ca-app-pub-3811141053801373/1906117422',
    interstitial: 'ca-app-pub-3811141053801373/7864596089',
    rewardvideo: '',
  };
}

function initApp() {
  if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

  // this will create a banner on startup
  AdMob.createBanner( {
    adId: admobid.banner,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    overlap: false,
    offsetTopBar: false,
    bgColor: 'black',
	autoShow: true
  } );

}
function prepareAds()
{
  // this will load a full screen ad on startup
  AdMob.prepareInterstitial({
    adId: admobid.interstitial,
    autoShow: false
  });
}
function showInterAds()
{
  if(AdMob) 
  AdMob.showInterstitial();
}
if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}