describe('InvoiceListScreen', () => {
	beforeEach(async () => {
		await device.reloadReactNative();
	});

	it('should have shown some data', async () => {
		await element(by.id('header_textInput')).clearText();
		await element(by.id('header_textInput')).typeText("7066823")
		await expect(element(by.id('appButton_search'))).toBeVisible()
		await element(by.id('appButton_search')).tap();
		await expect(element(by.text('74 records found'))).toBeVisible()
		await element(by.text('Ok')).tap();
		await element(by.id("invoiceListScreen_list")).swipe('up','fast')
		await element(by.label('return')).tap();
	});

	it ('test blank search', async ()=> {
		await element(by.id('header_textInput')).clearText();
		await element(by.id('appButton_search')).tap();
		await expect(element(by.text("record not found"))).toBeVisible()
		await waitFor(element(by.text('Ok'))).toExist().withTimeout(2000);
		await element(by.text('Ok')).tap();
	})

	it('test filter' , async() => {
		await expect(element(by.text('Filter'))).toBeVisible();
		await element(by.text('Filter')).tap();

		await expect(element(by.id('footer_btnAWeekAgo'))).toBeVisible();
		await element(by.id('footer_btnAWeekAgo')).tap();
		await waitFor(element(by.text('Ok'))).toExist().withTimeout(2000);
		await element(by.text('Ok')).tap();

		await expect(element(by.id('footer_btnAMonthAgo'))).toBeVisible();
		await element(by.id('footer_btnAMonthAgo')).tap();
		await waitFor(element(by.text('Ok'))).toExist().withTimeout(2000);
		await element(by.text('Ok')).tap();

		await expect(element(by.id('footer_btnYearToDate'))).toBeVisible();
		await element(by.id('footer_btnYearToDate')).tap();
		await waitFor(element(by.text('Ok'))).toExist().withTimeout(2000);
		await element(by.text('Ok')).tap();

		await expect(element(by.id('footer_btnAllHistory'))).toBeVisible();
		await element(by.id('footer_btnAllHistory')).tap();
		await waitFor(element(by.text('Ok'))).toExist().withTimeout(2000);
		await element(by.text('Ok')).tap();

		await element(by.text("Filter")).tap();
	})

	it('test sort' , async() => {
		await expect(element(by.text('Sort'))).toBeVisible();
		await element(by.text('Sort')).tap();

		await expect(element(by.id('footer_btnInvoiceID'))).toBeVisible();
		await element(by.id('footer_btnInvoiceID')).tap();

		await expect(element(by.id('footer_btnTransactionDate'))).toBeVisible();
		await element(by.id('footer_btnTransactionDate')).tap();

		await expect(element(by.id('footer_btnTotalTax'))).toBeVisible();
		await element(by.id('footer_btnTotalTax')).tap();

		await expect(element(by.id('footer_btnTotalAmount'))).toBeVisible();
		await element(by.id('footer_btnTotalAmount')).tap();

		await expect(element(by.id('footer_btnBalanceAmount'))).toBeVisible();
		await element(by.id('footer_btnBalanceAmount')).tap();

		await element(by.text("Sort")).tap();
	})



});
