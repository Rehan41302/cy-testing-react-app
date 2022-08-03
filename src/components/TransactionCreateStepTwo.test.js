import { render, screen } from "@testing-library/react"
import TransactionCreateStepTwo from "./TransactionCreateStepTwo"

test('on initial render, the pay button is diabled', async () => {
    render(<TransactionCreateStepTwo sender={{ id: '9' }} receiver={{ id: '3' }} />);

    expect(await screen.findByRole('button', { name: /pay/i })).toBeDisabled()
})