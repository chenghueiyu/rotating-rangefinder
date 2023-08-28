let x = 180
ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, x)
TM1650.on()
basic.forever(function () {
    if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP3P4, ModuleWorld_Analog.enRocker.Up)) {
        x = x - 2
    } else if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP3P4, ModuleWorld_Analog.enRocker.Down)) {
        x = x + 2
    } else if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP3P4, ModuleWorld_Analog.enRocker.Left)) {
        x = x - 2
    } else if (ModuleWorld_Analog.Rocker(ModuleWorld_Analog.mwAnalogNum.AP3P4, ModuleWorld_Analog.enRocker.Right)) {
        x = x + 2
    }
    if (x < 1) {
        x = 1
    } else if (x > 360) {
        x = 360
    }
})
basic.forever(function () {
    TM1650.showNumber(ModuleWorld_Digital.Ultrasonic(ModuleWorld_Digital.mwDigitalNum.P6P7))
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, x)
})
