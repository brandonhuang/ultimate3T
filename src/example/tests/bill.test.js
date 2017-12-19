import Bill from '../bill';

it('talks about being productive when on adderall', () => {
    let bill = new Bill({
        tookAdderall: true
    });

    expect(bill.speak()).toEqual('I finished the game logic');
});

it('talks about wasting time when not on adderall', () => {
    let bill = new Bill({
        tookAdderall: false
    });

    expect(bill.speak()).toEqual('duuuuuuuuuude I took a nap');
})
