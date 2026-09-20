# Interactive Productivity Dashboard

This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.

## TODO: Future Enhancements
- [X] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.
- [ ] Make it super cool
- [X] Add a weekly task goal calculator

## Weekly Task Goals
This feature calculates a user's tasks targets based on daily goals and weekly bonuses

## Imperial / Metric Converter
This application converts measurements between Imperial and Metric units. It supports inch, foot, yard, mile, centimeter, meter, and kilometer conversions.

## Logic & Pseudocode 
Pseudocode:
BEGIN
    INPUT value

    OUTPUT "Select conversionChoice: "
    INPUT conversionChoice

    IF conversionChoice = "inch to centimeter" THEN
        SET result = value * 2.54
        DISPLAY result

    ELSE IF conversionChoice = "foot to centimeter" THEN
        SET result = value * 30.48
        DISPLAY result

    ELSE IF conversionChoice = "yard to meter" THEN
        SET result = value * 0.91
        DISPLAY result

    ELSE IF conversionChoice = "mile to kilometer" THEN
        SET result = value * 1.61
        DISPLAY result

    ELSE IF conversionChoice = "centimeter to inch" THEN
        SET result = value * 0.39
        DISPLAY result

    ELSE IF conversionChoice = "centimeter to foot" THEN
        SET result = value * 0.0328
        DISPLAY result

    ELSE IF conversionChoice = "meter to yard" THEN
        SET result = value * 1.09
        DISPLAY result

    ELSE IF conversionChoice = "kilometer to mile" THEN
        SET result = value * 0.62
        DISPLAY result
    ELSE
    DISPLAY "Select an option that is available"
    
END IF
END