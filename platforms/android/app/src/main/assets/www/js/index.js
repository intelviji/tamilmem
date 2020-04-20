/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var admobid = {};
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-3811141053801373/1906117422',
        interstitial: 'ca-app-pub-3811141053801373/7864596089'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-3811141053801373/1906117422',
        interstitial: 'ca-app-pub-3811141053801373/7864596089'
    };
} else {
    admobid = { // for Windows Phone
       banner: 'ca-app-pub-3811141053801373/1906117422',
        interstitial: 'ca-app-pub-3811141053801373/7864596089'
    };
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}

function initApp() {
	
	
	
	if(AdMob)
	{
			AdMob.hideBanner();
	}
	else{ alert( 'admob plugin not ready' ); return; }

   
}
