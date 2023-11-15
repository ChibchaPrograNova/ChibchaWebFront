<template>
    <form @submit.prevent="$emit('submitEvent', this.formData)">
        <div class="input-row" v-for="(field, index) in formFields" :key="index">
            <label :for="field.name">{{ field.label }}</label>

            <input v-if="field.type === 'text' ||
                field.type === 'email' ||
                field.type === 'tel' ||
                field.type === 'password'
                " :name="field.name" :type="field.type" :id="field.name" :placeholder="field.placeholder || ''"
                v-model="formData[field.name]" />
            <input v-else-if="field.type === 'number'" :name="field.name" :type="field.type" :id="field.name"
                :placeholder="field.placeholder || ''" :min="field.min || null" :max="field.max || null"
                :step="field.step || null" v-model="formData[field.name]" />

            <select v-else-if="field.type === 'select'" :name="field.name" :id="field.name" v-model="formData[field.name]">
                <option v-for="(option, optIndex) in field.options" :key="optIndex" :value="option.value">
                    {{ option.label }}
                </option>
            </select>

            <textarea v-else-if="field.type === 'textarea'" :name="field.name" :id="field.name"
                :placeholder="field.placeholder" v-model="formData[field.name]" />
        </div>
        <div class="input-row" id="buttonRow">
            <button type="submit">{{ buttonText }}</button>
        </div>
    </form>
</template>
  
<script>
import FormBuilder from '../../helpers/FormBuilder';

export default {
    props: {
        formConfig: [Array, Object],
        buttonText: String,
    },
    components: {
    },
    data() {
        return {
            formFields: [],
            formData: {},
        };
    },
    created() {
        if (this.formConfig) {
            this.formFields = this.buildFormFields(this.formConfig);
        }
    },
    methods: {
        buildFormFields(config) {
            const formFields = [];

            if (Array.isArray(config)) {
                return config;
            } else if (typeof config === 'object') {
                for (const fieldName of Object.keys(config)) {
                    const field = config[fieldName];

                    let newField = null;

                    switch (field.type) {
                        case 'text':
                        case 'email':
                            newField = {
                                type: field.type,
                                name: fieldName,
                                label: field.label || '',
                                placeholder: field.placeholder || '',
                            };
                            break;
                        case 'number':
                            newField = {
                                type: 'number',
                                name: fieldName,
                                label: field.label || '',
                                placeholder: field.placeholder || '',
                                min: field.min || null,
                                max: field.max || null,
                                step: field.step || null,
                            };
                            break;
                        case 'select':
                            newField = {
                                type: 'select',
                                name: fieldName,
                                label: field.label || '',
                                options: field.options || [],
                            };
                            break;
                    }

                    if (newField) {
                        formFields.push(newField);
                    }
                }
            }

            return formFields;
        },
    },
};
</script>
  
<style scoped>
.form-control {
    margin: 0.5rem 0;
}

label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input[type="checkbox"]+label {
    font-weight: normal;
    display: inline;
    margin: 0 0 0 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
}

input:focus,
textarea:focus {
    background-color: #e3e3d1;
    outline: none;
    border-color: #4b5757;
}

input[type="checkbox"] {
    display: inline;
    width: auto;
    border: none;
}

input[type="checkbox"]:focus {
    outline: #4b5757 solid 1px;
}

button {
    margin-top: 30px;
    background-color: #7c8a6e;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 500;
    height: 40px;
    line-height: 20px;
    list-style: none;
    outline: none;
    padding: 10px 16px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: color 100ms;
    vertical-align: baseline;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

button:hover,
button:focus {
    background-color: #b0b087;
}
</style>