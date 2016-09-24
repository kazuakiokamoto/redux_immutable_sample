import Immutable from 'immutable';

const TodoRecord = Immutable.Record({
    title   : "",
    editing : false
});

class todo extends TodoRecord {
    // 編集状態かどうかを返却するメソッド
    isEditing() {
        return this.get('editing');
    }
    // 編集モードにする
    edit() {
        return this.set('editing', true);
    }
    // 変更されたタイトルを保存して編集モードを解除
    save(title) {
        return this.merge({
            editing : false,
            title
        });
    }
}

export default todo;


