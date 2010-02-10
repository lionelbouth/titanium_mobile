/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2010 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */
#import "TiProxy.h"
#import "TiUIView.h"

@interface TiViewProxy : TiProxy 
{
@private
	NSMutableArray *children;
	TiUIView *view;
	TiViewProxy *parent;
	BOOL viewInitialized;
}

@property(nonatomic,readonly) NSArray *children;

#pragma mark Public
-(void)add:(id)arg;
-(void)remove:(id)arg;
-(void)show:(id)arg;
-(void)hide:(id)arg;
-(void)animate:(id)arg;

#pragma mark Framework
-(TiUIView*)view;
-(BOOL)viewAttached;
-(void)layoutChildren:(CGRect)bounds;
-(void)layoutChild:(TiViewProxy*)child bounds:(CGRect)bounds;
-(void)animationCompleted:(TiAnimation*)animation;
-(void)detachView;
-(void)destroy;
-(void)setParent:(TiViewProxy*)parent;
-(BOOL)supportsNavBarPositioning;
-(UIBarButtonItem*)barButtonItem;
-(void)removeNavBarButtonView;
-(CGRect)appFrame;
-(void)firePropertyChanges;
-(TiUIView*)newView;
-(BOOL)viewReady;
-(void)windowDidClose;
-(void)windowWillClose;
-(void)viewWillAttach;
-(void)viewDidAttach;
-(void)viewWillDetach;
-(void)viewDidDetach;

@end
