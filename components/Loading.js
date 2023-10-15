import * as React from 'react';

const animatedStyle = useAnimatedStyle(() => ({
    opacity: withDelay(
         2000 * Math.random(),
         withRepeat(
             withSequence(
                 withTiming(0.4, { duration: 1000 }), 
                 withTiming(1, { duration: 1000 })
             ),
             -1,
             true,
         ),
    ),
 })) 