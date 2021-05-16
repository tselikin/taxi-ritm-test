@csrf
<div>
  <input type="text"
  class="m-1 w-full"
  name="paragraph" id="paragraph"
  value="{{ $rule ? $rule->paragraph : '' }}"
  placeholder="Введите пункт правил"
  autocomplete="off">
</div>
<div>
  <input type="text"
  class="m-1 w-full"
  name="description" id="description"
  value="{{ $rule ? $rule->description : '' }}"
  placeholder="Введите описание пункта правил"
  autocomplete="off">
</div>
<div>
  <input type="text"
  class="m-1 w-full"
  name="punishment"
  value="{{ $rule ? $rule->punishment : '' }}"
  placeholder="Введите наказание за нарушение этого пункта" autocomplete="off">
</div>

<div>
  <button type="submit" class="m-1 bg-blue-200 p-2">Сохранить</button>
</div>
