<form action="{!! route('delete_rule') !!}" method="post">
    @csrf
    @method('delete')
    <input type="hidden" name="rule_id" value="{{ $id }}">
    <button type="submit" name="button" class="m-0.5 bg-red-100 p-1" onclick="return confirm('Точно удалить?')">Удалить п.{{ $rule->paragraph }}</button>
</form>
