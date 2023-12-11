// The 'iou_token_vXXX' program.
program iou_token_v002.aleo {
    record Ticket {
        owner: address,
        issuer: address,
        amount: u32,
        revealed: bool,
    }

    mapping public_debt: address => u32;

    transition create(private owner: address, private amount: u32) -> Ticket {
        return Ticket {
            owner,
            issuer: self.caller,
            amount,
            revealed: false,
        };
    }

    transition reveal(private ticket: Ticket) -> Ticket {
        assert(!ticket.revealed);
        let revealed_ticket: Ticket = Ticket {
            owner: ticket.owner,
            issuer: ticket.issuer,
            amount: ticket.amount,
            revealed: true,
        };
        return revealed_ticket then finalize(ticket.amount, ticket.issuer);
    }

    finalize reveal(amount: u32, issuer: address) {
        let current: u32 = Mapping::get_or_use(public_debt, issuer, 0u32);
        let updated: u32 = current + amount;
        Mapping::set(public_debt, issuer, updated);
    }
}
