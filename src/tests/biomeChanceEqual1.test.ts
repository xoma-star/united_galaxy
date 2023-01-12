import {describe, expect, test} from '@jest/globals';
import SystemGeneratorConstant from "../constants/systemGenerator.constant";

describe('Chance of biome', () => {
    test('Default systems', () => {
        let a = 0;
        (Object.keys(SystemGeneratorConstant.YELLOW.planets.chance) as (keyof typeof SystemGeneratorConstant.YELLOW.planets.chance)[])
            .forEach(x => a += SystemGeneratorConstant.YELLOW.planets.chance[x])
        expect(a).toEqual(1)
    })
    test('Red systems', () => {
        let a = 0;
        (Object.keys(SystemGeneratorConstant.RED.planets.chance) as (keyof typeof SystemGeneratorConstant.RED.planets.chance)[])
            .forEach(x => a += SystemGeneratorConstant.RED.planets.chance[x])
        expect(a).toEqual(1)
    })
    test('Green systems', () => {
        let a = 0;
        (Object.keys(SystemGeneratorConstant.GREEN.planets.chance) as (keyof typeof SystemGeneratorConstant.GREEN.planets.chance)[])
            .forEach(x => a += SystemGeneratorConstant.GREEN.planets.chance[x])
        expect(a).toEqual(1)
    })
    test('Blue systems', () => {
        let a = 0;
        (Object.keys(SystemGeneratorConstant.BLUE.planets.chance) as (keyof typeof SystemGeneratorConstant.BLUE.planets.chance)[])
            .forEach(x => a += SystemGeneratorConstant.BLUE.planets.chance[x])
        expect(a).toEqual(1)
    })
})