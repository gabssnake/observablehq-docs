# AI Assist

<PricingBadge level="pro" />

Observable's AI Assist is powered by the [ChatGPT](https://chat.openai.com/) language model. AI Assist accelerates the notebook development process by helping you write SQL and JavaScript, fix errors, and explain how code works, to break through development obstacles. It is currently only available to Pro and Enterprise users.

## Getting started with AI Assist

To open AI Assist, first select the button illustrated by the sparkle icon in the right sidebar menu:

<figure>
  <img
    class="screenshot"
    src="/ai-assist/aiAssitSideBarMenu@1.png" alt="A screenshot of the Observable notebook sidbar menu with a red rectangle outline overlay over around the sparkle icon."
  />
  <figcaption>Select the sparkle icon in the right sidebar menu.</figcaption>
</figure>

If you open up AI Assist and your workspace isn't configured with an OpenAI API key yet, you will see the following **AI Assist panel** with a message informing you that a workspace owner can enable AI Assist in settings:

<figure>
  <img
    class="screenshot w-70"
    src="/ai-assist/aiUiNotEnabled@1.png" alt="A screenshot of the AI Assist panel not yet enabled."
  />
  <figcaption>The AI Assist panel before enabling AI Assist in settings.</figcaption>
</figure>

If your workspace already has AI Assist enabled (it is enabled by default), you should be able to start interacting with the AI chat right away:

<figure>
  <img
    class="screenshot w-70"
    src="/ai-assist/aiAssistAskQuestionGeneral@1.png" alt="A screenshot of the AI Assist panel enabled and ready for questions in the General chat context."
  />
  <figcaption>The AI Assist panel ready for questions.</figcaption>
</figure>

If you are focused on a specific cell, you are presented with more specific assistance from AI Assist:

<figure>
  <img
    class="screenshot w-100"
    src="/ai-assist/cellFocused@1.png" alt="A screenshot of the AI Assist panel focused on a specific cell so that questions asked are specific to that cell."
  />
  <figcaption>The AI Assist panel is focused on a cell.</figcaption>
</figure>

## Enabling AI Assist

To enable AI Assist, you have to be a workspace admin for the workspace for which you intend to enable. If you are not, please reach out to them for help with this step. 

As a workspace admin, open up your **Settings panel** and scroll down to the **AI Assist section**:

<figure>
  <img
    class="screenshot w-100"
    src="/ai-assist/aiAssistNotEnabled@1.png" alt="A screenshot of the Settings page scrolled down to the AI Assist section and showing the configuration options available there."
  />
  <figcaption>The AI Assist section of the Settings page.</figcaption>
</figure>

Select the **Enable AI Assist option** and then select the **+ Add Key button**:

<figure>
  <img
    class="screenshot w-100"
    src="/ai-assist/aiAssistEnabledNoKey@2.png" alt="A screenshot of the Settings page scrolled down to the AI Assist section and showing the Enable AI Assist option selected and highlighted with a red rectangle outline overlay around it and the option to add an API key which is also highlighted with a red rectangle overlay."
  />
</figure>

You are presented a modal to enter in your API key:

<figure>
  <img
    class="screenshot w-100"
    src="/ai-assist/aiAssistKeyModal.png" alt="A screenshot of the authentication modal whereby a user can enter either their OpenAI API key."
  />
</figure>

After you enter your OpenAI API Key, you should then make sure you have selected the GPT model you prefer (gpt-4 or gpt3.5-turbo-16k) and select the **Save button** to save your changes. 

