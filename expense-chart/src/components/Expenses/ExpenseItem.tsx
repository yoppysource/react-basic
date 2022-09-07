import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem: React.FC<{ date: Date; title: string; amount: number }> = ({
  date,
  title,
  amount,
}) => {
  // JSX 구문임
  // class 대신에 className을 사용해야한다!
  // 만약 랩핑하고 있는 태그가 없다면 셀프 클로징 태그를 이용 가능하다!
  // current value와 업데이트 하는 함수 2가지를 return

  return (
    // Card같은 코드는 그냥 함수임 JXS 코드 평가될때 실행됨
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
