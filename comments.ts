
/**
 * Comments Module
 * Ajax submission and nested reply management.
 */

export const initComments = () => {
  const commentForm = document.querySelector('#commentform') as HTMLFormElement;

  if (commentForm) {
    commentForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(commentForm);
      
      console.log('Submitting comment via AJAX...');
      // WordPress Integration:
      // const response = await fetch('/wp-comments-post.php', { method: 'POST', body: formData });
      
      // Simulate success
      alert('评论提交成功！');
      commentForm.reset();
    });
  }

  // Reply anchor movement
  const replyButtons = document.querySelectorAll('.comment-reply-link');
  replyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const parentId = (e.target as HTMLElement).getAttribute('data-commentid');
      const respond = document.querySelector('#respond');
      const commentInput = document.querySelector('#comment_parent') as HTMLInputElement;
      
      if (commentInput && parentId) commentInput.value = parentId;
      console.log(`Replying to comment ID: ${parentId}`);
    });
  });
};
