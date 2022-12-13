class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// function middleNode(head: ListNode): ListNode {
//   let count = 1;
//   let current = head;

//   while (current.next) {
//     count += 1;
//     current = current.next;
//   }

//   current = head;

//   for (let i = 1; i < Math.floor(count / 2) + 1; i++) {
//     current = current.next!;
//   }

//   return current;
// }

const middleNode = (head: ListNode): ListNode => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next!.next!;
  }

  return slow;
};
