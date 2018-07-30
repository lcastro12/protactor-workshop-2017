import { browser, protractor } from 'protractor';
import { MenuContentPage, ProductAddedModalPage, ProductDetailPage,
   SummaryStepPage, SignInStepPage, AddressStepPage, ShippingStepPage,
   PaymentStepPage, BankPaymentPage, OrderResumePage } from '../src/page';

describe('Abrir la página en el navegador', () => {
  it('entonces debería abrirse la página', async () => {
    await browser.get('http://automationpractice.com/');

  });

  describe('Proceso de compra de la camiseta', () => {
    const menuContentPage: MenuContentPage = new MenuContentPage();
    const productDetailPage: ProductDetailPage = new ProductDetailPage();
    const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
    const summaryStepPage: SummaryStepPage = new SummaryStepPage();
    it('entonces se debería comprar la camiseta', async () => {

      await menuContentPage.goToTShirtMenu();
      await productDetailPage.goToProductDetail();
      await productAddedModalPage.goToProductAddedModal();

      const expectedCondition = protractor.ExpectedConditions;
      const condition = expectedCondition
            .elementToBeClickable(summaryStepPage.getSummaryStepPage);
      await browser.wait(condition, 3000, 'error waiting');
      await summaryStepPage.goToSummaryStep();

    });

    describe('Logeo en la aplicación', () => {
      const signInStepPage: SignInStepPage = new SignInStepPage();
      const addressStepPage: AddressStepPage = new AddressStepPage();
      it('entonces debería estar logeado en la aplicación', async () => {

        await signInStepPage.goToSignInStep();
        await signInStepPage.addDataSignIn();
        await addressStepPage.goToAddressStep();

      });

      describe('Seleccionar la dirección por defecto', () => {
        const shippingStepPage: ShippingStepPage = new ShippingStepPage();
        it('entonces debería estar seleccionada la dirección', async () => {

          await shippingStepPage.goToShippingStep();
          await shippingStepPage.checkBoxShipping();

        });

        describe('Pago en el banco', () => {
          const paymentStepPage: PaymentStepPage = new PaymentStepPage();
          const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
          const orderResumePage: OrderResumePage = new OrderResumePage();
          it('entonces debería realizar el pago', async () => {

            await paymentStepPage.goToPaymentStep();
            await bankPaymentPage.goToBankPayment();
            await orderResumePage.goToOrderResume();
            await orderResumePage.checkText();
          });
        });
      });
    });
  });
});
