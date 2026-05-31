import React from 'react';
import {render,screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import Hero from "../src/landing_page/home/Hero";

// Test suite
describe("Hero Component", () => {
    test("renders hero image",()=>{
        render(<Hero/>);
        const heroImage=screen.getByAltText("Hero Img");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "Media/Images/homeHero2.svg");
    })
    test("renders signup button",()=>{
        render(<Hero/>);
        const signupButton=screen.getByRole("button",{name:"Signup Now"});
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary");
    })
});