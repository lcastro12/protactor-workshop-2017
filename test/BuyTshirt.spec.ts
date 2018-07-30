import { browser, protractor} from 'protractor';
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

    await menuContentPage.goToTShirtMenu();

    await productDetailPage.goToProductDetail();

    await productAddedModalPage.goToProductAddedModal();

    var expectedCondition = protractor.ExpectedConditions;
    var condition= expectedCondition.elementToBeClickable(summaryStepPage.getSummaryStepPage);
    await browser.wait(condition, 3000, 'error waiting');
    await summaryStepPage.goToSummaryStep();

    await signInStepPage.goToSignInStep();

    await signInStepPage.addDataSignIn();
    await addressStepPage.goToAddressStep();

    await shippingStepPage.goToShippingStep();

    await shippingStepPage.checkBoxShipping();

    await paymentStepPage.goToPaymentStep();

    await bankPaymentPage.goToBankPayment();

    await orderResumePage.goToOrderResume();

    await orderResumePage.checkText();
  });
});