:::info NOTE
ChatGPT 3.5 is significantly less expensive (see the <a href="https://openai.com/pricing">latest pricing from OpenAI</a> for up to date price comparisons) than ChatGPT 4. ChatGPT 4 is 40% more likely to "provide factual responses."`
:::

Once saved, you can see that AI Assist should be enabled, so you just need to select the **Save changes button** to save the changes and start using the feature.


<figure>
  <img
    class="screenshot w-100"
    src="/ai-assist/aiAssistSaveChanges.png" alt="A screenshot of the AI Assist section of the Settings page with a red rectangle overlay highlighting the Save changes button."
  />
</figure>

## Managing your free quota

After you enable AI Assist, if you have any, you will see your AI Assist free token quota in the AI Assist section of your workspace **Settings page**, as pictured here:

<figure>
  <img
    class="screenshot w-100"
    src="/ai-assist/settingsQuota@1.png" alt="A screenshot of the AI Assist section of the Settings pages with the proportion of free tokens used shown."
  />
</figure>

Also after enabling, you will have a battery-like quota indicator in the top-right corner of the **AI Assist panel**, providing you will some sense of the number of free tokens you have left:

<figure>
  <img
    class="screenshot w-50"
    src="/ai-assist/batteryIndicator.png" alt="A screenshot of the AI Assist panel with a battery icon in the top-right corner indicating a full battery highlighted with a red rectangle overlay."
  />
</figure>

When you run out of free tokens, your quota indicator will show as empty and you will be asked to enter an OpenAI API key to continue to use AI Assist:

<figure>
  <img
    class="screenshot w-50"
    src="/ai-assist/noMoreQuota@1.png" alt="A screenshot of the AI Assist panel with the battery icon in the top-right corner with an x through it indicating that it is out of available tokens. It is highlighted with a red rectangle overlay which is connected by a red overalayed line to another red overlayed rectangle at the bottom of the screenshot highlighting the message from the system that the user in question's free message quota has been used up and a button for entering a new OpenAI key."
  />
</figure>

Follow the **Add an OpenAI API Key to continue chatting button** or enter your API key via your workspace **Settings page** to add your OpenAI API key.

## Using AI Assist

When asking a question from AI Assist, you may be looking to get code back to use in your notebook development:

<figure>
  <img
    class="screenshot w-100"
    src="/ai-assist/aiUpdatedCellFocusedQuestion@2.png" alt="A screenshot of an SQL cell and the AI assist panel focused on a cell with a question about the cell's data in the AI Assist panel highlighted with a red rectangle overlay which points to the column that answers the question. The top of the column is also highlighted with a red rectangle overlay."
  />
</figure>

Once you have code suggestions back from AI Assist, you can easily inject that code into your notebook with one click.
<figure>
  <img
    class="screenshot w-100"
    src="/ai-assist/aiAnswerFromGpt@1.png" alt="A screenshot of an SQL cell with a suggestion back from the AI Assist panel with an option to replace and run the code in the cell it is focused on highlighted with a red rectangle overlay."
  />
</figure>

Observable instantly shows you the results:

<figure>
  <img
    class="screenshot w-100"
    src="/ai-assist/aiCodeInsertedAndRun@3.png" alt="A screenshot of the code injected by AI Assist being run in the SQL cell with a red rectangle overlay highlighting the results in the table."
  />
</figure>

## Disabling AI Assist

:::info NOTE
Disabling AI Assist disables it for all users of the workspace.
:::

To disable AI Assist, select the checkbox in the **AI Assist section** of your workspace **Settings page**:

<figure>
  <img
    class="screenshot w-100"
    src="/ai-assist/disableAiAssist.png" alt="A screenshot of the AI Assist section of the Settings page with a red rectangle outline highlighting a checked Enable AI Assist labeled checkbox."
  />
</figure>

and you will see that AI Assist has been disabled:

<figure>
  <img
    class="screenshot w-100"
    src="/ai-assist/aiAssistDisabled.png" alt="A screenshot of the AI Assist section of the Settings page with a red rectangle outline highlighting an unchecked Enable AI Assist labeled checkbox."
  />
</figure>

## Example prompts

- **Write SQL**:
  - `Write a SQL query that...`&lt;`describe results`&gt;.
- **Explain code**:
  - `Explain what this code does.`
    - include cell's code in the context
- **Explain an error**:
  - `What does this error mean?` &lt;`error`&gt;
- **Fix an error**:
  - `Given this error` &lt;`error`&gt;`, fix this code.`
    - include cell's code in context
- **Generate a Plot chart**:
  - `Using Observable Plot, create a chart that...`&lt;`chart description`&gt;.
- **Generate a D3 chart**:
  - `Using D3 create a chart that...` &lt;`chart description`&gt;.

## Context

:::info NOTE
AI Assist sends at least 500-700 tokens of context for each request. This does not include the tokens of context included from the notebook's contents, which will vary depending upon the contents of the notebook in question.
:::

### General (Notebook) Context

AI Assist can be used in two different contexts: a general context and a cell context.

When no cell is selected and a you open the **AI Assist panel**, you are in the AI Assist's general context. In the general context, users can chat with the AI Assist as if it were just a regular instance of ChatGPT. It won't know anything about any of the cells' contents and it will not have information about the notebook in this mode (unless the user specifically copies and pastes the content as AI Assist input).

### Cell Context

When you select a cell while interacting with **AI Assist**, you will be in the cell context. When in the cell context, AI Assist automatically attaches the editor contents to the prompt to help you with a related question. For SQL cells, the associated database schema is also shared with OpenAI to assist you with query writing.

The database schema associated with a focused SQL cell is shared with OpenAI by default, as it is prepended context to any message sent to ChatGPT via AI Assist under those conditions.
You may optionally include the cell editor's contents by checking the box at the bottom of the panel that says "Include code from &lt;cell_name&gt;".

### Personas

AI Assist will automatically invoke one of two personas, depending on the context: General chat or SQL persona. 

#### General chat

If you are not focused on a cell, and are therefore in general context, you will interact with the General chat persona when communicating with AI Assist. In this persona, AI Assist will be prepend messages to ChatGPT with information from Observable's and Plot's documentation and API. This allows the user to ask questions specifically about Observable and Plot and receive runnable code (in most circumstances).

#### SQL

When you focus on a SQL cell, the SQL persona will be activated. Metadata about the your selected data source (the database schema) will be sent automatically with any message, so that you can ask AI Assist to create complex SQL queries (including joins) for you using the actual column names in the table.

## Data Privacy

We at Observable want to ensure you understand how AI Assist works with respect to data privacy, so you can be confident using it as a development tool:

- **We do not train the AI model with your data**, neither does the third-party AI service (OpenAI). So there is no chance of intellectual property you share with the model being leaked to another customer using AI Assist.
- **We do not share your database connections with the AI model.** So the values of specific rows from tables in your connected databases are not shared with the AI model by using AI Assist with them connected.
- **We do share schema information and project code as model context.** So column names or specific bits of code could be sent to the model.
- **AI Assist is backed by Observable's secure data platform.** So it is afforded the same security posture as the rest of the platform. For more information, read [more regarding our platform's security model](/security/data-security-and-privacy).

Workspace admins can turn off AI Assist via **Settings>General>AI Assist**. This will turn the feature off for all team members of the workspace.

Please see our official [Terms of Service](https://observablehq.com/@observablehq/terms-of-service) for more on this.

## Known Issues

- Responses may require editing before they are able to be run in the notebook.
  - To ensure your code is compatible with Observable JavaScript, read about [Observable JavaScript](/cells/observable-javascript).
- If a response is not valid, asking the same question a second or third time may yield better results.

## Limitations

- The model's knowledge of Observable JavaScript and the Plot API are based upon prompt engineering, which incurs cost and can affect the accuracy of the responses. We try to limit the number of tokens spent on prompt engineering, but it is currently required to receive accurate responses. We are continually exploring ways to limit tokens spent and increase the accuracy of responses.
- Conversations will be deleted after 3 days.