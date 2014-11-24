#import <Cordova/CDVPlugin.h>

@interface carrier : CDVPlugin {

}

- (void)getCarrierName:(CDVInvokedUrlCommand*)command;
- (void)getCountryCode:(CDVInvokedUrlCommand*)command;

@end


