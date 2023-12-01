// The 'iou_token_vXXX' program.
program iou_token_v001.aleo {
    record ticket {
        owner: address,
        issuer: address,
        amount: u32,
    }

    mapping publicDebt: address => u32;

    transition create(private owner: address, private amount: u32) -> ticket {
        return ticket {
            owner,
            issuer: self.caller,
            amount,
        };
    }

    transition reveal(private a_ticket: ticket) -> address {
        return a_ticket.issuer then finalize(a_ticket.amount, a_ticket.issuer);
    }

    finalize reveal(amount: u32, issuer: address) {
        let currentDebt: u32 = Mapping::get_or_use(publicDebt, issuer, 0u32);
        let newDebt: u32 = currentDebt + amount;
        Mapping::set(publicDebt, issuer, newDebt);
    }
}
