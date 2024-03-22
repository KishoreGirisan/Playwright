//working with excel data
import { test, expect } from '@playwright/test'
const excel = require('exceljs')

test('Working with excel data', async ({page}) => {
    // let fruit = 'Avacado'
    // const workbook = new excel.Workbook()
    // const worksheet = await workbook.xlsx.readFile('/Users/kishorekumargirisan/downloads/download.xlsx')
    // const sheet = worksheet.getWorksheet('Sheet1')
    // sheet.eachRow((row, roNumber) => {
    //     row.eachCell((cell, colNumber) => {
    //         if (cell.value === 'Mango')
    //         {
    //             cell.value = fruit;
    //         }
    //     })
    // })
    // await workbook.xlsx.writeFile('/Users/kishorekumargirisan/downloads/download.xlsx')

    await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html')
    await page.locator('#fileinput').setInputFiles('/Users/kishorekumargirisan/downloads/download.xlsx')

    await page.pause();

})