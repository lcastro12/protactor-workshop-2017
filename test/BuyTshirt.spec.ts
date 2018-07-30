import { browser } from 'protractor';
import { MenuContentPage, ProductAddedModalPage, ProductDetailPage,
   SummaryStepPage, SignInStepPage, AddressStepPage, ShippingStepPage,
   PaymentStepPage, BankPaymentPage, OrderResumePage } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productDetailPage: ProductDetailPage = new ProductDetailPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderResumePage: OrderResumePage = new OrderResumePage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');

    await(browser.sleep(3000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));

    await productDetailPage.goToProductDetail();
    await(browser.sleep(3000));

    await productAddedModalPage.goToProductAddedModal();
    await(browser.sleep(3000));

    await summaryStepPage.goToSummaryStep();
    await(browser.sleep(3000));

    await signInStepPage.goToSignInStep();
    await(browser.sleep(3000));

    await signInStepPage.addDataSignIn();
    await addressStepPage.goToAddressStep();
    await(browser.sleep(3000));

    await shippingStepPage.goToShippingStep();
    await(browser.sleep(3000));

    await shippingStepPage.checkBoxShipping();
    await(browser.sleep(3000));

    await paymentStepPage.goToPaymentStep();
    await(browser.sleep(3000));

    await bankPaymentPage.goToBankPayment();
    await(browser.sleep(3000));

    await orderResumePage.goToOrderResume();
    await(browser.sleep(3000));

    await orderResumePage.checkText();
  });
});
