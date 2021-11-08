var editing = "no";
var edited = "no";

window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");
    const done_list_el = document.querySelector("#done_tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();


        const task = input.value;

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const task_finished_el = document.createElement('button');
        task_finished_el.classList.add('finished');
        task_finished_el.innerText = 'Done';

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Remove';

        task_actions_el.appendChild(task_finished_el);
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        if (editing == "no" && edited == "no"){
            list_el.appendChild(task_el);
        }

        edited = "no";

        input.value = '';

        task_edit_el.addEventListener('click', (e) => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_edit_el.innerText = "Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                editing = "yes";
                edited = "no";
            } else {
                task_edit_el.innerText = "Edit";
                task_input_el.setAttribute("readonly", "readonly");
                edited = "yes";
                editing = "no";
            }
        });

        task_finished_el.addEventListener('click', (e) => {
            const done_task_el = document.createElement('div');
            done_task_el.classList.add('task');

            const done_task_content_el = document.createElement('div');
            done_task_content_el.classList.add('content');

            done_task_el.appendChild(done_task_content_el);

            const done_task_input_el = document.createElement('input');
            done_task_input_el.classList.add('text');
            done_task_input_el.type = 'text';
            done_task_input_el.value = task_input_el.value;
            done_task_input_el.setAttribute('readonly', 'readonly');

            done_task_content_el.appendChild(done_task_input_el);

            done_list_el.appendChild(done_task_el);
            // done_list_el.appendChild(done_task_el);
            list_el.removeChild(task_el);
        });

        task_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(task_el);
        });
    });
});
