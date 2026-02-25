import type { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';

export class LoginPage{
    readonly page: Page
    private readonly username_input: Locator;
    private readonly password_input: Locator;
    private readonly login_button: Locator;
    // private readonly user: string;
    // private readonly password: string;

    constructor(page: Page){
        this.page = page;
        this.username_input = this.page.locator('[data-test="username"]');
        this.password_input = this.page.locator('[data-test="password"]');
        this.login_button = this.page.locator('[data-test="login-button"]');
        // this.user = user;
        // this.password = password;
    }

    async goToPage(){
        await this.page.goto('https://www.saucedemo.com/');
        await expect(this.page.locator('#root')).toContainText('Swag Labs');
    }

    async login(user: string, password: string){
          await this.username_input.fill(user);
          await this.password_input.fill(password);
          await this.login_button.click();
    }
}