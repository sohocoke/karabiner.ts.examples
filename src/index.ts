import {
  ifApp,
  ifVar,
  layer,
  map,
  mapDoubleTap,
  NumberKeyValue,
  rule,
  simlayer,
  withCondition,
  withMapper,
  writeToProfile,
} from 'karabiner.ts'

writeToProfile('--dry-run', [

  simlayer('f', 'arrow-layer')
  .options({ detect_key_down_uninterruptedly: true })
  .manipulators([
    withMapper<FromKeyParam, ToKeyParam>({
      i: '↑',
      j: '←',
      l: '→',
      k: '↓',
    })((k, v) => map(k, undefined, 'any').to(v)),
    withMapper<FromKeyParam, ToKeyParam>({
      u: '←',
      o: '→',
    })((k, v) => map(k, undefined, 'any').to(v, 'left_control')),
  ]),
]);

/*
Karabiner-Elements profile parameters can also be set by the 3rd parameter
of writeToProfile('profileName', [ rules ], { params }). The default values are:

// Karabiner-Elements parameters
'basic.to_if_alone_timeout_milliseconds': 1000,
'basic.to_if_held_down_threshold_milliseconds': 500,
'basic.to_delayed_action_delay_milliseconds': 500,
'basic.simultaneous_threshold_milliseconds': 50,
'mouse_motion_to_scroll.speed': 100,

// karabiner.ts only parameters
//   for simlayer()
'simlayer.threshold_milliseconds': 200
//   for mapDoubleTap()
'double_tap.delay_milliseconds': 200,

 */
