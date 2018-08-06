import { browser, protractor } from 'protractor';
import { MenuContentPage, ProductAddedModalPage, // ProductDetailPage,
   SummaryStepPage, SignInStepPage, AddressStepPage, ShippingStepPage,
   PaymentStepPage, BankPaymentPage, OrderResumePage, ProductListPage } from '../src/page';

describe('Buy a t-shirt', () => {
  describe('Given the web page', () => {
    beforeAll(async () => {
      await browser.get('http://automationpractice.com/');
    });

    describe('when I want to buy a T-shirt', () => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      // const productDetailPage: ProductDetailPage = new ProductDetailPage();
      const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
      const summaryStepPage: SummaryStepPage = new SummaryStepPage();
      const productListPage: ProductListPage = new ProductListPage();
      beforeAll(async () => {

        await menuContentPage.goToTShirtMenu();
        // await productDetailPage.goToProductDetail();
        await productListPage.selectProduct('Faded Short Sleeve T-shirts');
        await productAddedModalPage.goToProductAddedModal();

        const expectedCondition = protractor.ExpectedConditions;
        const condition = expectedCondition
            .elementToBeClickable(summaryStepPage.getSummaryStepPage);
        await browser.wait(condition, 3000, 'error waiting');
        await summaryStepPage.goToSummaryStep();

      });

      describe('and I log in ', () => {
        const signInStepPage: SignInStepPage = new SignInStepPage();
        const addressStepPage: AddressStepPage = new AddressStepPage();
        beforeAll(async () => {

          await signInStepPage.goToSignInStep();
          await signInStepPage.addDataSignIn();
          await addressStepPage.goToAddressStep();

        });

        describe('and especify details of shipment delivery', () => {
          const shippingStepPage: ShippingStepPage = new ShippingStepPage();
          beforeAll(async () => {

            await shippingStepPage.goToShippingStep();
            await shippingStepPage.checkBoxShipping();

          });

          describe('and I pay', () => {
            const paymentStepPage: PaymentStepPage = new PaymentStepPage();
            const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
            const orderResumePage: OrderResumePage = new OrderResumePage();
            beforeAll(async () => {
              await paymentStepPage.goToPaymentStep();
              await bankPaymentPage.goToBankPayment();
              await orderResumePage.goToOrderResume();
            });
            it('then should be bought a t-shirt', async () => {
              await expect(orderResumePage.inicialText.getText())
              .toBe('Your order on My Store is complete.');
            });
          });
        });
      });
    });
  });
});
