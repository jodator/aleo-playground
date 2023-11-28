// The 'iou_token_vXXX' program.
program iou_token_v001.aleo {
    record ticket {
        owner: address,
        issuer: address,
        amount: u32,
    }

    transition create(private owner: address, private amount: u32) -> ticket {
        return ticket {
            owner: owner,
            issuer: self.caller,
            amount: amount,
        };
    }
}
